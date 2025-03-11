// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/page.tsx
/**
 * Page component for the innovation dissemination listing page
 * Shows all available innovations and management dashboard
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { innovations, getAdoptionStatistics } from './data/innovations';
import InnovationCard from './components/InnovationCard';
import AdoptionStatusDashboard from './components/AdoptionStatusDashboard';
import { FaSearch, FaFilter, FaChartLine, FaBook, FaLightbulb, FaExchangeAlt } from 'react-icons/fa';

const DiseminasiInovasiPage = () => {
  const stats = getAdoptionStatistics();

  return (
    <div className='container mx-auto px-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Diseminasi Inovasi</h1>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          Platform untuk berbagi dan mengadopsi inovasi dari seluruh unit PLN Nusantara Power Services
        </p>

        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='relative w-full md:w-auto flex-1 md:max-w-md'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FaSearch className='text-gray-400' />
            </div>
            <input
              type='text'
              className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
              placeholder='Cari inovasi...'
            />
          </div>

          <div className='flex space-x-2'>
            <button className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-3 rounded-md flex items-center text-sm transition-colors'>
              <FaFilter className='mr-2' /> Filter
            </button>
            <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md flex items-center text-sm transition-colors'>
              <FaChartLine className='mr-2' /> Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-md p-6 mb-6'>
        <h2 className='text-xl font-bold mb-3'>Strategi Diseminasi Inovasi</h2>
        <p className='mb-4'>
          Diseminasi inovasi adalah proses penyebaran praktik terbaik dan solusi inovatif antar unit untuk meningkatkan kinerja operasional dan
          efisiensi perusahaan secara menyeluruh.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
            <div className='text-white text-2xl mb-2'>
              <FaLightbulb />
            </div>
            <h3 className='font-medium mb-2'>Identifikasi</h3>
            <p className='text-sm opacity-90'>
              Mengidentifikasi inovasi bernilai tinggi yang berpotensi memberi dampak signifikan jika diterapkan di unit lain.
            </p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
            <div className='text-white text-2xl mb-2'>
              <FaBook />
            </div>
            <h3 className='font-medium mb-2'>Dokumentasi</h3>
            <p className='text-sm opacity-90'>
              Mendokumentasikan proses, manfaat, dan tahapan implementasi secara terstruktur untuk memudahkan adopsi.
            </p>
          </div>

          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
            <div className='text-white text-2xl mb-2'>
              <FaExchangeAlt />
            </div>
            <h3 className='font-medium mb-2'>Transfer</h3>
            <p className='text-sm opacity-90'>
              Memberikan dukungan teknis dan pendampingan kepada unit yang mengadopsi untuk memastikan keberhasilan implementasi.
            </p>
          </div>
        </div>
      </div>

      {/* Admin Dashboard */}
      <AdoptionStatusDashboard stats={stats} />

      {/* Innovations List */}
      <div className='my-8'>
        <h2 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>Daftar Inovasi Tersedia</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {innovations.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>
      </div>

      <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-6 mb-6'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Punya Inovasi yang Ingin Dibagikan?</h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>
          Jika Anda memiliki inovasi yang telah berhasil diimplementasikan di unit Anda dan berpotensi memberi manfaat bagi unit lain, daftarkan
          inovasi Anda untuk diseminasi.
        </p>
        <Link
          href='/kelola-inovasi/pendaftaran'
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'
        >
          Daftarkan Inovasi Baru
        </Link>
      </div>
    </div>
  );
};

export default DiseminasiInovasiPage;
