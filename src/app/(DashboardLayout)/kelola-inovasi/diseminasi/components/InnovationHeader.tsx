// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/InnovationHeader.tsx
/**
 * Component for displaying the header of an innovation detail page
 * Shows title, summary, ratings, and key metrics
 */

'use client';

import React from 'react';
import Image from 'next/image';
import { FaStar, FaCalendarAlt, FaTags, FaBuilding, FaAward } from 'react-icons/fa';

interface InnovationHeaderProps {
  title: string;
  category: string;
  executiveSummary: string[];
  overallRating: number;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  featuredImage: string;
  awards: {
    title: string;
    year: string;
    level: 'unit' | 'regional' | 'national' | 'international';
    description: string;
  }[];
  adoptingUnits: {
    id: string;
    name: string;
    implementationDate: string;
    status: 'planning' | 'implementing' | 'completed';
    testimonial?: string;
    contactPerson?: string;
  }[];
  highlightPoints: string[];
}

const InnovationHeader: React.FC<InnovationHeaderProps> = ({
  title,
  category,
  executiveSummary,
  overallRating,
  createdAt,
  updatedAt,
  tags,
  featuredImage,
  awards,
  adoptingUnits,
  highlightPoints,
}) => {
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // Function to display rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={`inline-block ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} />);
    }
    return stars;
  };

  // Function to determine award badge color
  const getAwardBadgeColor = (level: 'unit' | 'regional' | 'national' | 'international') => {
    switch (level) {
      case 'unit':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'regional':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'national':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'international':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
      {/* Featured Image */}
      <div className='relative h-64 w-full'>
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={title}
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
        <div className='absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded'>{category}</div>
      </div>

      <div className='p-6'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>{title}</h1>

        <div className='flex flex-wrap items-center gap-4 mb-4'>
          {/* Rating */}
          <div className='flex items-center'>
            {renderStars(overallRating)}
            <span className='ml-1 text-sm text-gray-600 dark:text-gray-300'>({overallRating.toFixed(1)})</span>
          </div>

          {/* Date */}
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaCalendarAlt className='mr-1' />
            <span>Dibuat: {formatDate(createdAt)}</span>
          </div>

          {/* Units Count */}
          <div className='flex items-center text-sm text-gray-600 dark:text-gray-300'>
            <FaBuilding className='mr-1' />
            <span>Diadopsi: {adoptingUnits.length} unit</span>
          </div>
        </div>

        {/* Awards */}
        {awards.length > 0 && (
          <div className='mb-4'>
            <div className='flex items-center mb-2'>
              <FaAward className='text-yellow-500 mr-2' />
              <h3 className='text-sm font-medium text-gray-900 dark:text-white'>Penghargaan</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {awards.map((award, index) => (
                <span key={index} className={`text-xs px-2 py-1 rounded-full ${getAwardBadgeColor(award.level)}`} title={award.description}>
                  {award.title} ({award.year})
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Executive Summary */}
        <div className='mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Ringkasan Eksekutif</h2>
          {executiveSummary.map((paragraph, index) => (
            <p key={index} className='text-gray-600 dark:text-gray-300 mb-2'>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlight Points */}
        {highlightPoints && highlightPoints.length > 0 && (
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4 mb-6'>
            <h3 className='font-medium text-gray-900 dark:text-white mb-3'>Poin-poin Utama Inovasi</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {highlightPoints.map((point, index) => (
                <li key={index} className='flex items-start'>
                  <span className='inline-block w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5'>
                    {index + 1}
                  </span>
                  <span className='text-sm text-gray-700 dark:text-gray-300'>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className='flex items-center'>
          <FaTags className='text-gray-400 mr-2' />
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <span key={index} className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationHeader;
