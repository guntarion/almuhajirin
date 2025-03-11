// src/app/auth/unauthorized/page.tsx
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import React from 'react';
import Link from 'next/link';
import { Button } from 'flowbite-react';

/**
 * Unauthorized access page
 * Displayed when user tries to access a page without required permissions
 */
const UnauthorizedPage = () => {
  return (
    <div className='relative overflow-hidden h-screen bg-muted dark:bg-dark flex flex-col items-center justify-center'>
      <div className='text-center'>
        <Logo />
        <h1 className='mt-8 text-4xl font-bold text-gray-900 dark:text-white'>Access Denied</h1>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>You don't have permission to access this page.</p>
        <div className='mt-8 flex justify-center gap-4'>
          <Button as={Link} href='/' color='light'>
            Go Home
          </Button>
          <Button as={Link} href='/auth/login' color='primary'>
            Login with Different Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
