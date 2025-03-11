// src/utils/database.ts
import { connectToDatabase as connectToMongo } from './mongodb';
import { connectToMySQL } from './mysql';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

/**
 * Get the current user ID from NextAuth session and retrieve corresponding MySQL user
 */
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null;
  }

  // Get the user ID from MongoDB/NextAuth session
  const mongoUserId = session.user.id;

  // Find or create corresponding user in MySQL
  const db = await connectToMySQL();
  const [rows] = await db.execute<RowDataPacket[]>('SELECT * FROM users WHERE mongo_id = ?', [mongoUserId]);

  // If user exists in MongoDB but not in MySQL, create mapping
  if (rows.length === 0) {
    // Insert user into MySQL with reference to MongoDB ID
    const [result] = (await db.execute('INSERT INTO users (mongo_id, name, email, role) VALUES (?, ?, ?, ?)', [
      mongoUserId,
      session.user.name,
      session.user.email,
      session.user.role,
    ])) as [ResultSetHeader, any];

    // Return newly created user
    return {
      id: result.insertId,
      mongoId: mongoUserId,
      name: session.user.name,
      email: session.user.email,
      role: session.user.role,
    };
  }

  return rows[0];
}
