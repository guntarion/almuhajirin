// src/app/(DashboardLayout)/testing-page/qwen-ai/page.tsx
// QwenAI support page that provides AI-powered topic exploration

'use client';

import { useState, useRef, useEffect } from 'react';
import CommonBreadcrumb from '@/app/components/shared/CommonBreadcrumb';
import CommonCardHeader from '@/app/components/shared/CommonCardHeader';

const QwenAiPage = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  // Function to construct the full prompt
  const constructPrompt = (input: string) => {
    return `Tell me 10 things related with ${input}`;
  };

  // Handle form submission and API call
  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const fullPrompt = constructPrompt(userInput.trim());
      console.log('Sending prompt:', fullPrompt);

      const response = await fetch('/api/aiApi/qwenAIApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userPrompt: fullPrompt,
          model: 'qwen-turbo',
          temperature: 0.7,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        if (contentType?.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'API request failed');
        } else {
          const errorText = await response.text();
          console.error('Non-JSON error response:', errorText);
          throw new Error('Received invalid response from server');
        }
      }

      // Handle streaming response
      if (contentType?.includes('text/event-stream')) {
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        while (reader) {
          const { value, done } = await reader.read();
          if (done) break;

          const text = decoder.decode(value);
          const lines = text.split('\n');

          lines.forEach((line) => {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                if (data.error) {
                  setResponse((prev) => prev + `\nError: ${data.error}`);
                } else if (data.content) {
                  setResponse((prev) => prev + (data.content || ''));
                }
              } catch (e) {
                console.error('Error parsing JSON from stream:', e, 'Line:', line);
              }
            }
          });
        }
      } else {
        // Handle non-streaming response
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setResponse(data.content || JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse(`Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom of response
  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <>
      <CommonBreadcrumb pageTitle='QWEN AI Support Page' parent='AI Support' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='col-span-1'>
            <div className='rounded-lg bg-white dark:bg-gray-800 shadow-md'>
              <CommonCardHeader
                heading='QWEN AI Support'
                subHeading={[{ text: 'Powered by Alibaba Cloud QWEN model' }, { text: 'Enter a topic to get 10 related things' }]}
              />
              <div className='p-6'>
                <div className='mb-4'>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder='Enter a topic (e.g., "artificial intelligence", "space exploration")'
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                             placeholder-gray-500 dark:placeholder-gray-400'
                  />
                  <small className='block mt-1 text-gray-500 dark:text-gray-400'>The AI will generate 10 things related to your topic</small>
                </div>
                <div className='mb-4'>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !userInput.trim()}
                    className={`px-4 py-2 rounded-md text-white font-medium
                              ${
                                isLoading || !userInput.trim() ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                              } transition-colors duration-200`}
                  >
                    {isLoading ? (
                      <div className='flex items-center'>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      'Get Related Things'
                    )}
                  </button>
                </div>
                {response && (
                  <div
                    ref={responseRef}
                    className='p-4 border border-gray-200 dark:border-gray-700 rounded-md 
                             bg-gray-50 dark:bg-gray-900 
                             max-h-[400px] overflow-y-auto
                             whitespace-pre-wrap
                             text-gray-800 dark:text-gray-200'
                  >
                    {response}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QwenAiPage;
