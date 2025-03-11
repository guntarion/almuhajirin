// src/app/(DashboardLayout)/ide-inovasi/idea-clustering/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/CommonCardHeader';
import { contohIdeInovasiList } from '../../../../Data/IdeInovasi/contohIdeInovasi';
import TechnologyClusterView from './components/TechnologyClusterView';
import BusinessImpactView from './components/BusinessImpactView';
import ImplementationStatusView from './components/ImplementationStatusView';
import HierarchyView from './components/HierarchyView';
import AIAnalysisPanel from './components/AIAnalysisPanel';
import ClusterInsights from './components/ClusterInsights';
import { ProcessedInnovation } from './types';

/**
 * Innovation Portfolio Clustering & Visualization
 *
 * This page provides multiple views of the innovation portfolio using different
 * clustering criteria to help innovation managers identify patterns and make
 * strategic decisions based on the data.
 */
const IdeaClusteringPage = () => {
  // State management for active view and related data
  const [activeView, setActiveView] = useState('technology');
  const [innovations, setInnovations] = useState<ProcessedInnovation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewOptions, setViewOptions] = useState([
    { id: 'technology', label: 'Technology Domain', active: true },
    { id: 'impact', label: 'Business Impact', active: false },
    { id: 'implementation', label: 'Implementation Complexity', active: false },
    { id: 'hierarchy', label: 'Technology Hierarchy', active: false },
  ]);

  // Load and prepare data
  useEffect(() => {
    // In a real application, this might come from an API
    const processedInnovations = contohIdeInovasiList.map((innovation) => ({
      id: innovation.userId?.toString() || 'unknown',
      title: innovation.profilIde?.judulIde || 'Untitled Innovation',
      originator: innovation.profilIde?.namaPenggagas || 'Unknown',
      position: innovation.profilIde?.posisiJabatan || 'Unknown',
      problem: innovation.deskripsiPermasalahan || '',
      description: innovation.deskripsiIde || '',
      financialBenefits: innovation.manfaatFinansial || '',
      nonFinancialBenefits: innovation.manfaatNonFinansial || '',
      advantages: innovation.keunggulanIde || '',
      createdAt: innovation.createdAt || new Date(),

      // Derived properties for clustering - in a real app these might be explicit fields
      // or derived through more sophisticated analysis
      technologyDomain: deriveTechnologyDomain(innovation),
      businessImpact: deriveBusinessImpact(innovation),
      implementationComplexity: deriveImplementationComplexity(innovation),
      innovationType: deriveInnovationType(innovation),
      strategicAlignment: deriveStrategicAlignment(innovation),
    }));

    setInnovations(processedInnovations);
    setIsLoading(false);
  }, []);

  // Handle tab changes
  const handleViewChange = (viewId: string) => {
    setActiveView(viewId);
    setViewOptions(
      viewOptions.map((option) => ({
        ...option,
        active: option.id === viewId,
      }))
    );
  };

  // Render the appropriate view based on the active tab
  const renderActiveView = () => {
    if (isLoading)
      return (
        <div className='flex justify-center p-10'>
          <div className='animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent'></div>
        </div>
      );

    switch (activeView) {
      case 'technology':
        return <TechnologyClusterView innovations={innovations} />;
      case 'impact':
        return <BusinessImpactView innovations={innovations} />;
      case 'implementation':
        return <ImplementationStatusView innovations={innovations} />;
      case 'hierarchy':
        return <HierarchyView />;
      default:
        return <TechnologyClusterView innovations={innovations} />;
    }
  };

  return (
    <>
      <CommonBreadcrumb pageTitle='Innovation Clustering' parent='Innovation Portfolio' />
      <div className='container mx-auto px-4 pb-10'>
        <div className='grid grid-cols-1 gap-6'>
          {/* Main Visualization Section */}
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md overflow-hidden'>
              <CommonCardHeader
                heading='Innovation Portfolio Visualization'
                subHeading={[{ text: 'Explore your innovation landscape through different clustering perspectives' }]}
              />

              {/* View Selection Tabs */}
              <div className='flex border-b border-gray-200 dark:border-gray-700 px-6 overflow-x-auto'>
                {viewOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`py-3 px-4 text-sm font-medium border-b-2 ${
                      option.active
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                    onClick={() => handleViewChange(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Visualization Area */}
              <div className='p-4 md:p-6 bg-white dark:bg-gray-800 min-h-[400px]'>{renderActiveView()}</div>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div className='col-span-1 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* AI Insights Panel */}
            <div className='lg:col-span-2'>
              <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
                <div className='px-6 py-4 border-b border-gray-200 dark:border-gray-700'>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white flex items-center'>
                    <svg
                      className='w-5 h-5 mr-2 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                    AI-Generated Cluster Analysis
                  </h3>
                </div>
                <div className='p-6'>
                  <AIAnalysisPanel activeView={activeView} innovations={innovations} />
                </div>
              </div>
            </div>

            {/* Cluster Insights */}
            <div className='lg:col-span-1'>
              <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
                <div className='px-6 py-4 border-b border-gray-200 dark:border-gray-700'>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-white flex items-center'>
                    <svg
                      className='w-5 h-5 mr-2 text-blue-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    Key Insights
                  </h3>
                </div>
                <div className='p-6'>
                  <ClusterInsights activeView={activeView} innovations={innovations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * Derives the technology domain from innovation data
 * In a production system, this might use more sophisticated NLP or be an explicit field
 */
function deriveTechnologyDomain(innovation: any): string {
  const description = innovation.deskripsiIde || '';
  const title = innovation.profilIde?.judulIde || '';

  if (description.includes('Drone') || title.includes('Drone')) return 'Drone & AI';
  if (description.includes('IoT') || title.includes('IoT')) return 'IoT';
  if (description.includes('Dashboard') || title.includes('Dashboard')) return 'Dashboard & Analytics';
  if (description.includes('RFID') || title.includes('RFID')) return 'RFID & Tracking';
  if (description.includes('Mobile') || title.includes('Mobile')) return 'Mobile Applications';
  if (description.includes('Cloud') || title.includes('Cloud')) return 'Cloud Computing';
  if (description.includes('ERP') || title.includes('ERP')) return 'ERP Systems';
  if ((description.includes('AI') || title.includes('AI')) && !description.includes('Drone')) return 'AI & Machine Learning';
  if (description.includes('Knowledge Base') || title.includes('Knowledge Base')) return 'Knowledge Management';
  if (description.includes('Manajemen Proyek') || title.includes('Manajemen Proyek')) return 'Project Management';

  return 'Other Technologies';
}

/**
 * Derives the business impact level based on the financial benefits described
 */
function deriveBusinessImpact(innovation: any): string {
  const financialBenefits = innovation.manfaatFinansial || '';

  // Check for percentage mentions to estimate impact
  if (financialBenefits.includes('50%') || financialBenefits.includes('40%') || financialBenefits.includes('30%')) {
    return 'High Impact';
  } else if (financialBenefits.includes('20%') || financialBenefits.includes('15%')) {
    return 'Medium Impact';
  } else {
    return 'Incremental Impact';
  }
}

/**
 * Estimates implementation complexity based on the technology and description
 * This is a simplified version - in reality, this would likely be an explicit field
 */
function deriveImplementationComplexity(innovation: any): string {
  const domain = deriveTechnologyDomain(innovation);

  // Assign complexity based on technology domain
  const highComplexityDomains = ['Drone & AI', 'IoT', 'ERP Systems', 'AI & Machine Learning'];
  const mediumComplexityDomains = ['Dashboard & Analytics', 'RFID & Tracking', 'Knowledge Management'];

  if (highComplexityDomains.includes(domain)) {
    return 'High Complexity';
  } else if (mediumComplexityDomains.includes(domain)) {
    return 'Medium Complexity';
  } else {
    return 'Low Complexity';
  }
}

/**
 * Determines the type of innovation
 */
function deriveInnovationType(innovation: any): string {
  const description = innovation.deskripsiIde || '';

  if (description.includes('sistem') || description.includes('platform')) {
    return 'System Innovation';
  } else if (description.includes('proses') || description.includes('workflow')) {
    return 'Process Innovation';
  } else if (description.includes('produk') || description.includes('alat')) {
    return 'Product Innovation';
  } else {
    return 'Service Innovation';
  }
}

/**
 * Evaluates strategic alignment (in a real app, this would be based on company priorities)
 */
function deriveStrategicAlignment(innovation: any): string {
  const nonFinancialBenefits = innovation.manfaatNonFinansial || '';

  if (nonFinancialBenefits.includes('efisiensi') || nonFinancialBenefits.includes('produktivitas')) {
    return 'Operational Excellence';
  } else if (nonFinancialBenefits.includes('pelanggan') || nonFinancialBenefits.includes('klien')) {
    return 'Customer Experience';
  } else if (nonFinancialBenefits.includes('keselamatan') || nonFinancialBenefits.includes('risiko')) {
    return 'Safety & Risk Management';
  } else if (nonFinancialBenefits.includes('lingkungan')) {
    return 'Sustainability';
  } else {
    return 'General Improvement';
  }
}

export default IdeaClusteringPage;
