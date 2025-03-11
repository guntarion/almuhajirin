// src/app/(DashboardLayout)/kelola-inovasi/empowerment/components/SkillPathway.tsx

'use client';

import React, { useState } from 'react';
import { FaSearch, FaArrowRight, FaCheck, FaLock, FaBookOpen, FaLightbulb, FaTools, FaChartPie, FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';

// Mock data for skill pathways
const pathways = [
  {
    id: 'pathway-1',
    title: 'Design Thinking Mastery',
    description: 'Menguasai pendekatan design thinking untuk problem solving dan pengembangan solusi inovatif',
    icon: <FaLightbulb className='text-yellow-500' />,
    color: 'from-yellow-500 to-orange-500',
    steps: [
      { id: 'step-1-1', title: 'Design Thinking Fundamentals', programId: 'dt-01', completed: true },
      { id: 'step-1-2', title: 'User Research Methods', programId: 'dt-02', completed: false },
      { id: 'step-1-3', title: 'Prototyping Skills', programId: 'dt-03', completed: false },
      { id: 'step-1-4', title: 'Design Thinking Facilitation', programId: 'dt-04', completed: false },
      { id: 'step-1-5', title: 'Design Thinking Master Project', programId: 'dt-05', completed: false },
    ],
  },
  {
    id: 'pathway-2',
    title: 'Technical Innovation',
    description: 'Mempelajari pendekatan inovasi teknis dalam konteks pembangkit tenaga listrik',
    icon: <FaTools className='text-blue-500' />,
    color: 'from-blue-500 to-cyan-500',
    steps: [
      { id: 'step-2-1', title: 'Technical Innovation for Power Plants', programId: 'tech-01', completed: true },
      { id: 'step-2-2', title: 'Advanced Optimization Methods', programId: 'tech-02', completed: false },
      { id: 'step-2-3', title: 'Applied Data Analytics', programId: 'tech-03', completed: false },
      { id: 'step-2-4', title: 'IoT for Power Plants', programId: 'tech-04', completed: false },
      { id: 'step-2-5', title: 'Technical Innovation Master Project', programId: 'tech-05', completed: false },
    ],
  },
  {
    id: 'pathway-3',
    title: 'Business Innovation',
    description: 'Mengembangkan model bisnis inovatif dan strategi "Beyond kWh" untuk diversifikasi pendapatan',
    icon: <FaChartPie className='text-green-500' />,
    color: 'from-green-500 to-emerald-500',
    steps: [
      { id: 'step-3-1', title: 'Business Model Innovation Basics', programId: 'biz-01', completed: false },
      { id: 'step-3-2', title: 'Value Proposition Design', programId: 'biz-02', completed: false },
      { id: 'step-3-3', title: 'Market Opportunity Analysis', programId: 'biz-03', completed: false },
      { id: 'step-3-4', title: 'Beyond kWh Strategies', programId: 'biz-04', completed: false },
      { id: 'step-3-5', title: 'Business Innovation Master Project', programId: 'biz-05', completed: false },
    ],
  },
  {
    id: 'pathway-4',
    title: 'Innovation Leadership',
    description: 'Membangun keterampilan kepemimpinan untuk mengelola tim inovasi dan mendorong budaya inovasi',
    icon: <FaUsers className='text-purple-500' />,
    color: 'from-purple-500 to-indigo-500',
    steps: [
      { id: 'step-4-1', title: 'Innovation Leadership Fundamentals', programId: 'lead-01', completed: false },
      { id: 'step-4-2', title: 'Building Innovation Teams', programId: 'lead-02', completed: false },
      { id: 'step-4-3', title: 'Change Management for Innovation', programId: 'lead-03', completed: false },
      { id: 'step-4-4', title: 'Innovation Culture Development', programId: 'lead-04', completed: false },
      { id: 'step-4-5', title: 'Innovation Leadership Master Project', programId: 'lead-05', completed: false },
    ],
  },
  {
    id: 'pathway-5',
    title: 'Implementation Excellence',
    description: 'Menguasai proses implementasi inovasi, dari prototype hingga penerapan skala penuh',
    icon: <FaRocket className='text-red-500' />,
    color: 'from-red-500 to-pink-500',
    steps: [
      { id: 'step-5-1', title: 'Implementation Planning', programId: 'imp-01', completed: false },
      { id: 'step-5-2', title: 'Risk Management for Innovation', programId: 'imp-02', completed: false },
      { id: 'step-5-3', title: 'Scaling Innovation', programId: 'imp-03', completed: false },
      { id: 'step-5-4', title: 'Impact Measurement', programId: 'imp-04', completed: false },
      { id: 'step-5-5', title: 'Implementation Master Project', programId: 'imp-05', completed: false },
    ],
  },
];

const SkillPathway: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  // Filter pathways based on search
  const filteredPathways = pathways.filter(
    (pathway) =>
      pathway.title.toLowerCase().includes(searchQuery.toLowerCase()) || pathway.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activePathway = selectedPathway ? pathways.find((p) => p.id === selectedPathway) : null;

  return (
    <div className='space-y-6'>
      <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <FaSearch className='text-gray-400' />
        </div>
        <input
          type='text'
          className='pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white'
          placeholder='Cari jalur pengembangan...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Pathways Overview */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredPathways.map((pathway) => (
          <div
            key={pathway.id}
            className={`bg-gradient-to-br ${pathway.color} text-white rounded-lg shadow-md p-6 cursor-pointer transition-transform hover:-translate-y-1`}
            onClick={() => setSelectedPathway(pathway.id)}
          >
            <div className='flex items-start'>
              <div className='bg-white rounded-full p-3 mr-4'>{pathway.icon}</div>
              <div>
                <h3 className='font-bold text-lg mb-1'>{pathway.title}</h3>
                <p className='text-sm text-white text-opacity-90 mb-3'>{pathway.description}</p>

                <div className='flex justify-between items-center'>
                  <div className='text-sm'>
                    <span className='font-medium'>{pathway.steps.filter((s) => s.completed).length}</span>
                    <span className='text-white text-opacity-75'> dari </span>
                    <span className='font-medium'>{pathway.steps.length}</span>
                    <span className='text-white text-opacity-75'> selesai</span>
                  </div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Pathway Detail */}
      {activePathway && (
        <div className='mt-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6'>
          <div className='flex justify-between items-start mb-6'>
            <div className='flex items-center'>
              <div className={`bg-gradient-to-br ${activePathway.color} text-white rounded-full p-3 mr-4`}>{activePathway.icon}</div>
              <div>
                <h2 className='text-xl font-bold text-gray-900 dark:text-white'>{activePathway.title}</h2>
                <p className='text-gray-600 dark:text-gray-300'>{activePathway.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedPathway(null)}
              className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            >
              ✕
            </button>
          </div>

          {/* Pathway Progress */}
          <div className='mb-6'>
            <div className='flex justify-between mb-2'>
              <h3 className='font-medium text-gray-900 dark:text-white'>Progress</h3>
              <span className='text-blue-600 dark:text-blue-400'>
                {Math.round((activePathway.steps.filter((s) => s.completed).length / activePathway.steps.length) * 100)}%
              </span>
            </div>
            <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5'>
              <div
                className={`bg-gradient-to-r ${activePathway.color} h-2.5 rounded-full`}
                style={{ width: `${(activePathway.steps.filter((s) => s.completed).length / activePathway.steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Pathway Steps */}
          <div className='space-y-4'>
            <h3 className='font-medium text-gray-900 dark:text-white mb-4'>Langkah-langkah Jalur Pengembangan</h3>

            <div className='relative'>
              {/* Timeline line */}
              <div className='absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700'></div>

              {/* Steps */}
              <div className='space-y-8'>
                {activePathway.steps.map((step, index) => (
                  <div key={step.id} className='relative pl-12'>
                    {/* Timeline indicator */}
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : index === activePathway.steps.filter((s) => s.completed).length
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                      }`}
                    >
                      {step.completed ? <FaCheck /> : index === activePathway.steps.filter((s) => s.completed).length ? <FaBookOpen /> : <FaLock />}
                    </div>

                    {/* Step content */}
                    <div
                      className={`border rounded-lg p-4 ${
                        step.completed
                          ? 'border-green-200 dark:border-green-900/30 bg-green-50 dark:bg-green-900/20'
                          : index === activePathway.steps.filter((s) => s.completed).length
                          ? 'border-blue-200 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                      }`}
                    >
                      <h4
                        className={`font-medium ${
                          step.completed
                            ? 'text-green-800 dark:text-green-400'
                            : index === activePathway.steps.filter((s) => s.completed).length
                            ? 'text-blue-800 dark:text-blue-400'
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {step.title}
                      </h4>

                      <div className='mt-2 flex justify-between items-center'>
                        <div className='text-sm text-gray-600 dark:text-gray-300'>
                          {step.completed ? (
                            <span className='flex items-center text-green-600 dark:text-green-400'>
                              <FaCheck className='mr-1' /> Selesai
                            </span>
                          ) : index === activePathway.steps.filter((s) => s.completed).length ? (
                            <span>Tersedia untuk diikuti</span>
                          ) : (
                            <span className='flex items-center text-gray-500 dark:text-gray-400'>
                              <FaLock className='mr-1' /> Selesaikan langkah sebelumnya
                            </span>
                          )}
                        </div>

                        {(step.completed || index === activePathway.steps.filter((s) => s.completed).length) && (
                          <button className='text-sm text-blue-600 dark:text-blue-400 hover:underline'>
                            {step.completed ? 'Lihat Detail' : 'Enroll'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className='mt-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6'>
            <div className='flex items-center mb-4'>
              <div className={`bg-gradient-to-br ${activePathway.color} text-white rounded-full p-2 mr-3`}>
                <FaTrophy />
              </div>
              <h3 className='font-semibold text-gray-900 dark:text-white'>Sertifikasi {activePathway.title}</h3>
            </div>

            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              Selesaikan seluruh tahapan jalur pengembangan ini untuk mendapatkan sertifikasi resmi dari PLN NP Services yang diakui di seluruh unit.
            </p>

            <div className='flex justify-between'>
              <div className='text-sm text-gray-500 dark:text-gray-400'>
                Progress: {activePathway.steps.filter((s) => s.completed).length}/{activePathway.steps.length} langkah
              </div>

              <button
                className={`px-4 py-2 rounded ${
                  activePathway.steps.every((s) => s.completed)
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
                disabled={!activePathway.steps.every((s) => s.completed)}
              >
                {activePathway.steps.every((s) => s.completed) ? 'Klaim Sertifikat' : 'Selesaikan Semua Langkah'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillPathway;
