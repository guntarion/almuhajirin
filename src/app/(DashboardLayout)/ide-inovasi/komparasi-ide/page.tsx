// src/app/(DashboardLayout)/ide-inovasi/komparasi-ide/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import { frameworkSections } from './data/kerangka-komparasi';
import KomparasiIdeStyles from './KomparasiIde.module.scss';

/**
 * KomparasiIdePage Component
 *
 * This page displays a comprehensive framework for comparing innovation works.
 * It organizes comparison criteria into collapsible sections for better user experience.
 * Data is imported from a separate file for better maintainability.
 */
const KomparasiIdePage = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState<string[]>(['1']);

  // Toggle section expansion
  const toggleSection = (sectionKey: string) => {
    if (expandedSections.includes(sectionKey)) {
      setExpandedSections(expandedSections.filter((key) => key !== sectionKey));
    } else {
      setExpandedSections([...expandedSections, sectionKey]);
    }
  };

  // Function to render a subsection
  const renderSubsection = (subsection: any) => (
    <div key={subsection.title} className='mb-6 border-l-4 border-blue-500 pl-4'>
      <h4 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2'>{subsection.title}</h4>

      <div className='mb-3'>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-1'>Alasan penting:</p>
        <p className='text-gray-700 dark:text-gray-300'>{subsection.reason}</p>
      </div>

      <div>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-1'>Contoh aplikasi:</p>
        {Array.isArray(subsection.example) ? (
          <ul className='list-disc pl-5 text-gray-700 dark:text-gray-300'>
            {subsection.example.map((ex: string, i: number) => (
              <li key={i} className='mb-1' dangerouslySetInnerHTML={{ __html: ex }} />
            ))}
          </ul>
        ) : (
          <p className='text-gray-700 dark:text-gray-300'>{subsection.example}</p>
        )}
      </div>
    </div>
  );

  return (
    <>
      <CommonBreadcrumb pageTitle='Komparasi Ide Inovasi' parent='Ide Inovasi' />

      <div className='container mx-auto px-4'>
        {/* Header section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white mb-4'>Kerangka Komparasi Karya Inovasi</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Framework ini menyediakan struktur komprehensif untuk membandingkan dan mengevaluasi berbagai karya inovasi berdasarkan berbagai dimensi
            penting untuk pengambilan keputusan strategis.
          </p>
        </div>

        {/* Main content with Accordion sections */}
        <div className='grid grid-cols-1 gap-6 mb-8'>
          {frameworkSections.map((section) => (
            <div
              key={section.key}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                expandedSections.includes(section.key) ? 'border-l-4 border-blue-600' : ''
              }`}
            >
              {/* Section header */}
              <div
                className={`px-6 py-4 cursor-pointer flex justify-between items-center ${
                  expandedSections.includes(section.key) ? 'bg-blue-50 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => toggleSection(section.key)}
              >
                <h2 className='text-xl font-bold text-gray-800 dark:text-white'>{section.title}</h2>
                <div className='text-blue-600 dark:text-blue-400'>
                  {expandedSections.includes(section.key) ? (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                  ) : (
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  )}
                </div>
              </div>

              {/* Section content */}
              {expandedSections.includes(section.key) && (
                <div className='px-6 py-4 bg-gray-50 dark:bg-gray-900'>{section.subsections.map(renderSubsection)}</div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-6'>
          <h3 className='text-2xl font-bold mb-4'>Mulai Komparasi Inovasi Anda</h3>
          <p className='mb-6'>
            Gunakan kerangka ini untuk melakukan penilaian komprehensif terhadap berbagai inovasi yang sedang Anda pertimbangkan atau kembangkan.
          </p>
          <div className='flex flex-wrap gap-4'>
            <button className='bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors'>
              Buat Komparasi Baru
            </button>
            <Link
              href='/ide-inovasi/komparasi-ide/contoh'
              className='bg-blue-700 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors flex items-center'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
              </svg>
              Lihat Contoh Komparasi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KomparasiIdePage;
