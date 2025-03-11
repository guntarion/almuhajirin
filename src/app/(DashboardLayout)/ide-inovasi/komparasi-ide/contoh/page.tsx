// src/app/(DashboardLayout)/ide-inovasi/komparasi-ide/contoh/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import MarkdownRenderer from '@/Components/ViewContent/MarkdownRenderer';

/**
 * ContohKomparasiPage Component
 *
 * This page displays a detailed example of innovation comparison using the framework.
 * It loads and renders markdown content from a file.
 */
const ContohKomparasiPage = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Function to fetch the markdown content
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch('/api/markdown/contoh-komparasi');
        if (!response.ok) {
          throw new Error('Failed to fetch markdown content');
        }
        const data = await response.json();
        setMarkdownContent(data.content);
      } catch (error) {
        console.error('Error fetching markdown:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <>
      <CommonBreadcrumb pageTitle='Contoh Komparasi' parent='Ide Inovasi / Komparasi Ide' />

      <div className='container mx-auto px-4'>
        {/* Header section */}
        <div className='mb-8 flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>Contoh Komparasi Karya Inovasi</h1>
          <button onClick={() => router.back()} className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
            Kembali
          </button>
        </div>

        {/* Content section */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8'>
          {isLoading ? (
            <div className='flex justify-center items-center h-64'>
              <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
            </div>
          ) : (
            <MarkdownRenderer content={markdownContent} />
          )}
        </div>
      </div>
    </>
  );
};

export default ContohKomparasiPage;
