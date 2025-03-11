// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/[inovasiId]/page.tsx
/**
 * Page component for the innovation detail page
 * Shows comprehensive information about a specific innovation
 */

'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getInnovationById } from '../data/innovations';
import { Inovasi } from '../data/types';
import InnovationHeader from '../components/InnovationHeader';
import SolutionSection from '../components/SolutionSection';
import BenefitsSection from '../components/BenefitsSection';
import ReadinessMetrics from '../components/ReadinessMetrics';
import InnovatorProfile from '../components/InnovatorProfile';
import AdoptionSection from '../components/AdoptionSection';
import DiscussionSection from '../components/DiscussionSection';
import InterestForm from '../components/InterestForm';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

const InnovationDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [innovation, setInnovation] = useState<Inovasi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.inovasiId) {
      // Fetch innovation data
      const innovationData = getInnovationById(params.inovasiId as string);

      if (innovationData) {
        setInnovation(innovationData);
      } else {
        setError('Inovasi tidak ditemukan');
      }

      setLoading(false);
    }
  }, [params.inovasiId]);

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-12 flex justify-center'>
        <div className='animate-pulse flex flex-col items-center'>
          <div className='w-12 h-12 bg-blue-200 dark:bg-blue-700 rounded-full mb-3'></div>
          <div className='h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2.5'></div>
          <div className='h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded'></div>
        </div>
      </div>
    );
  }

  if (error || !innovation) {
    return (
      <div className='container mx-auto px-4 py-12'>
        <div className='bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg p-6 text-center'>
          <FaExclamationTriangle className='mx-auto text-red-500 text-4xl mb-4' />
          <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>{error || 'Terjadi kesalahan'}</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>Inovasi yang Anda cari tidak ditemukan atau tidak dapat diakses.</p>
          <button
            onClick={() => router.push('/kelola-inovasi/diseminasi')}
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'
          >
            Kembali ke Daftar Inovasi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='mb-6'>
        <button
          onClick={() => router.push('/kelola-inovasi/diseminasi')}
          className='flex items-center text-blue-600 dark:text-blue-400 hover:underline'
        >
          <FaArrowLeft className='mr-2' /> Kembali ke Daftar Inovasi
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2 space-y-6'>
          {/* Innovation Header */}
          <InnovationHeader
            title={innovation.title}
            category={innovation.category}
            executiveSummary={innovation.executiveSummary}
            overallRating={innovation.overallRating}
            createdAt={innovation.createdAt}
            updatedAt={innovation.updatedAt}
            tags={innovation.tags}
            featuredImage={innovation.featuredImage}
            awards={innovation.awards}
            adoptingUnits={innovation.adoptingUnits}
            highlightPoints={innovation.highlightPoints}
          />

          {/* Solution Section */}
          <SolutionSection
            painPoints={innovation.painPoints}
            stakeholders={innovation.stakeholders}
            solution={innovation.solution}
            features={innovation.features}
            novelty={innovation.novelty}
            comparativeAnalysis={innovation.comparativeAnalysis}
            implementation={innovation.implementation}
            scalability={innovation.scalability}
            applicableUnitTypes={innovation.applicableUnitTypes}
          />

          {/* Benefits Section */}
          <BenefitsSection
            financialBenefits={innovation.financialBenefits}
            nonFinancialBenefits={innovation.nonFinancialBenefits}
            investmentCost={innovation.investment.developmentCost}
          />

          {/* Discussion Section */}
          <DiscussionSection comments={innovation.comments} innovationId={innovation.id} />
        </div>

        <div className='space-y-6'>
          {/* Readiness Metrics */}
          <ReadinessMetrics metrics={innovation.readinessMetrics} />

          {/* Innovator Profile */}
          <InnovatorProfile innovators={innovation.innovators} />

          {/* Adoption Section */}
          <AdoptionSection adoptingUnits={innovation.adoptingUnits} />

          {/* Manager Remarks */}
          {innovation.managerRemarks && (
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg p-4'>
              <h3 className='font-medium text-gray-900 dark:text-white mb-2'>Catatan Manajer Inovasi</h3>
              <p className='text-sm text-gray-600 dark:text-gray-300 italic'>"{innovation.managerRemarks}"</p>
            </div>
          )}
        </div>
      </div>

      {/* Interest Form (Floating) */}
      <InterestForm innovationId={innovation.id} innovationTitle={innovation.title} />
    </div>
  );
};

export default InnovationDetailPage;
