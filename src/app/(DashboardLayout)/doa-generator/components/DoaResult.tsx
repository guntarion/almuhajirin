// src/app/(DashboardLayout)/doa-generator/components/DoaResult.tsx
import React from 'react';

interface PrayerContent {
  basmalah: string;
  opening: string;
  content: string;
  closing: string;
}

interface DoaResultProps {
  prayer: PrayerContent;
  intention: string;
  onReset: () => void;
}

/**
 * Component to display the generated prayer result
 * Shows the formatted prayer with options to create a new prayer or print
 */
const DoaResult: React.FC<DoaResultProps> = ({ prayer, intention, onReset }) => {
  return (
    <div className='prayer-result space-y-6'>
      <div className='text-center'>
        <h2 className='text-xl font-semibold text-green-800'>Doa untuk {intention}</h2>
      </div>

      <div className='bg-green-50 p-6 rounded-lg shadow-inner'>
        <div className='text-center mb-4'>
          <p className='text-2xl font-naskh text-green-900' dir='rtl'>
            {prayer.basmalah}
          </p>
        </div>

        <div className='space-y-4 text-gray-800'>
          <p>{prayer.opening}</p>
          <p>{prayer.content}</p>
          <p className='text-center font-semibold'>{prayer.closing}</p>
        </div>
      </div>

      <div className='flex justify-between'>
        <button
          onClick={onReset}
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        >
          Buat Doa Baru
        </button>

        <button
          onClick={() => window.print()}
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
        >
          Cetak Doa
        </button>
      </div>
    </div>
  );
};

export default DoaResult;
