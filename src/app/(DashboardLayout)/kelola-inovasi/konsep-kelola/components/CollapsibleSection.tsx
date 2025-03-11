// src/app/(DashboardLayout)/kelola-inovasi/konsep-kelola/components/CollapsibleSection.tsx
import React, { useState } from 'react';
import { DetailedSection } from '../data';

interface CollapsibleSectionProps {
  title: string;
  content: string;
  subsections?: any[];
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, content, subsections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='col-span-1'>
      <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg'>
        <div className='p-6 cursor-pointer flex justify-between items-center' onClick={() => setIsOpen(!isOpen)}>
          <h3 className='text-xl font-semibold text-gray-800 dark:text-white'>{title}</h3>
          {/* Replaced heroicon with SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>

        {isOpen && (
          <div className='px-6 pb-6 pt-2'>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>{content}</p>

            {subsections && subsections.length > 0 && (
              <div className='space-y-4 mt-6'>
                {subsections.map((subsection, index) => (
                  <div key={index} className='bg-gray-50 dark:bg-gray-700 rounded p-4'>
                    <h4 className='text-lg font-medium text-gray-800 dark:text-white mb-2'>{subsection.title}</h4>
                    <p className='text-gray-600 dark:text-gray-300'>{subsection.content}</p>
                    {subsection.items && (
                      <ul className='list-disc pl-6 mt-2 space-y-1'>
                        {subsection.items.map((item: string, idx: number) => (
                          <li key={idx} className='text-gray-600 dark:text-gray-300'>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleSection;
