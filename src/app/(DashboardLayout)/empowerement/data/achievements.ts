// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/achievements.ts

import { Achievement } from './types';

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Ideator',
    description: 'Menghasilkan 5 ide inovasi yang divalidasi oleh pengelola inovasi',
    category: 'ideation',
    points: 100,
    badgeImage: '/images/badges/ideator-badge.png',
    requirements: 'Submit 5 ide inovasi yang divalidasi',
    tier: 'bronze',
  },
  {
    id: 'ach-2',
    title: 'Problem Solver',
    description: 'Mengidentifikasi dan memberikan solusi untuk 3 masalah operasional',
    category: 'ideation',
    points: 150,
    badgeImage: '/images/badges/problem-solver-badge.png',
    requirements: 'Memecahkan 3 masalah operasional dengan inovasi',
    tier: 'silver',
  },
  {
    id: 'ach-3',
    title: 'Implementer',
    description: 'Berhasil mengimplementasikan inovasi di unit sendiri',
    category: 'implementation',
    points: 200,
    badgeImage: '/images/badges/implementer-badge.png',
    requirements: 'Implementasi inovasi dengan dokumentasi hasil',
    tier: 'silver',
  },
  {
    id: 'ach-4',
    title: 'Knowledge Sharer',
    description: 'Membagikan pengetahuan dan pengalaman melalui 5 sesi berbagi',
    category: 'sharing',
    points: 150,
    badgeImage: '/images/badges/knowledge-sharer-badge.png',
    requirements: 'Memimpin 5 sesi knowledge sharing',
    tier: 'bronze',
  },
  {
    id: 'ach-5',
    title: 'Continuous Learner',
    description: 'Menyelesaikan 10 program pengembangan kompetensi inovasi',
    category: 'learning',
    points: 200,
    badgeImage: '/images/badges/continuous-learner-badge.png',
    requirements: 'Menyelesaikan 10 program pembelajaran',
    tier: 'gold',
  },
  {
    id: 'ach-6',
    title: 'Mentor',
    description: 'Menjadi mentor untuk 3 inovator baru',
    category: 'mentoring',
    points: 250,
    badgeImage: '/images/badges/mentor-badge.png',
    requirements: 'Mentoring 3 inovator hingga implementasi',
    tier: 'gold',
  },
  {
    id: 'ach-7',
    title: 'Collaborator',
    description: 'Berkolaborasi dalam 5 proyek inovasi lintas unit',
    category: 'collaboration',
    points: 200,
    badgeImage: '/images/badges/collaborator-badge.png',
    requirements: 'Partisipasi aktif dalam 5 proyek kolaboratif',
    tier: 'silver',
  },
  {
    id: 'ach-8',
    title: 'Impact Creator',
    description: 'Inovasi yang diimplementasikan memberikan dampak finansial terukur',
    category: 'implementation',
    points: 300,
    badgeImage: '/images/badges/impact-creator-badge.png',
    requirements: 'Inovasi dengan ROI terukur >100%',
    tier: 'platinum',
  },
  {
    id: 'ach-9',
    title: 'Design Thinker',
    description: 'Menerapkan metodologi design thinking dalam 3 proyek inovasi',
    category: 'ideation',
    points: 150,
    badgeImage: '/images/badges/design-thinker-badge.png',
    requirements: 'Dokumentasi proses design thinking lengkap',
    tier: 'silver',
  },
  {
    id: 'ach-10',
    title: 'Innovation Champion',
    description: 'Menjadi champion inovasi di unit dan mendukung 10+ inovator',
    category: 'mentoring',
    points: 350,
    badgeImage: '/images/badges/innovation-champion-badge.png',
    requirements: 'Memimpin ekosistem inovasi di unit',
    tier: 'platinum',
  },
];

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find((achievement) => achievement.id === id);
};

export const getAchievementsByCategory = (category: string): Achievement[] => {
  return achievements.filter((achievement) => achievement.category === category);
};

export const getUserUnlockedAchievements = (userAchievements: string[]): Achievement[] => {
  return achievements.filter((achievement) => userAchievements.includes(achievement.id));
};

export const getUserNextAchievements = (userAchievements: string[], innovatorLevel: string): Achievement[] => {
  // Filter achievements that the user hasn't unlocked yet
  const unlockedIds = userAchievements;
  const remainingAchievements = achievements.filter((a) => !unlockedIds.includes(a.id));

  // In a real implementation, this would be more sophisticated
  // For now, just recommend based on tier
  if (innovatorLevel === 'Novice' || innovatorLevel === 'Explorer') {
    return remainingAchievements.filter((a) => a.tier === 'bronze').slice(0, 3);
  } else if (innovatorLevel === 'Creator') {
    return remainingAchievements.filter((a) => a.tier === 'silver').slice(0, 3);
  } else if (innovatorLevel === 'Champion') {
    return remainingAchievements.filter((a) => a.tier === 'gold').slice(0, 3);
  } else {
    return remainingAchievements.filter((a) => a.tier === 'platinum').slice(0, 3);
  }
};
