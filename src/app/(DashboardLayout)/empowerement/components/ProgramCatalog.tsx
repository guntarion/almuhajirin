// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/ProgramCatalog.tsx

'use client';

import React, { useState } from 'react';
import { Program, ProgramCategory, ProgramLevel, DeliveryMethod } from '../data/types';
import ProgramCard from './ProgramCard';
import EnrollmentModal from './EnrollmentModal';
import { FaFilter, FaSearch, FaSortAmountDown } from 'react-icons/fa';

interface ProgramCatalogProps {
  programs: Program[];
}

const ProgramCatalog: React.FC<ProgramCatalogProps> = ({ programs }) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '' as ProgramCategory | '',
    level: '' as ProgramLevel | '',
    deliveryMethod: '' as DeliveryMethod | '',
  });
  const [sortBy, setSortBy] = useState('newest');

  const handleEnroll = (programId: string) => {
    setSelectedProgram(programId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
  };

  const handleSubmitEnrollment = (formData: any) => {
    // In a real implementation, this would send data to an API
    console.log('Enrollment submitted:', formData);
    setShowModal(false);
    setSelectedProgram(null);
    alert('Pendaftaran berhasil diajukan!');
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Apply filters and search
  const filteredPrograms = programs.filter((program) => {
    // Search filter
    if (
      searchQuery &&
      !program.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !program.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (filters.category && !program.categories.includes(filters.category as ProgramCategory)) {
      return false;
    }

    // Level filter
    if (filters.level && program.level !== filters.level) {
      return false;
    }

    // Delivery method filter
    if (filters.deliveryMethod && program.deliveryMethod !== filters.deliveryMethod) {
      return false;
    }

    return true;
  });

  // Apply sorting
  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.schedule?.startDate || '').getTime() - new Date(a.schedule?.startDate || '').getTime();
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'durationAsc':
        return a.duration.localeCompare(b.duration);
      case 'durationDesc':
        return b.duration.localeCompare(a.duration);
      default:
        return 0;
    }
  });

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>Katalog Program Pengembangan</h2>

      {/* Search and Filters */}
      <div className='mb-6 space-y-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch className='text-gray-400' />
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Cari program...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='flex flex-wrap gap-4'>
          <div className='flex items-center'>
            <FaFilter className='text-gray-400 mr-2' />
            <span className='text-sm text-gray-600 dark:text-gray-300 mr-2'>Filter:</span>
          </div>

          <select
            name='category'
            value={filters.category}
            onChange={handleFilterChange}
            className='border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700'
          >
            <option value=''>Semua Kategori</option>
            <option value='design-thinking'>Design Thinking</option>
            <option value='technical-innovation'>Technical Innovation</option>
            <option value='business-model'>Business Model</option>
            <option value='implementation'>Implementation</option>
            <option value='scaling'>Scaling</option>
            <option value='leadership'>Leadership</option>
          </select>

          <select
            name='level'
            value={filters.level}
            onChange={handleFilterChange}
            className='border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700'
          >
            <option value=''>Semua Level</option>
            <option value='beginner'>Beginner</option>
            <option value='intermediate'>Intermediate</option>
            <option value='advanced'>Advanced</option>
            <option value='expert'>Expert</option>
          </select>

          <select
            name='deliveryMethod'
            value={filters.deliveryMethod}
            onChange={handleFilterChange}
            className='border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700'
          >
            <option value=''>Semua Metode</option>
            <option value='online-zoom'>Online (Zoom)</option>
            <option value='online-self-learning'>Self-Learning</option>
            <option value='offline-workshop'>Workshop Offline</option>
            <option value='blended'>Blended Learning</option>
          </select>

          <div className='flex items-center ml-auto'>
            <FaSortAmountDown className='text-gray-400 mr-2' />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='border border-gray-300 dark:border-gray-600 rounded-md py-1 px-2 text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700'
            >
              <option value='newest'>Terbaru</option>
              <option value='alphabetical'>A-Z</option>
              <option value='durationAsc'>Durasi (Terpendek)</option>
              <option value='durationDesc'>Durasi (Terpanjang)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      {sortedPrograms.length === 0 ? (
        <div className='text-center py-10 text-gray-500 dark:text-gray-400'>
          <p>Tidak ada program yang sesuai dengan filter yang dipilih.</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {sortedPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} onEnroll={handleEnroll} />
          ))}
        </div>
      )}

      {/* Enrollment Modal */}
      {showModal && selectedProgram && (
        <EnrollmentModal
          programId={selectedProgram}
          onClose={handleCloseModal}
          onSubmit={handleSubmitEnrollment}
          program={programs.find((p) => p.id === selectedProgram)!}
        />
      )}
    </div>
  );
};

export default ProgramCatalog;
