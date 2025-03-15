// src/app/(DashboardLayout)/doa-generator/components/DoaForm.tsx
import React from 'react';

interface DoaFormProps {
  intention: string;
  setIntention: (value: string) => void;
  recipient: string;
  setRecipient: (value: string) => void;
  customRecipient: string;
  setCustomRecipient: (value: string) => void;
  situation: string;
  setSituation: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

/**
 * Form component for the doa generator
 * Captures user input for generating personalized prayers
 */
const DoaForm: React.FC<DoaFormProps> = ({
  intention,
  setIntention,
  recipient,
  setRecipient,
  customRecipient,
  setCustomRecipient,
  situation,
  setSituation,
  language,
  setLanguage,
  length,
  setLength,
  isLoading,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className='space-y-6'
    >
      {/* Intention Input */}
      <div>
        <label htmlFor='intention' className='block text-sm font-medium text-gray-700'>
          Intensi Doa <span className='text-red-500'>*</span>
        </label>
        <div className='mt-1'>
          <input
            type='text'
            id='intention'
            placeholder='Misalnya: kesembuhan, rezeki, kelulusan ujian'
            value={intention}
            onChange={(e) => setIntention(e.target.value)}
            required
            className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
          />
        </div>
      </div>

      {/* Recipient Input */}
      <div>
        <label htmlFor='recipient' className='block text-sm font-medium text-gray-700'>
          Doa Ditujukan Untuk
        </label>
        <div className='mt-1'>
          <select
            id='recipient'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
          >
            <option value='self'>Diri Sendiri</option>
            <option value='other'>Orang Lain</option>
          </select>
        </div>
      </div>

      {/* Custom Recipient (conditional) */}
      {recipient === 'other' && (
        <div>
          <label htmlFor='customRecipient' className='block text-sm font-medium text-gray-700'>
            Nama/Sebutan Penerima Doa
          </label>
          <div className='mt-1'>
            <input
              type='text'
              id='customRecipient'
              placeholder='Misalnya: anak saya, orang tua saya'
              value={customRecipient}
              onChange={(e) => setCustomRecipient(e.target.value)}
              required
              className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
            />
          </div>
        </div>
      )}

      {/* Specific Situation */}
      <div>
        <label htmlFor='situation' className='block text-sm font-medium text-gray-700'>
          Situasi Spesifik (Opsional)
        </label>
        <div className='mt-1'>
          <input
            type='text'
            id='situation'
            placeholder='Misalnya: menjelang ujian akhir, memulai usaha baru'
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
          />
        </div>
      </div>

      {/* Language Style */}
      <div>
        <label htmlFor='language' className='block text-sm font-medium text-gray-700'>
          Gaya Bahasa
        </label>
        <div className='mt-1'>
          <select
            id='language'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
          >
            <option value='simple'>Sederhana</option>
            <option value='formal'>Formal</option>
          </select>
        </div>
      </div>

      {/* Prayer Length */}
      <div>
        <label htmlFor='length' className='block text-sm font-medium text-gray-700'>
          Panjang Doa
        </label>
        <div className='mt-1'>
          <select
            id='length'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border'
          >
            <option value='short'>Singkat</option>
            <option value='medium'>Sedang</option>
            <option value='long'>Panjang</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type='submit'
          disabled={isLoading || !intention.trim()}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
            ${
              isLoading || !intention.trim()
                ? 'bg-green-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
            }`}
        >
          {isLoading ? 'Menyusun Doa...' : 'Buat Doa'}
        </button>
      </div>
    </form>
  );
};

export default DoaForm;
