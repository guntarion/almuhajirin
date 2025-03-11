// src/app/api/auth/[...nextauth]/options.ts
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

// Initialize MongoDB client for the adapter
const MONGODB_URI = process.env.MONGODB_URI || '';
const client = new MongoClient(MONGODB_URI);
const clientPromise = client.connect();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Connect directly to MongoDB
          const client = await clientPromise;
          const db = client.db();
          const usersCollection = db.collection('users');

          // Find user by email
          const user = await usersCollection.findOne({ email: credentials.email });

          // If user doesn't exist or has no password (e.g., Google sign-in only)
          if (!user || !user.password) {
            console.log('User not found or no password:', credentials.email);
            return null;
          }

          // Compare passwords
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordValid) {
            console.log('Invalid password for user:', credentials.email);
            return null;
          }

          // Return user object
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role || 'member',
          };
        } catch (error) {
          console.error('Error in authorize function:', error);
          return null;
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  // Rest of the code remains the same...
  callbacks: {
    async signIn({ user }) {
      // When a user signs in, ensure they have a role
      try {
        const db = (await clientPromise).db();
        const usersCollection = db.collection('users');

        // Check if the user already exists and has a role
        const existingUser = await usersCollection.findOne({ email: user.email });

        if (existingUser && !existingUser.role) {
          // User exists but doesn't have a role, add default role
          await usersCollection.updateOne({ email: user.email }, { $set: { role: 'member' } });

          // Special case for your admin user
          if (user.email === 'guntarion@gmail.com') {
            await usersCollection.updateOne({ email: user.email }, { $set: { role: 'admin' } });
          }
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return true; // Continue sign in even if there's an error
      }
    },
    async jwt({ token, user }) {
      try {
        // If we have a user, get their role from the database
        if (user?.email) {
          const db = (await clientPromise).db();
          const usersCollection = db.collection('users');

          const dbUser = await usersCollection.findOne({ email: user.email });

          if (dbUser) {
            token.role = dbUser.role || 'member';
            token.id = dbUser._id.toString();
          }
        }
      } catch (error) {
        console.error('Error in jwt callback:', error);
      }

      return token;
    },
    async session({ session, token }) {
      // Add role to the session
      if (session?.user) {
        session.user.role = (token.role as string) || 'member';
        session.user.id = token.id as string;
      }

      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    createUser: async ({ user }) => {
      // When a user is created, ensure they have a role
      try {
        const db = (await clientPromise).db();
        const usersCollection = db.collection('users');

        // Set default role for the new user
        let role = 'member';

        // Set admin role for your email
        if (user.email === 'guntarion@gmail.com') {
          role = 'admin';
        }

        await usersCollection.updateOne({ email: user.email }, { $set: { role } });
      } catch (error) {
        console.error('Error in createUser event:', error);
      }
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
