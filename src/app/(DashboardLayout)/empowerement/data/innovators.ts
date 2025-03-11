// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/innovators.ts

import { Innovator, InnovatorLevel } from './types';

export const innovators: Innovator[] = [
  {
    userId: 'user-1',
    name: 'Ahmad Fauzi',
    unit: 'PLTU Jawa Unit 3',
    position: 'Senior Engineer',
    joinDate: '2018-05-10',
    profileImage: '/images/innovator-ahmad.jpg',
    level: 'Champion',
    xp: 7850,
    totalPoints: 4320,
    achievements: [
      { userId: 'user-1', achievementId: 'ach-1', dateEarned: '2022-03-15' },
      { userId: 'user-1', achievementId: 'ach-3', dateEarned: '2022-07-22' },
      { userId: 'user-1', achievementId: 'ach-5', dateEarned: '2023-01-10' },
      { userId: 'user-1', achievementId: 'ach-8', dateEarned: '2023-06-18' },
    ],
    skills: [
      { skillName: 'Design Thinking', proficiencyLevel: 4 },
      { skillName: 'Project Management', proficiencyLevel: 5 },
      { skillName: 'Technical Innovation', proficiencyLevel: 5 },
      { skillName: 'Digital Solutions', proficiencyLevel: 4 },
    ],
    contributions: {
      ideations: 12,
      implementations: 5,
      collaborations: 8,
      mentorships: 2,
    },
    innovationCategories: ['Aplikasi', 'Optimasi Proses Bisnis'],
    biography:
      'Ahmad adalah inovator berpengalaman yang telah mengembangkan beberapa solusi digital yang telah diimplementasikan di berbagai unit PLN NP Services. Fokus utamanya adalah pada digitalisasi proses untuk meningkatkan efisiensi operasional.',
  },
  {
    userId: 'user-2',
    name: 'Siti Amalia',
    unit: 'PLTU Jawa Unit 3',
    position: 'Environmental Specialist',
    joinDate: '2019-08-22',
    profileImage: '/images/innovator-siti.jpg',
    level: 'Creator',
    xp: 4250,
    totalPoints: 2180,
    achievements: [
      { userId: 'user-2', achievementId: 'ach-2', dateEarned: '2022-05-10' },
      { userId: 'user-2', achievementId: 'ach-4', dateEarned: '2022-11-15' },
      { userId: 'user-2', achievementId: 'ach-7', dateEarned: '2023-03-22' },
    ],
    skills: [
      { skillName: 'Environmental Management', proficiencyLevel: 5 },
      { skillName: 'Waste Utilization', proficiencyLevel: 5 },
      { skillName: 'Sustainability Innovation', proficiencyLevel: 4 },
      { skillName: 'Project Management', proficiencyLevel: 3 },
    ],
    contributions: {
      ideations: 7,
      implementations: 3,
      collaborations: 5,
      mentorships: 0,
    },
    innovationCategories: ['Energi Baru Terbarukan', 'Pembangkit'],
    biography:
      'Siti fokus pada inovasi yang berkaitan dengan pengelolaan lingkungan dan pemanfaatan limbah pembangkit. Inovasinya telah membantu beberapa unit PLTU untuk mencapai status zero waste dan menghasilkan pendapatan tambahan dari pemanfaatan limbah.',
  },
  {
    userId: 'user-3',
    name: 'Budi Santoso',
    unit: 'PLTU Banten Unit 2',
    position: 'System Engineer',
    joinDate: '2017-03-12',
    profileImage: '/images/innovator-budi.jpg',
    level: 'Maestro',
    xp: 9750,
    totalPoints: 5830,
    achievements: [
      { userId: 'user-3', achievementId: 'ach-1', dateEarned: '2021-06-10' },
      { userId: 'user-3', achievementId: 'ach-3', dateEarned: '2021-09-05' },
      { userId: 'user-3', achievementId: 'ach-5', dateEarned: '2022-02-18' },
      { userId: 'user-3', achievementId: 'ach-6', dateEarned: '2022-07-30' },
      { userId: 'user-3', achievementId: 'ach-8', dateEarned: '2022-11-12' },
      { userId: 'user-3', achievementId: 'ach-10', dateEarned: '2023-04-22' },
    ],
    skills: [
      { skillName: 'System Engineering', proficiencyLevel: 5 },
      { skillName: 'IoT Implementation', proficiencyLevel: 5 },
      { skillName: 'Data Analytics', proficiencyLevel: 4 },
      { skillName: 'Automation', proficiencyLevel: 5 },
      { skillName: 'Mentoring', proficiencyLevel: 4 },
    ],
    contributions: {
      ideations: 18,
      implementations: 10,
      collaborations: 12,
      mentorships: 5,
    },
    innovationCategories: ['Technical Supporting', 'Pembangkit', 'Aplikasi'],
    biography:
      'Budi adalah inovator senior yang telah mengembangkan berbagai solusi monitoring dan otomasi untuk pembangkit. Inovasinya telah diimplementasikan di lebih dari 10 unit pembangkit dan telah menghasilkan penghematan operasional yang signifikan.',
  },
  // Add more innovators...
];

export const getInnovatorById = (userId: string): Innovator | undefined => {
  return innovators.find((innovator) => innovator.userId === userId);
};

export const getTopInnovators = (limit: number = 10): Innovator[] => {
  return [...innovators].sort((a, b) => b.totalPoints - a.totalPoints).slice(0, limit);
};

export const getXpForNextLevel = (currentLevel: InnovatorLevel): number => {
  switch (currentLevel) {
    case 'Novice':
      return 2000;
    case 'Explorer':
      return 4000;
    case 'Creator':
      return 7000;
    case 'Champion':
      return 10000;
    case 'Maestro':
      return Infinity; // Max level
    default:
      return 1000;
  }
};
