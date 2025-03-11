// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/InnovatorLeaderboard.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Innovator } from '../data/types';
import { FaTrophy, FaMedal, FaAward, FaSearch } from 'react-icons/fa';

interface InnovatorLeaderboardProps {
  innovators: Innovator[];
}

const InnovatorLeaderboard: React.FC<InnovatorLeaderboardProps> = ({ innovators }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [selectedInnovator, setSelectedInnovator] = useState<Innovator | null>(null);

  // Apply filters
  const filteredInnovators = innovators.filter((innovator) => {
    // Search filter
    if (
      searchQuery &&
      !innovator.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !innovator.unit.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (category !== 'all' && !innovator.innovationCategories.includes(category as any)) {
      return false;
    }

    return true;
  });

  // Sort innovators by points
  const sortedInnovators = [...filteredInnovators].sort((a, b) => b.totalPoints - a.totalPoints);

  const handleInnovatorClick = (innovator: Innovator) => {
    setSelectedInnovator(innovator);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Novice':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'Explorer':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Creator':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Champion':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Maestro':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaTrophy className='text-yellow-500' />;
      case 1:
        return <FaMedal className='text-gray-400' />;
      case 2:
        return <FaMedal className='text-amber-600' />;
      default:
        return <span className='w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs'>{index + 1}</span>;
    }
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>Leaderboard Inovator</h2>

      {/* Search and Filters */}
      <div className='mb-6 space-y-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch className='text-gray-400' />
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Cari inovator...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className='flex flex-wrap gap-2'>
          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('all')}
          >
            Semua Kategori
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Technical Supporting'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Technical Supporting')}
          >
            Technical Supporting
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Pembangkit'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Pembangkit')}
          >
            Pembangkit
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Optimasi Proses Bisnis'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Optimasi Proses Bisnis')}
          >
            Optimasi Proses Bisnis
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Energi Baru Terbarukan'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Energi Baru Terbarukan')}
          >
            Energi Baru Terbarukan
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Aplikasi'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Aplikasi')}
          >
            Aplikasi
          </button>

          <button
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              category === 'Breakthrough'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setCategory('Breakthrough')}
          >
            Breakthrough
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full'>
          <thead className='bg-gray-50 dark:bg-gray-700'>
            <tr>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Rank</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Inovator</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Level</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Unit</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Points</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Kontribusi</th>
              <th className='px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Aksi</th>
            </tr>
          </thead>
          <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
            {sortedInnovators.map((innovator, index) => (
              <tr key={innovator.userId} className='hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'>
                <td className='px-4 py-4'>
                  <div className='flex items-center justify-center'>{getRankIcon(index)}</div>
                </td>
                <td className='px-4 py-4'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 flex-shrink-0'>
                      <Image src={innovator.profileImage} alt={innovator.name} width={40} height={40} className='rounded-full' />
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900 dark:text-white'>{innovator.name}</p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>{innovator.position}</p>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-4'>
                  <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(innovator.level)}`}>{innovator.level}</span>
                </td>
                <td className='px-4 py-4 text-sm text-gray-600 dark:text-gray-300'>{innovator.unit}</td>
                <td className='px-4 py-4 text-sm font-medium text-gray-900 dark:text-white'>{innovator.totalPoints.toLocaleString()}</td>
                <td className='px-4 py-4'>
                  <div className='text-xs text-gray-600 dark:text-gray-300'>
                    <div className='flex items-center justify-between mb-1'>
                      <span>Ideations:</span>
                      <span className='font-medium'>{innovator.contributions.ideations}</span>
                    </div>
                    <div className='flex items-center justify-between mb-1'>
                      <span>Implementations:</span>
                      <span className='font-medium'>{innovator.contributions.implementations}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span>Collaborations:</span>
                      <span className='font-medium'>{innovator.contributions.collaborations}</span>
                    </div>
                  </div>
                </td>
                <td className='px-4 py-4 text-sm'>
                  <button
                    onClick={() => handleInnovatorClick(innovator)}
                    className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Innovator Detail Modal */}
      {selectedInnovator && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              <div className='flex justify-between items-start mb-6'>
                <div className='flex items-center'>
                  <Image src={selectedInnovator.profileImage} alt={selectedInnovator.name} width={64} height={64} className='rounded-full' />
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{selectedInnovator.name}</h3>
                    <div className='flex items-center'>
                      <span className={`px-2 py-1 text-xs rounded-full mr-2 ${getLevelColor(selectedInnovator.level)}`}>
                        {selectedInnovator.level}
                      </span>
                      <span className='text-sm text-gray-600 dark:text-gray-300'>
                        {selectedInnovator.position} • {selectedInnovator.unit}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInnovator(null)}
                  className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                >
                  ✕
                </button>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Biografi</h4>
                <p className='text-gray-600 dark:text-gray-300'>{selectedInnovator.biography}</p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Points & Level</h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-gray-600 dark:text-gray-300'>Total Points:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.totalPoints.toLocaleString()}</span>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-gray-600 dark:text-gray-300'>XP:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.xp.toLocaleString()}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600 dark:text-gray-300'>Level:</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(selectedInnovator.level)}`}>{selectedInnovator.level}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Kontribusi</h4>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-gray-600 dark:text-gray-300'>Ideations:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.contributions.ideations}</span>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-gray-600 dark:text-gray-300'>Implementations:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.contributions.implementations}</span>
                    </div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-gray-600 dark:text-gray-300'>Collaborations:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.contributions.collaborations}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-gray-600 dark:text-gray-300'>Mentorships:</span>
                      <span className='font-bold text-gray-900 dark:text-white'>{selectedInnovator.contributions.mentorships}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Skills</h4>
                <div className='grid grid-cols-2 gap-2'>
                  {selectedInnovator.skills.map((skill, index) => (
                    <div key={index} className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3'>
                      <div className='flex justify-between items-center mb-1'>
                        <span className='text-sm text-gray-600 dark:text-gray-300'>{skill.skillName}</span>
                        <span className='text-xs font-medium text-gray-900 dark:text-white'>{skill.proficiencyLevel}/5</span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
                        <div className='bg-blue-600 h-2 rounded-full' style={{ width: `${(skill.proficiencyLevel / 5) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center'>
                  <FaAward className='text-yellow-500 mr-2' /> Achievements
                </h4>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
                  {selectedInnovator.achievements.map((achievement, index) => (
                    <div key={index} className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center'>
                      <div className='w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-2'>
                        <FaAward className='text-yellow-500' />
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-900 dark:text-white'>Achievement {index + 1}</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{new Date(achievement.dateEarned).toLocaleDateString('id-ID')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end'>
                <button
                  onClick={() => setSelectedInnovator(null)}
                  className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded mr-2'
                >
                  Tutup
                </button>
                <Link
                  href={`/messages/compose?to=${selectedInnovator.userId}`}
                  className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'
                >
                  Kirim Pesan
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovatorLeaderboard;
