// src/app/(DashboardLayout)/kelola-inovasi/empowerment/page.tsx

'use client';

import React, { useState } from 'react';
import { programs, getRecommendedPrograms, getPopularPrograms } from './data/programs';
import { innovators, getTopInnovators } from './data/innovators';
import { mentors, getMentorsBySpecialization } from './data/mentors';
import { achievements, getUserNextAchievements } from './data/achievements';
import { getEnrollmentStats } from './data/enrollments';
import ProgramCatalog from './components/ProgramCatalog';
import InnovatorLeaderboard from './components/InnovatorLeaderboard';
import MentorShowcase from './components/MentorShowcase';
import DevelopmentPrograms from './components/DevelopmentPrograms';
import SkillPathway from './components/SkillPathway';
import { FaLightbulb, FaTrophy, FaGraduationCap, FaUsers, FaAward, FaChartLine, FaCalendar, FaClock } from 'react-icons/fa';

const EmpowermentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const topInnovators = getTopInnovators(10);
  const enrollmentStats = getEnrollmentStats();

  // Mock current user - in a real app, this would come from authentication
  const currentUser = {
    id: 'user-1',
    level: 'Champion',
    interests: ['design-thinking', 'implementation'],
  };

  const recommendedPrograms = getRecommendedPrograms(currentUser.id, currentUser.level, currentUser.interests);

  return (
    <div className='container mx-auto px-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>Program Empowerment Inovasi</h1>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          Tingkatkan kompetensi inovasi Anda melalui program-program pengembangan, komunitas, dan sistem pengakuan yang komprehensif.
        </p>

        {/* Navigation Tabs */}
        <div className='flex overflow-x-auto space-x-2 border-b border-gray-200 dark:border-gray-700 pb-2 mb-6'>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'overview'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'programs'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('programs')}
          >
            Program Pengembangan
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'innovators'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('innovators')}
          >
            Leaderboard Inovator
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'mentors'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('mentors')}
          >
            Pembina Inovasi
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'pathway'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('pathway')}
          >
            Jalur Pengembangan
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Key Stats */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
              <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-4'>
                <div className='flex items-center'>
                  <div className='p-3 bg-blue-500 rounded-full mr-4'>
                    <FaGraduationCap className='text-white text-xl' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Program Tersedia</p>
                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{programs.length}</h4>
                  </div>
                </div>
              </div>

              <div className='bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg p-4'>
                <div className='flex items-center'>
                  <div className='p-3 bg-green-500 rounded-full mr-4'>
                    <FaUsers className='text-white text-xl' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Peserta Aktif</p>
                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{enrollmentStats.active}</h4>
                  </div>
                </div>
              </div>

              <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900 rounded-lg p-4'>
                <div className='flex items-center'>
                  <div className='p-3 bg-purple-500 rounded-full mr-4'>
                    <FaLightbulb className='text-white text-xl' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Inovator Terdaftar</p>
                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{innovators.length}</h4>
                  </div>
                </div>
              </div>

              <div className='bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900 rounded-lg p-4'>
                <div className='flex items-center'>
                  <div className='p-3 bg-amber-500 rounded-full mr-4'>
                    <FaTrophy className='text-white text-xl' />
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>Pencapaian</p>
                    <h4 className='text-2xl font-bold text-gray-900 dark:text-white'>{achievements.length}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Programs */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Program yang Direkomendasikan untuk Anda</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {recommendedPrograms.slice(0, 3).map((program) => (
                  <div key={program.id} className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600'>
                    <h3 className='font-medium text-gray-900 dark:text-white mb-2'>{program.title}</h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2'>{program.description}</p>
                    <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3'>
                      <FaClock className='mr-1' />
                      <span>{program.duration}</span>
                      {program.schedule && (
                        <>
                          <span className='mx-2'>•</span>
                          <FaCalendar className='mr-1' />
                          <span>Mulai {new Date(program.schedule.startDate).toLocaleDateString('id-ID')}</span>
                        </>
                      )}
                    </div>
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded transition-colors'>
                      Lihat Detail
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Innovators */}
            <div className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center'>
                <FaTrophy className='text-yellow-500 mr-2' /> Top Inovator
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                {topInnovators.slice(0, 5).map((innovator, index) => (
                  <div
                    key={innovator.userId}
                    className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 text-center'
                  >
                    <div className='relative mb-2'>
                      <div className='w-16 h-16 mx-auto rounded-full overflow-hidden'>
                        <img src={innovator.profileImage} alt={innovator.name} className='w-full h-full object-cover' />
                      </div>
                      {index === 0 && (
                        <div className='absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
                          <FaTrophy className='text-xs' />
                        </div>
                      )}
                    </div>
                    <h3 className='font-medium text-gray-900 dark:text-white text-sm'>{innovator.name}</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400 mb-1'>{innovator.unit}</p>
                    <div className='text-xs mb-1'>
                      <span
                        className={`px-1.5 py-0.5 rounded-full font-medium ${
                          innovator.level === 'Maestro'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                            : innovator.level === 'Champion'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}
                      >
                        {innovator.level}
                      </span>
                    </div>
                    <p className='text-xs font-medium text-gray-900 dark:text-white'>{innovator.totalPoints.toLocaleString()} points</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Progress & Pencapaian Anda</h2>
              <div className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-medium text-gray-900 dark:text-white'>Level Progress</h3>
                    <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>Champion</span>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1'>
                    <div className='bg-blue-600 h-2.5 rounded-full' style={{ width: '78%' }}></div>
                  </div>
                  <div className='flex justify-between text-xs text-gray-500 dark:text-gray-400'>
                    <span>7,850 XP</span>
                    <span>10,000 XP needed for Maestro</span>
                  </div>
                </div>

                <h3 className='font-medium text-gray-900 dark:text-white mb-3'>Recent Achievements</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-3'>
                      <FaAward className='text-yellow-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900 dark:text-white'>Impact Creator</p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Earned on June 18, 2023</p>
                    </div>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-3'>
                      <FaAward className='text-yellow-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900 dark:text-white'>Continuous Learner</p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Earned on January 10, 2023</p>
                    </div>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center'>
                    <div className='w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-3'>
                      <FaAward className='text-yellow-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium text-gray-900 dark:text-white'>Implementer</p>
                      <p className='text-xs text-gray-500 dark:text-gray-400'>Earned on July 22, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'programs' && <ProgramCatalog programs={programs} />}

        {activeTab === 'innovators' && <InnovatorLeaderboard innovators={innovators} />}

        {activeTab === 'mentors' && <MentorShowcase mentors={mentors} />}

        {activeTab === 'pathway' && <SkillPathway />}
      </div>
    </div>
  );
};

export default EmpowermentPage;
