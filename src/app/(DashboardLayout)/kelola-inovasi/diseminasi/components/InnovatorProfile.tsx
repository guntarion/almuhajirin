// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/InnovatorProfile.tsx
/**
 * Component for displaying innovator profiles with contact information
 * Allows users to reach out to innovators for further information
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { Innovator } from '../data/types';
import { FaEnvelope, FaPhone, FaBuilding, FaUserTie } from 'react-icons/fa';

interface InnovatorProfileProps {
  innovators: Innovator[];
}

const InnovatorProfile: React.FC<InnovatorProfileProps> = ({ innovators }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Tim Inovator</h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {innovators.map((innovator) => (
          <div key={innovator.id} className='flex flex-col sm:flex-row border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden'>
            <div className='sm:w-1/3 relative h-40 sm:h-auto'>
              {innovator.profileImage ? (
                <Image
                  src={innovator.profileImage}
                  alt={innovator.name}
                  layout='fill'
                  objectFit='cover'
                  className='transition-opacity duration-300'
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJWwPB8mWFWgAAAABJRU5ErkJggg=='
                />
              ) : (
                <div className='flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700'>
                  <FaUserTie className='text-4xl text-gray-500 dark:text-gray-400' />
                </div>
              )}
            </div>

            <div className='p-4 sm:w-2/3'>
              <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-1'>{innovator.name}</h4>

              <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                <FaUserTie className='mr-1 text-blue-500' />
                <span>{innovator.position}</span>
              </div>

              <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                <FaBuilding className='mr-1 text-blue-500' />
                <span>{innovator.unit}</span>
              </div>

              <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                <FaEnvelope className='mr-1 text-blue-500' />
                <a href={`mailto:${innovator.email}`} className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                  {innovator.email}
                </a>
              </div>

              {innovator.phone && (
                <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                  <FaPhone className='mr-1 text-blue-500' />
                  <a href={`tel:${innovator.phone}`} className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                    {innovator.phone}
                  </a>
                </div>
              )}

              <p className='text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2'>{innovator.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4'>
        <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Ingin Konsultasi Dengan Tim Inovator?</h4>
        <p className='text-sm text-gray-600 dark:text-gray-300 mb-3'>
          Tim inovator siap membantu memberikan informasi lebih lanjut dan dukungan implementasi untuk unit Anda.
        </p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'>Jadwalkan Konsultasi</button>
      </div>
    </div>
  );
};

export default InnovatorProfile;
