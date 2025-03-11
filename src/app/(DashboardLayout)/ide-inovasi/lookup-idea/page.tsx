// src/app/(MainBody)/ideasi/lookup-idea/page.tsx
'use client';

import { useState } from 'react';
import { Search, List } from 'lucide-react';
import DaftarIdeInovasi from './components/DaftarIdeAwal';
import CariIdeInovasi from './components/CariIdeInovasi';

const LookupIdeInovasiPage = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className='container mx-auto px-4 py-6'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <div className='p-6 border-b border-gray-200 dark:border-gray-700'>
                <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>Lookup Ide Inovasi</h1>
                <p className='mt-1 text-gray-600 dark:text-gray-400'>
                  Cari dan telusuri ide-ide inovasi dengan kecerdasan buatan atau lihat daftar ide yang tersedia
                </p>
              </div>
              <div className='p-6'>
                {/* Tabs */}
                <div className='border-b border-gray-200 dark:border-gray-700'>
                  <nav className='flex space-x-8' aria-label='Tabs'>
                    <button
                      onClick={() => toggle('1')}
                      className={`${
                        activeTab === '1'
                          ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                    >
                      <Search size={16} />
                      Search Ideas
                    </button>
                    <button
                      onClick={() => toggle('2')}
                      className={`${
                        activeTab === '2'
                          ? 'border-blue-500 text-blue-600 dark:text-blue-500'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      } flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                    >
                      <List size={16} />
                      Listing Ideas
                    </button>
                  </nav>
                </div>

                {/* Tab Panels */}
                <div className='mt-4'>
                  {activeTab === '1' && <CariIdeInovasi />}
                  {activeTab === '2' && <DaftarIdeInovasi />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookupIdeInovasiPage;
