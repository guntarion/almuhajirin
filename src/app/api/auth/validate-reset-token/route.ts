// src/app/api/auth/validate-reset-token/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/utils/mongodb';

/**
 * API route for validating password reset tokens
 *
 * Force dynamic to ensure proper token validation
 */
export const dynamic = 'force-dynamic';

/**
 * GET handler for token validation
 */
export async function GET(request: NextRequest) {
  try {
    // Use URL constructor to safely get search params
    const url = new URL(request.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Token is required' }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();
    const db = client.db();
    const usersCollection = db.collection('users');

    // Find user with token and check if it's expired
    const user = await usersCollection.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() }, // Token must not be expired
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    return NextResponse.json({ message: 'Token is valid' }, { status: 200 });
  } catch (error) {
    console.error('Error validating token:', error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
