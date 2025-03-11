// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/enrollments.ts

import { Enrollment } from './types';

export const enrollments: Enrollment[] = [
  {
    id: 'enroll-1',
    programId: 'dt-01',
    userId: 'user-1',
    status: 'completed',
    enrollmentDate: '2023-01-15',
    completionDate: '2023-01-18',
    feedback: {
      rating: 4.5,
      comment: 'Program yang sangat bermanfaat, memberikan kerangka berpikir yang terstruktur untuk memecahkan masalah dan berinovasi.',
    },
    certificate: {
      issued: true,
      issuedDate: '2023-01-20',
      certificateId: 'CERT-DT-2023-001',
    },
  },
  {
    id: 'enroll-2',
    programId: 'tech-01',
    userId: 'user-1',
    status: 'enrolled',
    enrollmentDate: '2024-03-20',
  },
  {
    id: 'enroll-3',
    programId: 'dt-01',
    userId: 'user-2',
    status: 'completed',
    enrollmentDate: '2023-01-15',
    completionDate: '2023-01-18',
    feedback: {
      rating: 5,
      comment: 'Sangat membantu dalam mengembangkan mindset inovasi. Fasilitator sangat menguasai materi dan memberikan contoh praktis yang relevan.',
    },
    certificate: {
      issued: true,
      issuedDate: '2023-01-20',
      certificateId: 'CERT-DT-2023-002',
    },
  },
  {
    id: 'enroll-4',
    programId: 'biz-01',
    userId: 'user-2',
    status: 'interested',
    enrollmentDate: '2024-03-15',
  },
  {
    id: 'enroll-5',
    programId: 'imp-01',
    userId: 'user-3',
    status: 'enrolled',
    enrollmentDate: '2024-02-28',
  },
  {
    id: 'enroll-6',
    programId: 'sl-01',
    userId: 'user-4',
    status: 'targeted',
    enrollmentDate: '2024-03-01',
  },
  // Add more enrollments...
];

export const getProgramEnrollments = (programId: string): Enrollment[] => {
  return enrollments.filter((enrollment) => enrollment.programId === programId);
};

export const getUserEnrollments = (userId: string): Enrollment[] => {
  return enrollments.filter((enrollment) => enrollment.userId === userId);
};

export const getEnrollmentStats = () => {
  const completed = enrollments.filter((e) => e.status === 'completed').length;
  const active = enrollments.filter((e) => e.status === 'enrolled').length;
  const interested = enrollments.filter((e) => e.status === 'interested').length;
  const targeted = enrollments.filter((e) => e.status === 'targeted').length;

  return {
    completed,
    active,
    interested,
    targeted,
    total: enrollments.length,
  };
};

export const getPopularPrograms = () => {
  const programCounts = enrollments.reduce((acc, enrollment) => {
    const { programId } = enrollment;
    acc[programId] = (acc[programId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Convert to array and sort
  return Object.entries(programCounts)
    .map(([programId, count]) => ({ programId, count }))
    .sort((a, b) => b.count - a.count);
};
