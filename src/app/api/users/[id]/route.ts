// src/app/api/users/[id]/route.ts
import { connectToMongoose } from '@/utils/mongodb';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/options';

/**
 * API route to get a specific user by ID
 * Users can only access their own profile unless they are admins
 *
 * Force dynamic to ensure proper authentication checks
 */
export const dynamic = 'force-dynamic';

/**
 * GET handler for fetching a specific user
 */
export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Connect to the database
    await connectToMongoose();

    // Extract the user ID from the URL
    const url = request.nextUrl.pathname;
    const idMatch = url.match(/\/users\/([^\/]+)$/);
    const userId = idMatch ? idMatch[1] : null;

    if (!userId) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Check if the user is trying to access their own profile or is an admin
    if (session.user.id !== userId && session.user.role !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Find the user by ID
    const user = await User.findById(userId).select('-password -resetToken -resetTokenExpiry');

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH handler for updating a specific user
 */
export async function PATCH(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Connect to the database
    await connectToMongoose();

    // Extract the user ID from the URL
    const url = request.nextUrl.pathname;
    const idMatch = url.match(/\/users\/([^\/]+)$/);
    const userId = idMatch ? idMatch[1] : null;

    if (!userId) {
      return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
    }

    // Check if the user is trying to update their own profile or is an admin
    if (session.user.id !== userId && session.user.role !== 'admin') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    // Parse the request body
    const data = await request.json();

    // Fields that can be updated
    const allowedFields = ['name', 'image', 'namaPanggilan', 'nomerHandphone', 'gender', 'tanggalLahir'];

    // Filter out any fields that are not allowed to be updated
    const updateData: Record<string, any> = {};
    for (const field of allowedFields) {
      if (data[field] !== undefined) {
        updateData[field] = data[field];
      }
    }

    // Add updatedAt timestamp
    updateData.updatedAt = new Date();

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true, runValidators: true }).select(
      '-password -resetToken -resetTokenExpiry'
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
