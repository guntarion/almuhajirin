// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/BenefitsSection.tsx
/**
 * Component for displaying financial and non-financial benefits of an innovation
 * Visualizes ROI and other benefits in a structured format
 */

'use client';

import React from 'react';
import { FaMoneyBillWave, FaChartLine, FaCogs, FaCheckCircle, FaShieldAlt, FaBuilding } from 'react-icons/fa';

interface BenefitsSectionProps {
  financialBenefits: {
    revenue: string[];
    costSaving: string[];
    roi: string[];
  };
  nonFinancialBenefits: {
    operationalEfficiency: string[];
    qualityImprovement: string[];
    safetyImprovement: string[];
    companyImage: string[];
  };
  investmentCost: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ financialBenefits, nonFinancialBenefits, investmentCost }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Manfaat Inovasi</h3>

      {/* Financial Benefits */}
      <div className='mb-8'>
        <h4 className='text-lg font-medium flex items-center text-gray-900 dark:text-white'>
          <FaMoneyBillWave className='mr-2 text-green-500' />
          Manfaat Finansial
        </h4>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* Investment */}
          <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2'>Investasi</h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {investmentCost.map((item, index) => (
                <li key={`investment-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue */}
          <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2'>Pendapatan</h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {financialBenefits.revenue.map((item, index) => (
                <li key={`revenue-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cost Saving */}
          <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2'>Penghematan Biaya</h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {financialBenefits.costSaving.map((item, index) => (
                <li key={`cost-saving-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROI Section */}
        <div className='mt-4 p-4 border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/30 rounded-lg'>
          <h5 className='font-medium text-gray-800 dark:text-white mb-2 flex items-center'>
            <FaChartLine className='mr-2 text-green-500' />
            Return on Investment (ROI)
          </h5>
          <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
            {financialBenefits.roi.map((item, index) => (
              <li key={`roi-${index}`} className='mb-1'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Non-Financial Benefits */}
      <div>
        <h4 className='text-lg font-medium text-gray-900 dark:text-white mb-4'>Manfaat Non-Finansial</h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Operational Efficiency */}
          <div className='border border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2 flex items-center'>
              <FaCogs className='mr-2 text-blue-500' />
              Efisiensi Operasional
            </h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {nonFinancialBenefits.operationalEfficiency.map((item, index) => (
                <li key={`efficiency-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quality Improvement */}
          <div className='border border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2 flex items-center'>
              <FaCheckCircle className='mr-2 text-indigo-500' />
              Peningkatan Kualitas
            </h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {nonFinancialBenefits.qualityImprovement.map((item, index) => (
                <li key={`quality-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Improvement */}
          <div className='border border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2 flex items-center'>
              <FaShieldAlt className='mr-2 text-red-500' />
              Peningkatan Keselamatan
            </h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {nonFinancialBenefits.safetyImprovement.map((item, index) => (
                <li key={`safety-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Image */}
          <div className='border border-gray-200 dark:border-gray-700 p-4 rounded-lg'>
            <h5 className='font-medium text-gray-800 dark:text-white mb-2 flex items-center'>
              <FaBuilding className='mr-2 text-purple-500' />
              Citra Perusahaan
            </h5>
            <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300'>
              {nonFinancialBenefits.companyImage.map((item, index) => (
                <li key={`image-${index}`} className='mb-1'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
