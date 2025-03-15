// src/app/(DashboardLayout)/doa-generator/page.tsx
'use client';

import React from 'react';
import DoaForm from './components/DoaForm';
import DoaResult from './components/DoaResult';
import { useGenerateDoa } from './hooks/useGenerateDoa';
import Link from 'next/link';

/**
 * Doa Generator Page
 *
 * A custom Islamic prayer generator that creates personalized prayers based on
 * user input, including intentions, situations, and preferences.
 */
const DoaGeneratorPage = () => {
  const {
    intention,
    setIntention,
    recipient,
    setRecipient,
    customRecipient,
    setCustomRecipient,
    situation,
    setSituation,
    language,
    setLanguage,
    length,
    setLength,
    generatedPrayer,
    isLoading,
    generatePrayer,
    resetForm,
  } = useGenerateDoa();

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='absolute top-4 left-4 z-10'>
        <Link href='/' className='flex items-center space-x-2 text-green-700 hover:text-green-900 transition-colors'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-green-800'>Generator Doa Kustom Islami</h1>
            <p className='mt-2 text-gray-600'>Buat doa personal sesuai dengan intensi dan kebutuhan Anda</p>
          </div>

          {!generatedPrayer ? (
            <DoaForm
              intention={intention}
              setIntention={setIntention}
              recipient={recipient}
              setRecipient={setRecipient}
              customRecipient={customRecipient}
              setCustomRecipient={setCustomRecipient}
              situation={situation}
              setSituation={setSituation}
              language={language}
              setLanguage={setLanguage}
              length={length}
              setLength={setLength}
              isLoading={isLoading}
              onSubmit={generatePrayer}
            />
          ) : (
            <DoaResult prayer={generatedPrayer} intention={intention} onReset={resetForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DoaGeneratorPage;
