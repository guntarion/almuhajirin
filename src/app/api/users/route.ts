// src/app/api/users/route.ts
import { connectToMongoose } from '@/utils/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';

/**
 * API route to get all users
 * Only accessible by admins
 *
 * Force dynamic to ensure proper authentication checks
 */
export const dynamic = 'force-dynamic';

/**
 * GET handler for fetching all users
 * This is protected by admin role check
 */
export async function GET() {
  try {
    // Check if user is authenticated and has admin role
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    // Connect to the database
    await connectToMongoose();

    // Get all users with timeout settings
    const users = await User.find().sort({ createdAt: -1 }).setOptions({
      maxTimeMS: 5000, // Set 5 second timeout for the query
      timeout: true,
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
