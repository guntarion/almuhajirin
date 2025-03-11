// src/app/(DashboardLayout)/kelola-inovasi/konsep-kelola/components/CardNavigator.tsx
import React from 'react';
import { CardData } from '../data';

interface CardNavigatorProps {
  data: CardData[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const CardNavigator: React.FC<CardNavigatorProps> = ({ data, activeIndex, setActiveIndex }) => {
  const goToPrevious = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const goToNext = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className='relative overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 shadow-inner'>
      <div className='flex items-center justify-center min-h-[400px] p-6'>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-3xl transition-opacity duration-300'>
          <h3 className='text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-4'>{data[activeIndex].title}</h3>

          <div className='mb-4'>
            <span className='font-semibold text-gray-700 dark:text-gray-200'>Mengapa penting: </span>
            <span className='text-gray-600 dark:text-gray-300'>{data[activeIndex].importance}</span>
          </div>

          <div className='mb-4'>
            <span className='font-semibold text-gray-700 dark:text-gray-200'>Manfaat diulas: </span>
            <span className='text-gray-600 dark:text-gray-300'>{data[activeIndex].benefits}</span>
          </div>

          <div>
            <div className='font-semibold text-gray-700 dark:text-gray-200 mb-2'>Bentuk Pengembangan:</div>
            <ul className='space-y-2'>
              {data[activeIndex].developments.map((development, idx) => (
                <li key={idx} className='flex items-start'>
                  <span className='text-indigo-600 mr-2 mt-1'>•</span>
                  <span className='text-gray-600 dark:text-gray-300'>{development}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='absolute inset-x-0 top-1/2 flex justify-between items-center px-4 -mt-6'>
        <button
          onClick={goToPrevious}
          className='bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors flex items-center justify-center w-10 h-10'
          aria-label='Previous card'
        >
          {/* Left chevron SVG */}
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className='bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors flex items-center justify-center w-10 h-10'
          aria-label='Next card'
        >
          {/* Right chevron SVG */}
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>

      <div className='absolute bottom-4 inset-x-0 flex justify-center space-x-2'>
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-500'}`}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNavigator;
