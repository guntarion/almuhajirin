'use client';

import { Node } from '@/utils/ideaRelationshipUtils';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';

interface IdeaDetailsProps {
  selectedNode: Node;
  onClose: () => void;
}

const IdeaDetails: React.FC<IdeaDetailsProps> = ({ selectedNode, onClose }) => {
  // Close on escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className='bg-white rounded-xl shadow-xl p-6 relative max-w-xl w-full m-4' onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'>
          <span className='sr-only'>Close</span>
          <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        <h3 className='text-2xl font-semibold text-gray-800 mb-6'>Detail Ide Inovasi</h3>

        <div className='space-y-6'>
          <div className='bg-blue-50 p-4 rounded-lg'>
            <h4 className='text-sm font-medium text-blue-700'>Judul Ide</h4>
            <p className='text-gray-900 text-lg font-medium mt-1'>{selectedNode.name}</p>
          </div>

          <div className='bg-green-50 p-4 rounded-lg'>
            <h4 className='text-sm font-medium text-green-700'>Posisi/Jabatan</h4>
            <p className='text-gray-900 text-lg font-medium mt-1'>{selectedNode.position}</p>
          </div>

          <div className='bg-purple-50 p-4 rounded-lg'>
            <h4 className='text-sm font-medium text-purple-700'>Deskripsi</h4>
            <p className='text-gray-700 mt-1 leading-relaxed'>{selectedNode.description}</p>
          </div>

          <div className='bg-amber-50 p-4 rounded-lg'>
            <h4 className='text-sm font-medium text-amber-700'>Nilai Manfaat</h4>
            <div className='flex items-center mt-2'>
              <div className='h-3 flex-grow bg-gray-200 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-amber-500 rounded-full transition-all duration-500'
                  style={{ width: `${Math.min(100, (selectedNode.value / 20) * 100)}%` }}
                />
              </div>
              <span className='ml-3 text-lg font-medium text-amber-700'>{selectedNode.value}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetails;
