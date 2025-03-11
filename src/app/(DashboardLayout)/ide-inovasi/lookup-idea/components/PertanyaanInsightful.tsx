// src/app/(MainBody)/ideasi/lookup-idea/components/PertanyaanInsightful.tsx
'use client';

import React, { useState } from 'react';
import { Copy, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { toast } from 'react-toastify';
import pertanyaanInsightful, { PertanyaanCategory } from '../../../../../Data/IdeInovasi/pertanyaan-insightful';

interface PertanyaanInsightfulProps {
  onSelectQuestion: (question: string) => void;
}

const PertanyaanInsightful: React.FC<PertanyaanInsightfulProps> = ({ onSelectQuestion }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]));
  };

  // Handle copy to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Pertanyaan disalin ke clipboard');
  };

  // Handle selecting a question
  const handleSelectQuestion = (question: string) => {
    onSelectQuestion(question);
  };

  // Filter categories and questions based on search query
  const filteredCategories = searchQuery
    ? pertanyaanInsightful
        .map((category) => ({
          ...category,
          questions: category.questions.filter((question) => question.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
        .filter((category) => category.questions.length > 0)
    : pertanyaanInsightful;

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow'>
      <div className='p-4 border-b border-gray-200 dark:border-gray-700'>
        <h3 className='text-lg font-medium text-gray-900 dark:text-white'>Pertanyaan Insightful</h3>
        <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>Pilih pertanyaan untuk mendapatkan insight dari data ide inovasi</p>
        <div className='mt-3 relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search size={16} className='text-gray-400' />
          </div>
          <input
            type='text'
            className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100'
            placeholder='Cari pertanyaan...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className='max-h-[500px] overflow-y-auto'>
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className='border-b border-gray-200 dark:border-gray-700 last:border-0'>
            <button
              className='w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors'
              onClick={() => toggleCategory(category.category)}
            >
              <div className='text-left'>
                <h4 className='font-medium text-gray-900 dark:text-white'>{category.category}</h4>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{category.description}</p>
              </div>
              {expandedCategories.includes(category.category) ? (
                <ChevronUp size={20} className='text-gray-500' />
              ) : (
                <ChevronDown size={20} className='text-gray-500' />
              )}
            </button>

            {expandedCategories.includes(category.category) && category.questions.length > 0 && (
              <div className='p-4 bg-gray-50 dark:bg-gray-700/50 space-y-3'>
                {category.questions.map((question, questionIndex) => (
                  <div
                    key={questionIndex}
                    className='bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm hover:shadow-md transition-shadow 
                              border border-gray-200 dark:border-gray-700 relative group'
                  >
                    <p className='text-sm text-gray-800 dark:text-gray-200 pr-8'>{question}</p>
                    <div className='absolute top-3 right-3 flex gap-2'>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(question);
                        }}
                        className='text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors'
                        title='Salin pertanyaan'
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleSelectQuestion(question)}
                      className='mt-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                               transition-colors font-medium flex items-center'
                    >
                      Gunakan pertanyaan ini
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className='p-6 text-center text-gray-500 dark:text-gray-400'>Tidak ada pertanyaan yang sesuai dengan pencarian</div>
        )}
      </div>
    </div>
  );
};

export default PertanyaanInsightful;
