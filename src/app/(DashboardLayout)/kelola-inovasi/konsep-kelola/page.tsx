// src/app/(DashboardLayout)/kelola-inovasi/konsep-kelola/page.tsx
'use client';

import React, { useState } from 'react';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/CommonCardHeader';
import { innovationStandardData, aiDevelopmentData } from './data';
import CollapsibleSection from './components/CollapsibleSection';
import CardNavigator from './components/CardNavigator';
import CaseStudyViewer from './components/CaseStudyViewer';
import './KonsepKelola.module.scss';

/**
 * KonsepKelolaPage Component
 *
 * Displays information about innovation standardization structure
 * and case studies for different aspects of innovation
 */
const KonsepKelolaPage = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <>
      <CommonBreadcrumb pageTitle='Struktur Standarisasi Karya Inovasi' parent='Kelola Inovasi' />
      <div className='container mx-auto px-4 pb-10'>
        <div className='grid grid-cols-1 gap-6'>
          {/* Introduction Section */}
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader
                heading='Struktur Standarisasi Karya Inovasi'
                subHeading={[{ text: 'Panduan komprehensif untuk penilaian, perbandingan, dan komunikasi karya inovasi' }]}
              />
              <div className='p-6'>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Struktur ini dirancang untuk menjadi komprehensif sekaligus fleksibel, dapat disesuaikan untuk berbagai jenis inovasi. Penggunaannya
                  secara konsisten akan memudahkan pengelola inovasi untuk:
                </p>
                <ul className='list-disc pl-8 mb-6 space-y-2 text-gray-600 dark:text-gray-300'>
                  {innovationStandardData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AI Development Section */}
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader
                heading='Pengembangan Karya Inovasi dengan AI'
                subHeading={[{ text: 'Pemanfaatan kecerdasan buatan untuk meningkatkan kualitas karya inovasi' }]}
              />
              <div className='p-6'>
                <div className='mb-6'>
                  <CardNavigator data={aiDevelopmentData} activeIndex={activeCardIndex} setActiveIndex={setActiveCardIndex} />
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Section */}
          <div className='col-span-1'>
            <div className='rounded-lg shadow-md overflow-hidden'>
              <CommonCardHeader
                heading='Contoh Kasus dan Implementasi'
                subHeading={[{ text: 'Studi kasus dan contoh penerapan standar inovasi dalam berbagai sektor' }]}
              />
              <CaseStudyViewer />
            </div>
          </div>

          {/* Detailed Sections */}
          {/* {innovationStandardData.detailedSections.map((section, index) => (
            <CollapsibleSection key={index} title={section.title} content={section.content} subsections={section.subsections} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default KonsepKelolaPage;
