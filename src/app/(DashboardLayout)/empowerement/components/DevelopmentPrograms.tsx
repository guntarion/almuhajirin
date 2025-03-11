// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/DevelopmentPrograms.tsx

'use client';

import React from 'react';
import { Program } from '../data/types';
import ProgramCard from './ProgramCard';
import { FaArrowRight } from 'react-icons/fa';

interface DevelopmentProgramsProps {
  recommendedPrograms: Program[];
  popularPrograms: Program[];
}

const DevelopmentPrograms: React.FC<DevelopmentProgramsProps> = ({ recommendedPrograms, popularPrograms }) => {
  const handleEnroll = (programId: string) => {
    // In a real implementation, this would open the enrollment modal
    console.log('Enrolling in program:', programId);
  };

  return (
    <div className='space-y-8'>
      {/* Recommended Programs */}
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Program yang Direkomendasikan untuk Anda</h3>
          <button className='text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline'>
            Lihat Semua <FaArrowRight className='ml-1' />
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {recommendedPrograms.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} onEnroll={handleEnroll} />
          ))}
        </div>
      </div>

      {/* Popular Programs */}
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Program Terpopuler</h3>
          <button className='text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline'>
            Lihat Semua <FaArrowRight className='ml-1' />
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {popularPrograms.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} onEnroll={handleEnroll} />
          ))}
        </div>
      </div>

      {/* Upcoming Programs */}
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Program Mendatang</h3>
          <button className='text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center hover:underline'>
            Lihat Semua <FaArrowRight className='ml-1' />
          </button>
        </div>

        {/* Upcoming Programs Calendar View */}
        <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4'>
          <div className='text-center py-6'>
            <p className='text-gray-500 dark:text-gray-400'>Coming soon - Program Calendar View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPrograms;
