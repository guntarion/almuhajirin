// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/components/DiscussionSection.tsx
/**
 * Component for displaying and adding discussions about an innovation
 * Supports threaded comments and replies
 */

'use client';

import React, { useState } from 'react';
import { Comment } from '../data/types';
import { FaUser, FaReply, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

interface DiscussionSectionProps {
  comments: Comment[];
  innovationId: string;
}

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ comments, innovationId }) => {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  // Mock user data for the current user
  const currentUser = {
    id: 'current-user',
    name: 'Pengguna Aktif',
    unit: 'PLTU Sample',
    role: 'Operator',
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the comment to an API
    alert(`Mengirim komentar: ${newComment}`);
    setNewComment('');
  };

  const handleReplySubmit = (commentId: string, e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the reply to an API
    alert(`Mengirim balasan untuk komentar ${commentId}: ${replyContent}`);
    setReplyContent('');
    setReplyingTo(null);
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
      <h3 className='text-xl font-semibold mb-6 text-gray-900 dark:text-white'>Diskusi & Tanya Jawab</h3>

      {/* Comment Form */}
      <div className='mb-8'>
        <form onSubmit={handleCommentSubmit}>
          <div className='mb-4'>
            <label htmlFor='comment' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Tambahkan pertanyaan atau komentar
            </label>
            <textarea
              id='comment'
              rows={4}
              className='w-full px-3 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
              placeholder='Tulis pertanyaan atau komentar Anda...'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors'>
              Kirim Komentar
            </button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className='space-y-6'>
        {comments.length === 0 ? (
          <div className='text-center py-8 text-gray-500 dark:text-gray-400'>Belum ada diskusi untuk inovasi ini. Jadilah yang pertama!</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className='border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              {/* Main Comment */}
              <div className='mb-4'>
                <div className='flex items-start space-x-3'>
                  <div className='flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center'>
                    <FaUser className='text-gray-600 dark:text-gray-400' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center mb-1'>
                      <h4 className='text-sm font-medium text-gray-900 dark:text-white'>{comment.userName}</h4>
                      <span className='ml-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded'>
                        {comment.userRole}
                      </span>
                    </div>
                    <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2'>
                      <FaBuilding className='mr-1' />
                      <span className='mr-3'>{comment.userUnit}</span>
                      <FaCalendarAlt className='mr-1' />
                      <span>{formatDate(comment.timestamp)}</span>
                    </div>
                    <p className='text-sm text-gray-700 dark:text-gray-300'>{comment.content}</p>
                    <button
                      className='mt-2 text-xs text-blue-600 dark:text-blue-400 flex items-center hover:underline'
                      onClick={() => setReplyingTo(comment.id)}
                    >
                      <FaReply className='mr-1' /> Balas
                    </button>
                  </div>
                </div>
              </div>

              {/* Reply Form */}
              {replyingTo === comment.id && (
                <div className='ml-12 mb-4'>
                  <form onSubmit={(e) => handleReplySubmit(comment.id, e)}>
                    <div className='mb-3'>
                      <textarea
                        rows={3}
                        className='w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700'
                        placeholder='Tulis balasan Anda...'
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        required
                      />
                    </div>
                    <div className='flex justify-end space-x-2'>
                      <button type='button' className='text-gray-600 dark:text-gray-300 text-sm hover:underline' onClick={() => setReplyingTo(null)}>
                        Batal
                      </button>
                      <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded transition-colors'>
                        Kirim Balasan
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className='ml-12 space-y-4 mt-4'>
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className='bg-gray-50 dark:bg-gray-700 rounded-lg p-3'>
                      <div className='flex items-start space-x-3'>
                        <div className='flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center'>
                          <FaUser className='text-gray-600 dark:text-gray-400 text-sm' />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <div className='flex items-center mb-1'>
                            <h4 className='text-sm font-medium text-gray-900 dark:text-white'>{reply.userName}</h4>
                            <span className='ml-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-0.5 rounded'>
                              {reply.userRole}
                            </span>
                          </div>
                          <div className='flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2'>
                            <FaBuilding className='mr-1' />
                            <span className='mr-3'>{reply.userUnit}</span>
                            <FaCalendarAlt className='mr-1' />
                            <span>{formatDate(reply.timestamp)}</span>
                          </div>
                          <p className='text-sm text-gray-700 dark:text-gray-300'>{reply.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiscussionSection;
