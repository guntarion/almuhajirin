// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/SolutionSection.tsx
/**
 * Component for displaying solution details of an innovation
 * Shows pain points, solution approaches, and implementation details
 */

'use client';

import React, { useState } from 'react';
import { FaPuzzlePiece, FaLightbulb, FaUsers, FaTrophy, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

interface SolutionSectionProps {
  painPoints: string[];
  stakeholders: string[];
  solution: string[];
  features: string[];
  novelty: string[];
  comparativeAnalysis: string[];
  implementation: string[];
  scalability: string[];
  applicableUnitTypes: string[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
  painPoints,
  stakeholders,
  solution,
  features,
  novelty,
  comparativeAnalysis,
  implementation,
  scalability,
  applicableUnitTypes,
}) => {
  const [activeTab, setActiveTab] = useState('pain-points');

  // Tab configuration
  const tabs = [
    { id: 'pain-points', label: 'Tantangan', icon: <FaPuzzlePiece /> },
    { id: 'solution', label: 'Solusi', icon: <FaLightbulb /> },
    { id: 'novelty', label: 'Kebaruan', icon: <FaTrophy /> },
    { id: 'comparison', label: 'Analisis Komparatif', icon: <FaChartLine /> },
    { id: 'implementation', label: 'Implementasi', icon: <FaClipboardCheck /> },
  ];

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Detail Solusi Inovasi</h3>

      {/* Tabs */}
      <div className='flex overflow-x-auto mb-6 border-b border-gray-200 dark:border-gray-700'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className='mr-2'>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      <div className='mb-8'>
        {activeTab === 'pain-points' && (
          <div>
            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Tantangan yang Dihadapi</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
              {painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mt-6 mb-3'>Pemangku Kepentingan</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              {stakeholders.map((stakeholder, index) => (
                <div key={index} className='flex items-center'>
                  <FaUsers className='text-blue-500 mr-2' />
                  <span className='text-gray-600 dark:text-gray-300'>{stakeholder}</span>
                </div>
              ))}
            </div>

            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mt-6 mb-3'>Unit yang Cocok Mengadopsi</h4>
            <div className='bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg'>
              <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
                {applicableUnitTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div>
            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Solusi yang Ditawarkan</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6'>
              {solution.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Fitur Utama</h4>
            <div className='grid grid-cols-1 gap-3'>
              {features.map((feature, index) => (
                <div key={index} className='border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <div className='flex items-start'>
                    <div className='w-8 h-8 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
                      {index + 1}
                    </div>
                    <p className='text-gray-600 dark:text-gray-300'>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'novelty' && (
          <div>
            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Aspek Kebaruan dan Inovasi</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
              {novelty.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div>
            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Analisis Komparatif</h4>
            <div className='overflow-x-auto'>
              <table className='min-w-full border border-gray-200 dark:border-gray-700 rounded-lg'>
                <thead>
                  <tr className='bg-gray-50 dark:bg-gray-700'>
                    <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Aspek</th>
                    <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                      Perbandingan
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
                  {comparativeAnalysis.map((analysis, index) => {
                    // Try to split the analysis into aspect and comparison parts
                    const parts = analysis.split(':');

                    if (parts.length > 1) {
                      return (
                        <tr key={index}>
                          <td className='px-4 py-3 text-sm text-gray-900 dark:text-white font-medium'>{parts[0].trim()}</td>
                          <td className='px-4 py-3 text-sm text-gray-600 dark:text-gray-300'>{parts[1].trim()}</td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={index}>
                          <td colSpan={2} className='px-4 py-3 text-sm text-gray-600 dark:text-gray-300'>
                            {analysis}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div>
            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Implementasi</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6'>
              {implementation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className='font-semibold text-lg text-gray-900 dark:text-white mb-3'>Skalabilitas dan Potensi Pengembangan</h4>
            <ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
              {scalability.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionSection;
