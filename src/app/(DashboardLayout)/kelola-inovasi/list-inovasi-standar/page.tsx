// src/app/(DashboardLayout)/kelola-inovasi/list-inovasi-standar/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import CommonBreadcrumb from '@/app/components/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/CommonCardHeader';
import { innovations } from './data';

const ListInovasiStandardPage = () => {
  const router = useRouter();

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low':
        return 'success';
      case 'Moderate':
        return 'warning';
      case 'High':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getResourcesColor = (resources: string) => {
    switch (resources) {
      case 'Low':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getTimelineColor = (timeline: string) => {
    switch (timeline) {
      case 'Short':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'Long':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <>
      <CommonBreadcrumb pageTitle='Daftar Inovasi Terstandarisasi' parent='Kelola Inovasi' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader heading='Daftar Inovasi Format Standar' />
              <div className='p-6'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                    <thead className='bg-gray-50 dark:bg-gray-700'>
                      <tr>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Judul Inovasi
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Kategori
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Kompleksitas
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Sumber Daya
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Timeline
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800'>
                      {innovations.map((innovation) => (
                        <tr key={innovation.id} className='border-b border-gray-200 dark:border-gray-700'>
                          <td className='px-6 py-4'>
                            <div className='text-sm font-medium text-gray-900 dark:text-white'>{innovation.title}</div>
                            <div className='text-sm text-gray-500 dark:text-gray-300'>{innovation.executiveSummary[0]}</div>
                          </td>
                          <td className='px-6 py-4'>
                            <span className='px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'>
                              {innovation.category}
                            </span>
                          </td>
                          <td className='px-6 py-4'>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                innovation.complexity === 'Low'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                  : innovation.complexity === 'Moderate'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                              }`}
                            >
                              {innovation.complexity}
                            </span>
                          </td>
                          <td className='px-6 py-4'>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                innovation.resources === 'Low'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                  : innovation.resources === 'Medium'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                              }`}
                            >
                              {innovation.resources}
                            </span>
                          </td>
                          <td className='px-6 py-4'>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                innovation.timeline === 'Short'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                  : innovation.timeline === 'Medium'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                              }`}
                            >
                              {innovation.timeline}
                            </span>
                          </td>
                          <td className='px-6 py-4'>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/kelola-inovasi/list-inovasi-standar/${innovation.id}`);
                              }}
                              className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 
                                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                                       dark:hover:bg-blue-800'
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListInovasiStandardPage;
