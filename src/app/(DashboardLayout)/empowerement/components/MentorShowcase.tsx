// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/MentorShowcase.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mentor, MentorSpecialization } from '../data/types';
import { FaSearch, FaBuilding, FaEnvelope, FaPhone, FaUserTie, FaCertificate, FaStar, FaUserGraduate, FaUsers } from 'react-icons/fa';

interface MentorShowcaseProps {
  mentors: Mentor[];
}

const MentorShowcase: React.FC<MentorShowcaseProps> = ({ mentors }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<MentorSpecialization | 'all'>('all');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // Get unique specializations
  const uniqueSpecializations = Array.from(new Set(mentors.flatMap((mentor) => mentor.specializations))) as MentorSpecialization[];

  // Apply filters
  const filteredMentors = mentors.filter((mentor) => {
    // Search filter
    if (
      searchQuery &&
      !mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !mentor.unit.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !mentor.specializations.some((spec) => spec.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
      return false;
    }

    // Specialization filter
    if (selectedSpecialization !== 'all' && !mentor.specializations.includes(selectedSpecialization)) {
      return false;
    }

    return true;
  });

  const handleRequestMentoring = (mentor: Mentor) => {
    // In a real app, this would open a form or send a request
    alert(`Permintaan mentoring dengan ${mentor.name} telah dikirim.`);
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>Pembina Inovasi</h2>

      {/* Search and Filters */}
      <div className='mb-6 space-y-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch className='text-gray-400' />
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Cari pembina inovasi...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='flex flex-wrap gap-2'>
          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedSpecialization === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setSelectedSpecialization('all')}
          >
            Semua Spesialisasi
          </button>

          {uniqueSpecializations.map((specialization) => (
            <button
              key={specialization}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedSpecialization === specialization
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setSelectedSpecialization(specialization)}
            >
              {specialization}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.userId}
            className='border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='p-6'>
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image src={mentor.profileImage} alt={mentor.name} width={64} height={64} className='object-cover' />
                  </div>
                </div>

                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{mentor.name}</h3>

                  <p className='text-sm text-blue-600 dark:text-blue-400 mb-1'>{mentor.title}</p>

                  {mentor.honoraryTitle && <p className='text-xs italic text-gray-600 dark:text-gray-300 mb-1'>{mentor.honoraryTitle}</p>}

                  <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1'>
                    <FaBuilding className='mr-1' />
                    <span>{mentor.unit}</span>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>{mentor.biography.substring(0, 100)}...</p>
              </div>

              <div className='mt-4'>
                <h4 className='text-xs font-medium text-gray-900 dark:text-white mb-2'>Spesialisasi</h4>
                <div className='flex flex-wrap gap-1'>
                  {mentor.specializations.map((spec, index) => (
                    <span key={index} className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-0.5 rounded'>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mt-4 flex space-x-2'>
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className='flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm py-1.5 px-3 rounded transition-colors'
                >
                  Detail
                </button>

                {mentor.availableForMentoring && (
                  <button
                    onClick={() => handleRequestMentoring(mentor)}
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 px-3 rounded transition-colors'
                  >
                    Jadwalkan Mentoring
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mentor Detail Modal */}
      {selectedMentor && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              <div className='flex justify-between items-start mb-6'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-20 h-20 rounded-full overflow-hidden'>
                      <Image src={selectedMentor.profileImage} alt={selectedMentor.name} width={80} height={80} className='object-cover' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{selectedMentor.name}</h3>

                    <p className='text-blue-600 dark:text-blue-400 font-medium'>{selectedMentor.title}</p>

                    {selectedMentor.honoraryTitle && (
                      <p className='text-sm italic text-gray-600 dark:text-gray-300 mb-1'>{selectedMentor.honoraryTitle}</p>
                    )}

                    <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1'>
                      <FaBuilding className='mr-1' />
                      <span>
                        {selectedMentor.position}, {selectedMentor.unit}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedMentor(null)}
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                >
                  ✕
                </button>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Biografi</h4>
                <p className='text-gray-600 dark:text-gray-300'>{selectedMentor.biography}</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center'>
                    <FaStar className='text-yellow-500 mr-2' /> Spesialisasi
                  </h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <div className='flex flex-wrap gap-2'>
                      {selectedMentor.specializations.map((spec, index) => (
                        <span key={index} className='bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-2 py-1 rounded-full'>
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center'>
                    <FaUserGraduate className='text-blue-500 mr-2' /> Area Keahlian
                  </h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1'>
                      {selectedMentor.expertise.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center'>
                    <FaCertificate className='text-green-500 mr-2' /> Sertifikasi
                  </h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1'>
                      {selectedMentor.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-2 flex items-center'>
                    <FaUsers className='text-purple-500 mr-2' /> Pengalaman Mentoring
                  </h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>
                      <div className='flex justify-between mb-2'>
                        <span>Jumlah Mentee:</span>
                        <span className='font-medium'>{selectedMentor.mentees}</span>
                      </div>
                      <div className='flex justify-between mb-2'>
                        <span>Program Difasilitasi:</span>
                        <span className='font-medium'>{selectedMentor.programsFacilitated.length}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Fokus Kategori Inovasi:</span>
                      </div>
                      <div className='flex flex-wrap gap-1 mt-1'>
                        {selectedMentor.innovationCategories.map((category, index) => (
                          <span key={index} className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-0.5 rounded'>
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>Kontak</h4>
                <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                  <div className='flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2'>
                    <FaEnvelope className='mr-2 text-blue-500' />
                    <a href={`mailto:${selectedMentor.contactEmail}`} className='hover:text-blue-600 dark:hover:text-blue-400'>
                      {selectedMentor.contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex justify-end space-x-3'>
                <button
                  onClick={() => setSelectedMentor(null)}
                  className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded'
                >
                  Tutup
                </button>

                {selectedMentor.availableForMentoring && (
                  <button
                    onClick={() => {
                      handleRequestMentoring(selectedMentor);
                      setSelectedMentor(null);
                    }}
                    className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'
                  >
                    Jadwalkan Mentoring
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorShowcase;
