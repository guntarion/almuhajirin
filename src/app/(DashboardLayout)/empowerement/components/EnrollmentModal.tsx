// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/EnrollmentModal.tsx

'use client';

import React, { useState } from 'react';
import { Program } from '../data/types';
import { FaTimes, FaCalendar, FaClock, FaGraduationCap, FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

interface EnrollmentModalProps {
  programId: string;
  program: Program;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ programId, program, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    unit: '',
    motivationLetter: '',
    isAcceptingTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ programId, ...formData });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='bg-gray-50 dark:bg-gray-700 px-6 py-4 rounded-t-lg flex justify-between items-center'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Pendaftaran Program</h3>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'>
            <FaTimes className='text-xl' />
          </button>
        </div>

        <div className='p-6'>
          {/* Program Info */}
          <div className='mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4'>
            <h4 className='font-medium text-gray-900 dark:text-white mb-3'>{program.title}</h4>
            <div className='grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300'>
              <div className='flex items-center'>
                <FaCalendar className='mr-2 text-blue-500' />
                <span>{program.schedule ? `Mulai: ${new Date(program.schedule.startDate).toLocaleDateString('id-ID')}` : 'Jadwal fleksibel'}</span>
              </div>
              <div className='flex items-center'>
                <FaClock className='mr-2 text-blue-500' />
                <span>Durasi: {program.duration}</span>
              </div>
              <div className='flex items-center'>
                <FaGraduationCap className='mr-2 text-blue-500' />
                <span>Level: {program.level}</span>
              </div>
              <div className='flex items-center'>
                <FaBuilding className='mr-2 text-blue-500' />
                <span>Metode: {program.deliveryMethod.replace('-', ' ')}</span>
              </div>
            </div>
          </div>

          {/* Enrollment Form */}
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Nama Lengkap
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaUser className='text-gray-400' />
                  </div>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Email
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaEnvelope className='text-gray-400' />
                  </div>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Nomor Telepon
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <FaPhone className='text-gray-400' />
                  </div>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='position' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Jabatan
                </label>
                <input
                  type='text'
                  id='position'
                  name='position'
                  className='px-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor='unit' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Unit
                </label>
                <input
                  type='text'
                  id='unit'
                  name='unit'
                  className='px-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                  value={formData.unit}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor='motivationLetter' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Motivasi Mengikuti Program
                </label>
                <textarea
                  id='motivationLetter'
                  name='motivationLetter'
                  rows={4}
                  className='px-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
                  value={formData.motivationLetter}
                  onChange={handleChange}
                  required
                  placeholder='Jelaskan mengapa Anda tertarik mengikuti program ini dan bagaimana program ini dapat membantu pengembangan inovasi di unit Anda.'
                />
              </div>

              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='isAcceptingTerms'
                    name='isAcceptingTerms'
                    type='checkbox'
                    className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                    checked={formData.isAcceptingTerms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='isAcceptingTerms' className='text-gray-700 dark:text-gray-300'>
                    Saya bersedia mengikuti seluruh rangkaian program dan akan menerapkan pengetahuan yang diperoleh untuk pengembangan inovasi di
                    unit saya.
                  </label>
                </div>
              </div>

              <div className='flex justify-end space-x-3 mt-6'>
                <button
                  type='button'
                  onClick={onClose}
                  className='px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none'
                >
                  Batal
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none'
                  disabled={!formData.isAcceptingTerms}
                >
                  Daftar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;
