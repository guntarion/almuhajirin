// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/AdoptionStatusDashboard.tsx
/**
 * Component for displaying adoption status metrics for innovation managers
 * Shows counts of implementations, inquiries, and adoption trends
 */

'use client';

import React from 'react';
import { FaBuilding, FaBell, FaCheckCircle, FaClock, FaClipboardList, FaEnvelope } from 'react-icons/fa';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface AdoptionStatusDashboardProps {
  stats: {
    totalInnovations: number;
    totalAdoptions: number;
    pendingInquiries: number;
    implementationByCategory: Record<string, number>;
    topUnits: { unitName: string; adoptions: number }[];
  };
}

const AdoptionStatusDashboard: React.FC<AdoptionStatusDashboardProps> = ({ stats }) => {
  // Bar chart data for top adopting units
  const barChartData = {
    labels: stats.topUnits.map((unit) => unit.unitName),
    datasets: [
      {
        label: 'Jumlah Adopsi',
        data: stats.topUnits.map((unit) => unit.adoptions),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for implementation by category
  const pieChartData = {
    labels: Object.keys(stats.implementationByCategory),
    datasets: [
      {
        data: Object.values(stats.implementationByCategory),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Dashboard Status Adopsi Inovasi</h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        {/* Total Innovations */}
        <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4'>
          <div className='flex items-center'>
            <div className='p-3 bg-blue-500 rounded-full mr-4'>
              <FaClipboardList className='text-white text-xl' />
            </div>
            <div>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Total Inovasi</p>
              <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{stats.totalInnovations}</h4>
            </div>
          </div>
        </div>

        {/* Total Adoptions */}
        <div className='bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg p-4'>
          <div className='flex items-center'>
            <div className='p-3 bg-green-500 rounded-full mr-4'>
              <FaCheckCircle className='text-white text-xl' />
            </div>
            <div>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Total Adopsi</p>
              <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{stats.totalAdoptions}</h4>
            </div>
          </div>
        </div>

        {/* Pending Inquiries */}
        <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900 rounded-lg p-4'>
          <div className='flex items-center'>
            <div className='p-3 bg-yellow-500 rounded-full mr-4'>
              <FaBell className='text-white text-xl' />
            </div>
            <div>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Permintaan Tertunda</p>
              <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{stats.pendingInquiries}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
        {/* Top Adopting Units */}
        <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
          <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Unit Dengan Adopsi Terbanyak</h4>
          <div className='h-64'>
            <Bar
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      precision: 0,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Implementation by Category */}
        <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
          <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Implementasi Berdasarkan Kategori</h4>
          <div className='h-64 flex items-center justify-center'>
            <Pie
              data={pieChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      boxWidth: 15,
                      font: {
                        size: 12,
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
        <h4 className='font-medium text-gray-900 dark:text-white mb-4'>Aksi Cepat</h4>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors'>
            <FaEnvelope className='mr-2' /> Kirim Notifikasi Adopsi
          </button>
          <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors'>
            <FaBuilding className='mr-2' /> Lihat Status Unit
          </button>
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded flex items-center justify-center transition-colors'>
            <FaClock className='mr-2' /> Jadwalkan Sosialisasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptionStatusDashboard;
