'use client';

import React from 'react';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/CommonCardHeader';

const SamplePage = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle='Sample Page' parent='Extra' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader heading='Sample Page' subHeading={[{ text: 'This is a sample page with common components' }]} />
              <div className='p-6'>
                <p className='text-gray-600 dark:text-gray-300'>
                  This is a basic sample page that demonstrates the use of CommonBreadcrumb and CommonCardHeader components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SamplePage;
