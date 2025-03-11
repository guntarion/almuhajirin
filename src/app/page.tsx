// src/app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

/**
 * Landing page accessible by guests
 * Redirects to dashboard if user is logged in
 */
export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

  // Redirect to dashboard if authenticated
  if (isAuthenticated && !isLoading) {
    redirect('/dashboard');
  }

  // Show loading state while checking authentication
  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4'>
      <div className='w-full max-w-4xl text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>Welcome to Guntar's App</h1>
        <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>Your platform for amal jariyyah</p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Button as={Link} href='/auth/login' color='primary' size='lg'>
            Silahkan Sign In
          </Button>
          <Button as={Link} href='/auth/register' color='light' size='lg'>
            Buat Akun Baru
          </Button>
        </div>
      </div>
    </div>
  );
}
