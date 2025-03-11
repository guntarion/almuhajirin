// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/ProgramCard.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import { Program } from '../data/types';
import { FaCalendar, FaClock, FaUsers, FaLaptop, FaGraduationCap } from 'react-icons/fa';

interface ProgramCardProps {
  program: Program;
  onEnroll: (programId: string) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onEnroll }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'expert':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getDeliveryMethodIcon = (method: string) => {
    switch (method) {
      case 'online-zoom':
        return <FaLaptop className='mr-1' />;
      case 'online-self-learning':
        return <FaGraduationCap className='mr-1' />;
      case 'offline-workshop':
        return <FaUsers className='mr-1' />;
      case 'blended':
        return <FaUsers className='mr-1' />;
      default:
        return <FaLaptop className='mr-1' />;
    }
  };

  const getDeliveryMethodText = (method: string) => {
    switch (method) {
      case 'online-zoom':
        return 'Online (Zoom)';
      case 'online-self-learning':
        return 'Self-Learning';
      case 'offline-workshop':
        return 'Workshop Offline';
      case 'blended':
        return 'Blended Learning';
      default:
        return method;
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
      <div className='relative h-48'>
        {program.thumbnailImage ? (
          <Image src={program.thumbnailImage} alt={program.title} layout='fill' objectFit='cover' />
        ) : (
          <div className='w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
            <span className='text-gray-500 dark:text-gray-400'>No image available</span>
          </div>
        )}
        <div className={`absolute top-0 right-0 px-2 py-1 m-2 rounded text-xs font-bold ${getLevelColor(program.level)}`}>
          {program.level.charAt(0).toUpperCase() + program.level.slice(1)}
        </div>
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>{program.title}</h3>

        <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2'>{program.description}</p>

        <div className='grid grid-cols-2 gap-2 mb-3'>
          <div className='flex items-center text-xs text-gray-600 dark:text-gray-300'>
            {getDeliveryMethodIcon(program.deliveryMethod)}
            <span>{getDeliveryMethodText(program.deliveryMethod)}</span>
          </div>

          <div className='flex items-center text-xs text-gray-600 dark:text-gray-300'>
            <FaClock className='mr-1' />
            <span>{program.duration}</span>
          </div>

          {program.schedule && (
            <div className='flex items-center text-xs text-gray-600 dark:text-gray-300'>
              <FaCalendar className='mr-1' />
              <span>Mulai: {new Date(program.schedule.startDate).toLocaleDateString('id-ID')}</span>
            </div>
          )}

          <div className='flex items-center text-xs text-gray-600 dark:text-gray-300'>
            <FaUsers className='mr-1' />
            <span>Kapasitas: {program.capacity}</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-1 mb-3'>
          {program.categories.map((category, index) => (
            <span key={index} className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-0.5 rounded'>
              {category
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </span>
          ))}
        </div>

        <button onClick={() => onEnroll(program.id)} className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors'>
          Daftar Program
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
