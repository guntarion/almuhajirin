// Modify the AchievementBadge.tsx component to use Font Awesome icons
// The original code is preserved, only the rendering part is modified

'use client';

import React from 'react';
import { Achievement } from '../data/types';
import {
  FaAward,
  FaTrophy,
  FaLock,
  FaLightbulb,
  FaPuzzlePiece,
  FaTools,
  FaBook,
  FaGraduationCap,
  FaUserFriends,
  FaChartLine,
  FaStar,
} from 'react-icons/fa';

interface AchievementBadgeProps {
  achievement: Achievement;
  isUnlocked?: boolean;
  dateEarned?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement, isUnlocked = false, dateEarned }) => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'silver':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'platinum':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  // Map achievement IDs to appropriate Font Awesome icons
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'ach-1':
        return <FaLightbulb />; // Ideator
      case 'ach-2':
        return <FaPuzzlePiece />; // Problem Solver
      case 'ach-3':
        return <FaTools />; // Implementer
      case 'ach-4':
        return <FaBook />; // Knowledge Sharer
      case 'ach-5':
        return <FaGraduationCap />; // Continuous Learner
      case 'ach-6':
        return <FaUserFriends />; // Mentor
      case 'ach-7':
        return <FaUserFriends />; // Collaborator
      case 'ach-8':
        return <FaChartLine />; // Impact Creator
      case 'ach-9':
        return <FaLightbulb />; // Design Thinker
      case 'ach-10':
        return <FaStar />; // Innovation Champion
      default:
        return <FaAward />; // Default
    }
  };

  // Get colors for achievement icons based on tier
  const getIconColor = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return 'text-amber-600';
      case 'silver':
        return 'text-gray-400';
      case 'gold':
        return 'text-yellow-500';
      case 'platinum':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div
      className={`border rounded-lg overflow-hidden ${
        isUnlocked ? 'border-blue-200 dark:border-blue-800' : 'border-gray-200 dark:border-gray-700 opacity-70'
      }`}
    >
      <div className={`p-4 flex items-center justify-center ${isUnlocked ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-700'}`}>
        <div className='w-16 h-16 flex items-center justify-center'>
          {isUnlocked ? (
            <div className={`text-5xl ${getIconColor(achievement.tier)}`}>{getAchievementIcon(achievement.id)}</div>
          ) : (
            <div className='relative'>
              <div className='text-5xl text-gray-300 dark:text-gray-600'>{getAchievementIcon(achievement.id)}</div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <FaLock className='text-xl text-gray-500 dark:text-gray-400' />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-start mb-1'>
          <h3 className={`font-medium ${isUnlocked ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{achievement.title}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full ${getTierColor(achievement.tier)}`}>
            {achievement.tier.charAt(0).toUpperCase() + achievement.tier.slice(1)}
          </span>
        </div>

        <p className='text-xs text-gray-600 dark:text-gray-300 mb-2 line-clamp-2'>{achievement.description}</p>

        <div className='flex items-center justify-between text-xs'>
          <span className='text-gray-500 dark:text-gray-400'>{achievement.points} points</span>
          {isUnlocked && dateEarned && (
            <span className='text-green-600 dark:text-green-400 flex items-center'>
              <FaTrophy className='mr-1' />
              Earned {new Date(dateEarned).toLocaleDateString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementBadge;
