// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/InnovationCard.tsx
/**
 * Component for displaying an innovation card in the listing page
 * Shows key information and metrics about an innovation
 */

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inovasi } from '../data/types';
import { FaStar, FaClock, FaCogs, FaChartLine, FaUsers } from 'react-icons/fa';

interface InnovationCardProps {
  innovation: Inovasi;
}

const InnovationCard: React.FC<InnovationCardProps> = ({ innovation }) => {
  // Function to display rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={`inline-block ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />);
    }
    return stars;
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
      <div className='relative h-48 w-full'>
        {innovation.featuredImage ? (
          <Image
            src={innovation.featuredImage}
            alt={innovation.title}
            layout='fill'
            objectFit='cover'
            className='transition-opacity duration-300'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJWwPB8mWFWgAAAABJRU5ErkJggg=='
          />
        ) : (
          <div className='flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700'>
            <span className='text-gray-500 dark:text-gray-400'>No image available</span>
          </div>
        )}
        <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded'>{innovation.category}</div>
      </div>

      <div className='p-4'>
        <Link href={`/kelola-inovasi/diseminasi/${innovation.id}`}>
          <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
            {innovation.title}
          </h3>
        </Link>

        <p className='text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2'>{innovation.executiveSummary[0]}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {innovation.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded'>
              {tag}
            </span>
          ))}
          {innovation.tags.length > 3 && (
            <span className='text-xs text-gray-500 dark:text-gray-400 px-2 py-1'>+{innovation.tags.length - 3} more</span>
          )}
        </div>

        <div className='grid grid-cols-2 gap-2 mb-3'>
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaCogs className='mr-1 text-blue-500' />
            <span>Kompleksitas: {innovation.complexity}</span>
          </div>
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaClock className='mr-1 text-green-500' />
            <span>Timeline: {innovation.timeline}</span>
          </div>
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaUsers className='mr-1 text-purple-500' />
            <span>Sumber Daya: {innovation.resources}</span>
          </div>
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaChartLine className='mr-1 text-red-500' />
            <span>Adopsi: {innovation.adoptingUnits.length} unit</span>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex'>
            {renderStars(innovation.overallRating)}
            <span className='ml-1 text-sm text-gray-600 dark:text-gray-300'>({innovation.overallRating.toFixed(1)})</span>
          </div>

          <Link href={`/kelola-inovasi/diseminasi/${innovation.id}`} className='text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline'>
            Detail Inovasi →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnovationCard;
