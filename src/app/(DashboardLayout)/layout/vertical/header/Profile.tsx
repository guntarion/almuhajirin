// src/app/(DashboardLayout)/layout/vertical/header/Profile.tsx
'use client';

import { Button, Dropdown } from 'flowbite-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useAuth } from '@/hooks/useAuth';

/**
 * User profile component for the dashboard header
 * Shows user information and authentication options
 */
const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();

  // Show login button if not authenticated
  if (!isAuthenticated) {
    return (
      <Button
        as={Link}
        size={'sm'}
        href='/auth/login'
        className='border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none'
      >
        Login
      </Button>
    );
  }

  return (
    <div className='relative group/menu'>
      <Dropdown
        label=''
        className='rounded-sm w-44'
        dismissOnClick={false}
        renderTrigger={() => (
          <span className='h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary'>
            <Image src={user?.image || '/images/profile/user-1.jpg'} alt={user?.name || 'User'} height={35} width={35} className='rounded-full' />
          </span>
        )}
      >
        <div className='px-4 py-3 text-sm text-gray-900 border-b border-gray-200'>
          <div className='font-medium'>{user?.name}</div>
          <div className='truncate'>{user?.email}</div>
          <div className='mt-1 text-xs text-gray-500 capitalize'>Role: {user?.role}</div>
        </div>

        <Dropdown.Item as={Link} href='/profile' className='px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark'>
          <Icon icon='solar:user-circle-outline' height={20} />
          My Profile
        </Dropdown.Item>

        {user?.role === 'admin' && (
          <Dropdown.Item as={Link} href='/users' className='px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark'>
            <Icon icon='solar:users-group-rounded-outline' height={20} />
            Manage Users
          </Dropdown.Item>
        )}
        <div className='p-3 pt-0'>
          <Button
            size={'sm'}
            onClick={() => logout()}
            className='mt-2 border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none w-full'
          >
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
