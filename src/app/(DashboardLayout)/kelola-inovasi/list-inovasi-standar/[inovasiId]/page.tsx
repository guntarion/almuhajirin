// src/app/(DashboardLayout)/kelola-inovasi/list-inovasi-standar/[inovasiId]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/CommonCardHeader';
import { innovations, Innovation } from '../data';

const InovasiDetailPage = () => {
  const params = useParams();
  const [innovation, setInnovation] = useState<Innovation | null>(null);

  useEffect(() => {
    if (params.inovasiId) {
      const foundInnovation = innovations.find((item) => item.id === params.inovasiId);
      if (foundInnovation) {
        setInnovation(foundInnovation);
      }
    }
  }, [params]);

  if (!innovation) {
    return (
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <div className='p-6'>
                <p className='text-gray-600 dark:text-gray-300'>Inovasi tidak ditemukan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular section renderer for non-improvement sections
  const renderSection = (title: string, items: string[]) => (
    <div className='mb-6'>
      <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3'>{title}</h3>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li
            key={index}
            className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  // Enhanced section renderer with improvement functionality
  const renderImprovementSection = (title: string, items: string[]) => (
    <div className='mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-[1.01]'>
      <div className='flex justify-between items-start mb-3'>
        <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>{title}</h3>
        <div className='flex space-x-2'>
          <button
            className='px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-all duration-200 flex items-center hover:scale-105'
            onClick={() => alert(`Improve ${title}`)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
            Improve!
          </button>
          <button
            className='px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-sm font-medium rounded-md transition-all duration-200 flex items-center hover:scale-105'
            onClick={() => alert(`See improvements for ${title}`)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
              />
            </svg>
            See Improvement
          </button>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 p-3 rounded-md'>
        <ul className='space-y-2'>
          {items.map((item, index) => (
            <li
              key={index}
              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low':
        return 'success';
      case 'Moderate':
        return 'warning';
      case 'High':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getResourcesColor = (resources: string) => {
    switch (resources) {
      case 'Low':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getTimelineColor = (timeline: string) => {
    switch (timeline) {
      case 'Short':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'Long':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <>
      <CommonBreadcrumb pageTitle='Detail Inovasi' parent='Kelola Inovasi' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader heading={innovation.title} />
              <div className='p-6'>
                <div className='mb-6'>
                  <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                      <span className='px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                        {innovation.category}
                      </span>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>Kompleksitas:</span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            innovation.complexity === 'Low'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : innovation.complexity === 'Moderate'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}
                        >
                          {innovation.complexity}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>Sumber Daya:</span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            innovation.resources === 'Low'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : innovation.resources === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}
                        >
                          {innovation.resources}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>Timeline:</span>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            innovation.timeline === 'Short'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : innovation.timeline === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}
                        >
                          {innovation.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-8'>
                  {renderSection('Ringkasan Eksekutif', innovation.executiveSummary)}
                  {renderImprovementSection('Identifikasi Pain Points dan Dampaknya', innovation.painPoints)}
                  {renderImprovementSection('Identifikasi Stakeholder', innovation.stakeholders)}
                  {renderImprovementSection('Solusi yang Diajukan', innovation.solution)}
                  {renderImprovementSection('Fitur Utama dan Fungsionalitas', innovation.features)}
                  {renderImprovementSection('Aspek Kebaruan (Novelty)', innovation.novelty)}
                  {renderSection('Analisis Komparatif dengan Solusi Eksisting', innovation.comparativeAnalysis)}

                  <div className='mb-8'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>Analisis Investasi</h3>
                    <div className='space-y-6'>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Biaya Pengembangan dan Implementasi</h4>
                        <ul className='space-y-2'>
                          {innovation.investment.developmentCost.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>SDM yang Dibutuhkan</h4>
                        <ul className='space-y-2'>
                          {innovation.investment.requiredResources.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Infrastruktur dan Teknologi Pendukung</h4>
                        <ul className='space-y-2'>
                          {innovation.investment.infrastructure.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>Analisis Manfaat Finansial</h3>
                    <div className='space-y-6'>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Pendapatan (Revenue Generation)</h4>
                        <ul className='space-y-2'>
                          {innovation.financialBenefits.revenue.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Penghematan (Cost Saving)</h4>
                        <ul className='space-y-2'>
                          {innovation.financialBenefits.costSaving.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Perhitungan ROI dan Payback Period</h4>
                        <ul className='space-y-2'>
                          {innovation.financialBenefits.roi.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>Analisis Manfaat Non-Finansial</h3>
                    <div className='space-y-6'>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Peningkatan Efisiensi Operasional</h4>
                        <ul className='space-y-2'>
                          {innovation.nonFinancialBenefits.operationalEfficiency.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Peningkatan Kualitas</h4>
                        <ul className='space-y-2'>
                          {innovation.nonFinancialBenefits.qualityImprovement.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Peningkatan Keselamatan dan Keamanan</h4>
                        <ul className='space-y-2'>
                          {innovation.nonFinancialBenefits.safetyImprovement.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300 mb-2'>Dampak terhadap Citra Perusahaan</h4>
                        <ul className='space-y-2'>
                          {innovation.nonFinancialBenefits.companyImage.map((item, index) => (
                            <li
                              key={index}
                              className='text-gray-600 dark:text-gray-300 pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-gray-400'
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {renderSection('Proses Implementasi', innovation.implementation)}
                  {renderSection('Potensi Skalabilitas dan Replikasi', innovation.scalability)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InovasiDetailPage;
