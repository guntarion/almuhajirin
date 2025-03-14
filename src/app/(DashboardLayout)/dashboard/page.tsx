// src/app/(DashboardLayout)/dashboard/page.tsx
'use client';

import React from 'react';

import CommonBreadcrumb from '@/app/components/shared/CommonBreadcrumb';
import { useAuth } from '@/hooks/useAuth';
import DonasiDashboard from '@/app/components/dashboard-donasi/DonasiDashboard';

/**
 * Dashboard page for authenticated users
 * Shows personalized welcome message based on user role
 */
const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <CommonBreadcrumb pageTitle='Dashboard' parent='Home' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md p-6'>
              <h2 className='text-2xl font-bold mb-4'>Welcome, {user?.name || 'User'}!</h2>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                You are logged in as <span className='font-medium capitalize'>{user?.role || 'guest'}</span>.
              </p>

              {/* Admin-specific content */}
              {user?.role === 'admin' && (
                <div className='bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6'>
                  <h3 className='text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2'>Admin Dashboard</h3>
                  <p className='text-blue-700 dark:text-blue-300'>
                    As an administrator, you have access to all features of the platform, including user management.
                  </p>
                </div>
              )}

              {/* Role-specific guidelines */}
              <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
                <h3 className='text-lg font-semibold mb-2'>Your Access Level</h3>
                <DonasiDashboard></DonasiDashboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
