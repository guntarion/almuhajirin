// src/app/api/users/[id]/role/route.ts
export const dynamic = 'force-dynamic';
import { connectToDatabase } from '@/utils/mongodb';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

/**
 * API route to update a user's role
 * Only accessible by admins
 */
export async function PUT(request: NextRequest) {
  try {
    // Extract the user ID from the URL
    const url = request.nextUrl.pathname;
    const idMatch = url.match(/\/users\/([^\/]+)\/role/);
    const userId = idMatch ? idMatch[1] : null;

    if (!userId) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Check if user is authenticated and has admin role
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    // Connect to the database
    await connectToDatabase();

    // Parse request body
    const { role } = await request.json();

    // Validate role
    const validRoles = ['admin', 'member', 'moderator', 'editor', 'viewer', 'guest'];
    if (!validRoles.includes(role)) {
      return NextResponse.json({ message: 'Invalid role' }, { status: 400 });
    }

    // Update user role
    const updatedUser = await User.findByIdAndUpdate(userId, { role, updatedAt: new Date() }, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user role:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
