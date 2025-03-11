// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/mentors.ts

import { Mentor } from './types';

export const mentors: Mentor[] = [
  {
    userId: 'mentor-1',
    name: 'Dr. Hendra Wijaya',
    title: 'Innovation Director',
    honoraryTitle: 'Master of Design Thinking',
    unit: 'Head Office',
    position: 'Director of Innovation & Digital Transformation',
    profileImage: '/images/mentors/hendra-wijaya.jpg',
    specializations: ['Design Thinking', 'Leadership', 'Digital Transformation'],
    biography:
      'Dr. Hendra adalah pemimpin dalam transformasi digital dan inovasi di PLN NP Services dengan pengalaman lebih dari 20 tahun dalam industri energi. Beliau telah membimbing lebih dari 30 proyek inovasi yang berhasil diimplementasikan.',
    expertise: ['Digital Transformation Strategy', 'Corporate Innovation Systems', 'Business Model Innovation', 'Design Thinking Facilitation'],
    certifications: [
      'Certified Design Thinking Expert (IDEO)',
      'Digital Transformation Professional (MIT)',
      'Executive Leadership (Harvard Business School)',
    ],
    mentees: 15,
    programsFacilitated: ['dt-01', 'biz-01'],
    innovationCategories: ['Breakthrough', 'Aplikasi', 'Optimasi Proses Bisnis'],
    contactEmail: 'hendra.wijaya@plnnpservices.co.id',
    availableForMentoring: true,
  },
  {
    userId: 'mentor-2',
    name: 'Ir. Sutrisno Pratama',
    title: 'Technical Innovation Specialist',
    honoraryTitle: 'Technical Excellence Advocate',
    unit: 'Engineering Center',
    position: 'Senior Manager, Engineering Excellence',
    profileImage: '/images/mentors/sutrisno-pratama.jpg',
    specializations: ['Technical Innovation', 'Project Management', 'Sustainability Innovation'],
    biography:
      'Ir. Sutrisno adalah pakar dalam inovasi teknis untuk pembangkit listrik dengan spesialisasi dalam optimasi operasional dan solusi berkelanjutan. Beliau telah mempelopori beberapa inovasi teknis yang telah meningkatkan efisiensi operasional secara signifikan.',
    expertise: ['Power Plant Optimization', 'Sustainable Solutions for Power Generation', 'Technical Problem Solving', 'Engineering Management'],
    certifications: ['Professional Engineer (PE)', 'Certified Project Management Professional (PMP)', 'Six Sigma Black Belt'],
    mentees: 12,
    programsFacilitated: ['tech-01', 'imp-01'],
    innovationCategories: ['Technical Supporting', 'Pembangkit', 'Energi Baru Terbarukan'],
    contactEmail: 'sutrisno.pratama@plnnpservices.co.id',
    availableForMentoring: true,
  },
  {
    userId: 'mentor-3',
    name: 'Rini Kusuma, M.Sc.',
    title: 'Design Thinking Facilitator',
    honoraryTitle: 'Innovation Catalyst',
    unit: 'Innovation Center',
    position: 'Manager, Innovation Programs',
    profileImage: '/images/mentors/rini-kusuma.jpg',
    specializations: ['Design Thinking', 'Leadership', 'Change Management'],
    biography:
      'Rini adalah fasilitator design thinking bersertifikat yang telah memimpin lebih dari 50 workshop design thinking di berbagai unit PLN. Pendekatannya yang praktis dan berorientasi hasil telah membantu banyak tim mengembangkan solusi inovatif untuk tantangan kompleks.',
    expertise: ['Design Thinking Facilitation', 'Innovation Workshop Design', 'User-Centered Design', 'Creative Problem Solving'],
    certifications: ['LUMA Institute Certified Facilitator', 'Stanford d.school Design Thinking Coach', 'Certified Scrum Master'],
    mentees: 20,
    programsFacilitated: ['dt-01'],
    innovationCategories: ['Optimasi Proses Bisnis', 'Aplikasi'],
    contactEmail: 'rini.kusuma@plnnpservices.co.id',
    availableForMentoring: true,
  },
  // Add more mentors...
];

export const getMentorById = (userId: string): Mentor | undefined => {
  return mentors.find((mentor) => mentor.userId === userId);
};

export const getMentorsBySpecialization = (specialization: string): Mentor[] => {
  return mentors.filter((mentor) => mentor.specializations.includes(specialization as any) && mentor.availableForMentoring);
};
