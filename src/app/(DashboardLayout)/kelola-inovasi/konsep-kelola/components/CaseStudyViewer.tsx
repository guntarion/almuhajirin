// src/app/(DashboardLayout)/kelola-inovasi/konsep-kelola/components/CaseStudyViewer.tsx
import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '@/Components/ViewContent/MarkdownRenderer';

// Define the case study options
const caseStudies = [
  { id: '2-Identifikasi-Pain-Points', title: 'Identifikasi Pain Points' },
  { id: '3-Identifikasi-Stakeholder', title: 'Identifikasi Stakeholder' },
  { id: '4-Solusi-Diajukan', title: 'Solusi yang Diajukan' },
  { id: '5-Fitur-Utama-Fungsionalitas', title: 'Fitur Utama & Fungsionalitas' },
  { id: '6-Aspek-Kebaruan-Novelty', title: 'Aspek Kebaruan (Novelty)' },
];

/**
 * CaseStudyViewer Component
 *
 * A tabbed interface for viewing different markdown case studies
 * Improved with better error handling and feedback
 */
const CaseStudyViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        console.log(`Fetching content for tab: ${activeTab}`);
        // Make the request
        const response = await fetch(`/api/markdown?id=${activeTab}`);

        // Check for network errors
        if (!response.ok) {
          // Try to get more details from the response
          let errorDetails = '';
          try {
            const errorData = await response.json();
            errorDetails = errorData.error || errorData.details || '';
            console.error('API error details:', errorData);
          } catch (e) {
            // If we can't parse the JSON, just use the status text
            errorDetails = response.statusText;
          }

          throw new Error(`Failed to fetch content: ${response.status} ${errorDetails}`);
        }

        // Parse the JSON
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Unknown error');
        }

        console.log(`Successfully fetched content with length: ${data.content.length} characters`);
        setMarkdownContent(data.content);
      } catch (error) {
        console.error('Error in fetch operation:', error);
        setErrorMessage(error instanceof Error ? error.message : String(error));
        setMarkdownContent('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [activeTab]);

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
      {/* Tabs */}
      <div className='border-b border-gray-200 dark:border-gray-700'>
        <nav className='flex overflow-x-auto'>
          {caseStudies.map((study) => (
            <button
              key={study.id}
              className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${
                activeTab === study.id
                  ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(study.id)}
            >
              {study.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className='p-6'>
        {isLoading ? (
          <div className='flex justify-center items-center h-64'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500'></div>
          </div>
        ) : errorMessage ? (
          <div className='p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md'>
            <h3 className='text-lg font-semibold text-red-700 dark:text-red-400 mb-2'>Error Loading Content</h3>
            <p className='text-red-600 dark:text-red-300'>{errorMessage}</p>
            <div className='mt-4'>
              <p className='text-gray-600 dark:text-gray-400'>Please check:</p>
              <ul className='list-disc pl-5 text-gray-600 dark:text-gray-400 mt-2'>
                <li>That the case study file exists in the correct location</li>
                <li>The file name matches the expected format: {activeTab}.md</li>
                <li>Server logs for more detailed error information</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='case-study-content'>
            <MarkdownRenderer content={markdownContent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyViewer;
