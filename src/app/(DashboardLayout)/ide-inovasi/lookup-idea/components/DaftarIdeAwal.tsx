// src/app/(DashboardLayout)/ide-inovasi/lookup-idea/components/DaftarIdeAwal.tsx
'use client';

import { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { IIdeInovasi } from '../../../../../models/IdeInovasi';
import { contohIdeInovasiList } from '../../../../../Data/IdeInovasi/contohIdeInovasi';

// Interface for sorting configuration
interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

// Component for displaying innovation ideas in a sortable table
const DaftarIdeInovasi = () => {
  // State for sorting configuration
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'createdAt',
    direction: 'desc',
  });

  // State for modal
  const [modal, setModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Partial<IIdeInovasi> | null>(null);

  // Toggle modal function
  const toggle = () => {
    setModal(!modal);
    if (modal) {
      setSelectedIdea(null); // Clear selected idea when closing modal
    }
  };

  // Function to view idea details
  const viewIdeaDetails = (idea: Partial<IIdeInovasi>) => {
    setSelectedIdea(idea);
    setModal(true);
  };

  // Function to handle sorting
  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  // Sort the ideas based on current configuration
  const sortedIdeas = [...contohIdeInovasiList].sort((a, b) => {
    if (!a || !b) return 0;

    let aValue: any;
    let bValue: any;

    // Handle nested properties for sorting
    if (sortConfig.key.includes('.')) {
      const [parent, child] = sortConfig.key.split('.');
      aValue = a[parent as keyof typeof a]?.[child as any];
      bValue = b[parent as keyof typeof b]?.[child as any];
    } else {
      aValue = a[sortConfig.key as keyof typeof a];
      bValue = b[sortConfig.key as keyof typeof b];
    }

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Function to render sort indicator
  const renderSortIndicator = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
          <thead className='bg-gray-50 dark:bg-gray-700'>
            <tr>
              <th
                onClick={() => handleSort('profilIde.judulIde')}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer'
              >
                <div className='flex items-center gap-1'>
                  <span>Judul Ide</span>
                  <span className='text-gray-400'>{renderSortIndicator('profilIde.judulIde')}</span>
                </div>
              </th>
              <th
                onClick={() => handleSort('profilIde.namaPenggagas')}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer'
              >
                <div className='flex items-center gap-1'>
                  <span>Penggagas</span>
                  <span className='text-gray-400'>{renderSortIndicator('profilIde.namaPenggagas')}</span>
                </div>
              </th>
              <th
                onClick={() => handleSort('profilIde.posisiJabatan')}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer'
              >
                <div className='flex items-center gap-1'>
                  <span>Posisi</span>
                  <span className='text-gray-400'>{renderSortIndicator('profilIde.posisiJabatan')}</span>
                </div>
              </th>
              <th
                onClick={() => handleSort('createdAt')}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer'
              >
                <div className='flex items-center gap-1'>
                  <span>Tanggal Dibuat</span>
                  <span className='text-gray-400'>{renderSortIndicator('createdAt')}</span>
                </div>
              </th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800'>
            {sortedIdeas.map((ide, index) => (
              <tr key={index} className='hover:bg-gray-50 dark:hover:bg-gray-700'>
                <td className='px-6 py-4'>
                  <div className='text-sm text-gray-900 dark:text-gray-100'>{ide.profilIde?.judulIde}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-gray-900 dark:text-gray-100'>{ide.profilIde?.namaPenggagas}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-gray-900 dark:text-gray-100'>{ide.profilIde?.posisiJabatan}</div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-gray-900 dark:text-gray-100'>{ide.createdAt?.toLocaleDateString()}</div>
                </td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() => viewIdeaDetails(ide)}
                    className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  >
                    <Eye className='h-4 w-4 mr-2' />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying idea details */}
      {modal && (
        <div className='fixed inset-0 z-50 overflow-y-auto' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            {/* Background overlay */}
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

            {/* Modal panel */}
            <div className='inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'>
              <div className='bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:text-left w-full'>
                    <div className='flex justify-between items-center mb-4'>
                      <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-gray-100' id='modal-title'>
                        {selectedIdea?.profilIde?.judulIde}
                      </h3>
                      <button onClick={toggle} className='text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'>
                        <X size={20} />
                      </button>
                    </div>
                    {selectedIdea && (
                      <div className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Penggagas:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.profilIde?.namaPenggagas}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>NIP:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.profilIde?.nip}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Posisi/Jabatan:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.profilIde?.posisiJabatan}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Deskripsi Permasalahan:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.deskripsiPermasalahan}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Dampak Permasalahan:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.dampakPermasalahan}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Deskripsi Ide:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.deskripsiIde}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Keunggulan Ide:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.keunggulanIde}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Manfaat Finansial:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.manfaatFinansial}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Manfaat Non-Finansial:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.manfaatNonFinansial}</div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                          <div className='font-medium text-gray-700 dark:text-gray-300'>Tanggal Dibuat:</div>
                          <div className='md:col-span-2 text-gray-600 dark:text-gray-400'>{selectedIdea.createdAt?.toLocaleDateString()}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm'
                  onClick={toggle}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DaftarIdeInovasi;
