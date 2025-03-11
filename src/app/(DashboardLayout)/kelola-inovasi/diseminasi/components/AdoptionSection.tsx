// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/AdoptionSection.tsx
/**
 * Component for displaying units that have adopted the innovation
 * Shows implementation status and testimonials
 */

'use client';

import React from 'react';
import { AdoptingUnit } from '../data/types';
import { FaCheckCircle, FaSpinner, FaCalendarAlt, FaUserTie, FaQuoteLeft } from 'react-icons/fa';

interface AdoptionSectionProps {
  adoptingUnits: AdoptingUnit[];
}

const AdoptionSection: React.FC<AdoptionSectionProps> = ({ adoptingUnits }) => {
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // Function to render status badge
  const renderStatusBadge = (status: 'planning' | 'implementing' | 'completed') => {
    switch (status) {
      case 'planning':
        return (
          <span className='bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-2 py-1 rounded-full flex items-center'>
            <FaCalendarAlt className='mr-1' /> Perencanaan
          </span>
        );
      case 'implementing':
        return (
          <span className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full flex items-center'>
            <FaSpinner className='mr-1 animate-spin' /> Implementasi
          </span>
        );
      case 'completed':
        return (
          <span className='bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-full flex items-center'>
            <FaCheckCircle className='mr-1' /> Selesai
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Unit Yang Telah Mengadopsi</h3>

      {adoptingUnits.length === 0 ? (
        <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center'>
          <p className='text-gray-600 dark:text-gray-300'>Belum ada unit yang mengadopsi inovasi ini.</p>
          <button className='mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'>
            Jadi Unit Pertama Yang Adopsi
          </button>
        </div>
      ) : (
        <div className='space-y-6'>
          {adoptingUnits.map((unit) => (
            <div key={unit.id} className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <div className='flex flex-wrap justify-between items-start mb-3'>
                <h4 className='font-semibold text-gray-900 dark:text-white'>{unit.name}</h4>
                {renderStatusBadge(unit.status)}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-600 dark:text-gray-300 mb-2'>
                    <span className='font-medium'>Tanggal Implementasi:</span> {formatDate(unit.implementationDate)}
                  </p>

                  {unit.contactPerson && (
                    <p className='text-sm text-gray-600 dark:text-gray-300 flex items-center'>
                      <FaUserTie className='mr-2 text-blue-500' />
                      <span>PIC: {unit.contactPerson}</span>
                    </p>
                  )}
                </div>

                {unit.testimonial && (
                  <div className='bg-gray-50 dark:bg-gray-700 p-3 rounded'>
                    <div className='flex items-start'>
                      <FaQuoteLeft className='text-gray-400 dark:text-gray-500 mt-1 mr-2' />
                      <p className='text-sm italic text-gray-600 dark:text-gray-300'>"{unit.testimonial}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className='mt-6 text-center'>
            <p className='text-gray-600 dark:text-gray-300 mb-3'>Tertarik untuk mengimplementasikan inovasi ini di unit Anda?</p>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'>
              Ajukan Adopsi Inovasi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdoptionSection;
