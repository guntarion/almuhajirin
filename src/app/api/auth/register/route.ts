// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/utils/mongodb';

/**
 * API route for user registration
 * Handles email/password registration
 *
 * Force dynamic to ensure proper user registration
 */
export const dynamic = 'force-dynamic';

/**
 * POST handler for user registration
 */
export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Connect to database
    const client = await connectToDatabase();
    const db = client.db();
    const usersCollection = db.collection('users');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Determine role - special handling for admin email
    const role = email === 'guntarion@gmail.com' ? 'admin' : 'member';

    // Create new user directly in the database
    const now = new Date();
    const result = await usersCollection.insertOne({
      name,
      email,
      password: hashedPassword, // Make sure password is saved
      role,
      createdAt: now,
      updatedAt: now,
    });

    // Remove password from response
    const sanitizedUser = {
      id: result.insertedId.toString(),
      name,
      email,
      role,
    };

    return NextResponse.json({ message: 'User registered successfully', user: sanitizedUser }, { status: 201 });
  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
