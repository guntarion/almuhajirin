// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/InterestForm.tsx
/**
 * Component for expressing interest in adopting or learning more about an innovation
 * Provides contact forms for various inquiries
 */

'use client';

import React, { useState } from 'react';
import { FaInfoCircle, FaPuzzlePiece, FaHandshake, FaTimes } from 'react-icons/fa';

interface InterestFormProps {
  innovationId: string;
  innovationTitle: string;
}

const InterestForm: React.FC<InterestFormProps> = ({ innovationId, innovationTitle }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'information' | 'implementation' | 'collaboration'>('information');
  const [formData, setFormData] = useState({
    unitName: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to an API
    alert(`Formulir ${formType} telah terkirim untuk inovasi: ${innovationTitle}`);
    setFormData({
      unitName: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      message: '',
    });
    setIsFormOpen(false);
  };

  const formTypeLabels = {
    information: 'Informasi Lebih Lanjut',
    implementation: 'Implementasi Inovasi',
    collaboration: 'Kolaborasi Pengembangan',
  };

  const formTypeDescriptions = {
    information: 'Dapatkan informasi lebih detail tentang inovasi ini, termasuk dokumentasi teknis, panduan implementasi, dan studi kasus.',
    implementation: 'Ajukan permintaan untuk mengimplementasikan inovasi ini di unit Anda, termasuk dukungan dari tim inovator.',
    collaboration: 'Bergabung dalam pengembangan lebih lanjut dari inovasi ini dengan menyumbangkan ide, resources, atau keahlian.',
  };

  return (
    <>
      {!isFormOpen ? (
        <div className='fixed bottom-6 right-6 z-10'>
          <div className='flex flex-col gap-2'>
            <button
              onClick={() => {
                setFormType('information');
                setIsFormOpen(true);
              }}
              className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center'
            >
              <FaInfoCircle className='mr-2' /> Informasi Lanjutan
            </button>

            <button
              onClick={() => {
                setFormType('implementation');
                setIsFormOpen(true);
              }}
              className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center'
            >
              <FaPuzzlePiece className='mr-2' /> Ajukan Implementasi
            </button>

            <button
              onClick={() => {
                setFormType('collaboration');
                setIsFormOpen(true);
              }}
              className='bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-colors flex items-center'
            >
              <FaHandshake className='mr-2' /> Kolaborasi Pengembangan
            </button>
          </div>
        </div>
      ) : (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md'>
            <div className='bg-gray-50 dark:bg-gray-700 px-6 py-4 rounded-t-lg flex justify-between items-center'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{formTypeLabels[formType]}</h3>
              <button onClick={() => setIsFormOpen(false)} className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'>
                <FaTimes className='text-xl' />
              </button>
            </div>

            <div className='p-6'>
              <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>{formTypeDescriptions[formType]}</p>

              <form onSubmit={handleFormSubmit}>
                <div className='space-y-4'>
                  <div>
                    <label htmlFor='unitName' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                      Nama Unit
                    </label>
                    <input
                      type='text'
                      id='unitName'
                      name='unitName'
                      className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                      value={formData.unitName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='contactPerson' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                      Nama PIC
                    </label>
                    <input
                      type='text'
                      id='contactPerson'
                      name='contactPerson'
                      className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='contactEmail' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='contactEmail'
                      name='contactEmail'
                      className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='contactPhone' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                      Nomor Telepon
                    </label>
                    <input
                      type='tel'
                      id='contactPhone'
                      name='contactPhone'
                      className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                      Pesan
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={4}
                      className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='flex justify-end space-x-3 mt-6'>
                    <button
                      type='button'
                      onClick={() => setIsFormOpen(false)}
                      className='text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium'
                    >
                      Batal
                    </button>
                    <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'>
                      Kirim Permintaan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InterestForm;
