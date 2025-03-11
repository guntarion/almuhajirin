// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/ReadinessMetrics.tsx
/**
 * Component for displaying adoption readiness metrics in a radar chart
 * Visualizes the complexity, implementation time, resource requirements, ROI, and scalability
 */

'use client';

import React from 'react';
import { ReadinessMetrics as ReadinessMetricsType } from '../data/types';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface ReadinessMetricsProps {
  metrics: ReadinessMetricsType;
}

const ReadinessMetrics: React.FC<ReadinessMetricsProps> = ({ metrics }) => {
  const chartData = {
    labels: ['Kompleksitas Teknis', 'Waktu Implementasi', 'Kebutuhan Sumber Daya', 'ROI', 'Skalabilitas'],
    datasets: [
      {
        label: 'Metrik Kesiapan Adopsi',
        data: [
          6 - metrics.technicalComplexity, // Invert scale for complexity (lower is better)
          6 - metrics.implementationTime, // Invert scale for implementation time (lower is better)
          6 - metrics.resourceRequirement, // Invert scale for resource requirement (lower is better)
          metrics.roi, // Higher ROI is better
          metrics.scalability, // Higher scalability is better
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          showLabelBackdrop: false,
          font: {
            size: 10,
          },
        },
        pointLabels: {
          font: {
            size: 12,
          },
        },
        grid: {
          circular: true,
        },
        angleLines: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const index = context.dataIndex;
            const value = context.raw;
            const labels = ['Kompleksitas Teknis', 'Waktu Implementasi', 'Kebutuhan Sumber Daya', 'ROI', 'Skalabilitas'];

            // For inverted metrics, show the original value
            if (index <= 2) {
              // First three metrics are inverted
              return `${labels[index]}: ${6 - value}/5 ${index <= 2 ? '(lebih rendah lebih baik)' : ''}`;
            } else {
              return `${labels[index]}: ${value}/5 (lebih tinggi lebih baik)`;
            }
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4'>
      <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>Metrik Kesiapan Adopsi</h3>

      <div className='h-80 w-full'>
        <Radar data={chartData} options={chartOptions} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
          <h4 className='font-medium text-gray-900 dark:text-white'>Interpretasi Nilai</h4>
          <p className='text-sm text-gray-600 dark:text-gray-300 mt-2'>
            Semakin tinggi nilai untuk ROI dan Skalabilitas semakin baik. Semakin rendah nilai untuk Kompleksitas Teknis, Waktu Implementasi, dan
            Kebutuhan Sumber Daya semakin mudah implementasinya.
          </p>
        </div>

        <div className='border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
          <h4 className='font-medium text-gray-900 dark:text-white'>Kesimpulan</h4>
          <p className='text-sm text-gray-600 dark:text-gray-300 mt-2'>
            Inovasi ini memiliki {metrics.technicalComplexity <= 3 ? 'kompleksitas teknis yang rendah' : 'kompleksitas teknis yang tinggi'},
            {metrics.implementationTime <= 3 ? ' waktu implementasi yang singkat' : ' waktu implementasi yang panjang'},
            {metrics.resourceRequirement <= 3 ? ' kebutuhan sumber daya yang minimal' : ' kebutuhan sumber daya yang signifikan'},
            {metrics.roi >= 3 ? ' ROI yang tinggi' : ' ROI yang sedang'}, dan
            {metrics.scalability >= 3 ? ' skalabilitas yang baik' : ' skalabilitas yang terbatas'}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadinessMetrics;
