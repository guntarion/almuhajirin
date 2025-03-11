// src/app/(MainBody)/ideasi/lookup-idea/components/CariIdeInovasi.tsx
'use client';

import React, { useState } from 'react';
import { Copy, User, PanelRightOpen, PanelRightClose } from 'lucide-react';
import { toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown';
import { contohIdeInovasiList } from '../../../../../Data/IdeInovasi/contohIdeInovasi';
import PertanyaanInsightful from './PertanyaanInsightful';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CariIdeInovasi = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/idea-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          ideas: contohIdeInovasiList,
        }),
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      const newAssistantMessage: Message = {
        role: 'assistant',
        content: '',
      };

      setMessages((prev) => [...prev, newAssistantMessage]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(5));
              if (data.content) {
                assistantMessage += data.content;
                setMessages((prev) => {
                  const updatedMessages = [...prev];
                  updatedMessages[updatedMessages.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage,
                  };
                  return updatedMessages;
                });
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, there was an error processing your request.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className='flex h-[700px]'>
      {/* Chat Area */}
      <div className={`flex flex-col ${showSuggestions ? 'w-3/5' : 'w-full'} transition-all duration-300 ease-in-out`}>
        <div className='flex-1 overflow-y-auto p-4 space-y-4'>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
              <div className={`flex max-w-[80%] gap-3 ${message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center
                              ${message.role === 'assistant' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-700'}`}
                >
                  {message.role === 'assistant' ? (
                    <img src='/avatars/dewi.png' alt='AI Assistant' className='w-10 h-10 object-cover' />
                  ) : (
                    <User className='w-6 h-6 text-gray-600 dark:text-gray-300' />
                  )}
                </div>
                <div
                  className={`relative p-4 rounded-lg
                              ${
                                message.role === 'assistant'
                                  ? 'bg-blue-50 dark:bg-blue-900 text-gray-800 dark:text-gray-100'
                                  : 'bg-blue-500 dark:bg-blue-600 text-white'
                              }`}
                >
                  <div className='prose dark:prose-invert max-w-none'>
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                  {message.role === 'assistant' && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(message.content);
                        toast.success('Copied to clipboard');
                      }}
                      className='absolute top-2 right-2 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 
                               transition-colors duration-200'
                      title='Copy to clipboard'
                    >
                      <Copy size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className='text-center text-gray-500 dark:text-gray-400 py-8'>
              Gunakan sidebar untuk menemukan pertanyaan insightful atau tanyakan langsung tentang database ide inovasi!
            </div>
          )}
        </div>

        <div className='p-4 border-t border-gray-200 dark:border-gray-700'>
          <div className='flex gap-2'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder='Type your question about innovation ideas...'
              disabled={isLoading}
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                       disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed'
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`px-4 py-2 rounded-md text-white font-medium transition-colors duration-200
                       ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            <button
              onClick={() => setShowSuggestions(!showSuggestions)}
              className='p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-200 
                       dark:hover:bg-gray-600 transition-colors duration-200'
              title={showSuggestions ? 'Hide suggestions' : 'Show suggestions'}
            >
              {showSuggestions ? <PanelRightClose size={20} /> : <PanelRightOpen size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Suggestions Panel */}
      {showSuggestions && (
        <div className='w-2/5 border-l border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out'>
          <PertanyaanInsightful onSelectQuestion={handleSelectQuestion} />
        </div>
      )}
    </div>
  );
};

export default CariIdeInovasi;
