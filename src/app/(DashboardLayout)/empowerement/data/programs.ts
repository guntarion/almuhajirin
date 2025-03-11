// src/app/(DashboardLayout)/kelola-inovasi/empowerment/data/programs.ts

import { Program } from './types';

export const programs: Program[] = [
  {
    id: 'dt-01',
    title: 'Design Thinking Fundamentals',
    description:
      'Program ini memperkenalkan metodologi design thinking untuk memecahkan masalah secara kreatif dan berinovasi dengan berfokus pada kebutuhan pengguna.',
    deliveryMethod: 'online-zoom',
    duration: '3 days',
    level: 'beginner',
    categories: ['design-thinking'],
    thumbnailImage: '/images/programs/design-thinking.jpg',
    benefits: [
      'Memahami prinsip dasar design thinking',
      'Mengidentifikasi kebutuhan pengguna dengan tepat',
      'Menerapkan proses iterasi untuk penyempurnaan solusi',
      'Mengembangkan prototype sederhana',
    ],
    targetAudience: [
      'Karyawan yang ingin memulai perjalanan inovasi',
      'Tim operasional yang ingin meningkatkan proses',
      'Supervisor yang membimbing tim inovasi',
    ],
    schedule: {
      startDate: '2024-04-15',
      endDate: '2024-04-17',
      sessions: [
        {
          date: '2024-04-15',
          startTime: '09:00',
          endTime: '12:00',
          topic: 'Pengenalan Design Thinking & Empathize',
        },
        {
          date: '2024-04-15',
          startTime: '13:00',
          endTime: '16:00',
          topic: 'Define Problem & Ideate',
        },
        {
          date: '2024-04-16',
          startTime: '09:00',
          endTime: '16:00',
          topic: 'Prototype Development',
        },
        {
          date: '2024-04-17',
          startTime: '09:00',
          endTime: '16:00',
          topic: 'Testing & Iterasi',
        },
      ],
    },
    capacity: 30,
    facilitators: ['mentor-1', 'mentor-3'],
    innovationCategories: ['Optimasi Proses Bisnis', 'Aplikasi'],
    skillsGained: ['User Research', 'Problem Definition', 'Ideation', 'Prototyping', 'User Testing'],
  },
  {
    id: 'tech-01',
    title: 'Technical Innovation for Power Plants',
    description:
      'Program ini fokus pada pengembangan inovasi teknis di lingkungan pembangkit listrik, dengan penekanan pada efisiensi operasional dan optimasi kinerja.',
    deliveryMethod: 'blended',
    duration: '4 weeks',
    level: 'intermediate',
    categories: ['technical-innovation', 'implementation'],
    thumbnailImage: '/images/programs/technical-innovation.jpg',
    prerequisites: ['Pengalaman minimal 2 tahun di operasi pembangkit', 'Pemahaman dasar tentang proses inovasi'],
    benefits: [
      'Mengidentifikasi area potensial untuk inovasi teknis',
      'Mengembangkan solusi yang meningkatkan efisiensi operasional',
      'Memahami proses validasi dan implementasi inovasi teknis',
      'Mengevaluasi dampak inovasi terhadap kinerja pembangkit',
    ],
    targetAudience: ['Engineer pembangkit', 'Supervisor teknis', 'Tim pemeliharaan'],
    schedule: {
      startDate: '2024-05-10',
      endDate: '2024-06-07',
    },
    capacity: 25,
    facilitators: ['mentor-2', 'mentor-5'],
    innovationCategories: ['Technical Supporting', 'Pembangkit', 'Energi Baru Terbarukan'],
    skillsGained: ['Technical Problem Solving', 'Root Cause Analysis', 'Experimental Design', 'Performance Measurement'],
  },
  {
    id: 'biz-01',
    title: 'Business Model Innovation & Beyond kWh',
    description:
      'Program ini mengajarkan bagaimana mengembangkan model bisnis inovatif untuk menciptakan pendapatan di luar model bisnis konvensional pembangkit listrik.',
    deliveryMethod: 'online-zoom',
    duration: '2 days',
    level: 'advanced',
    categories: ['business-model'],
    thumbnailImage: '/images/programs/business-model.jpg',
    benefits: [
      'Memahami konsep Beyond kWh dan diversifikasi pendapatan',
      'Mengidentifikasi peluang bisnis dari aset dan kapabilitas yang ada',
      'Mengembangkan proposisi nilai yang kuat',
      'Merancang model bisnis yang layak dan berkelanjutan',
    ],
    targetAudience: ['Manager unit bisnis', 'Tim pengembangan bisnis', 'Inovator dengan inovasi berpotensi komersial'],
    schedule: {
      startDate: '2024-04-25',
      endDate: '2024-04-26',
    },
    capacity: 20,
    facilitators: ['mentor-4', 'mentor-6'],
    innovationCategories: ['Optimasi Proses Bisnis', 'Breakthrough'],
    skillsGained: ['Business Model Canvas', 'Value Proposition Design', 'Market Analysis', 'Financial Modeling'],
  },
  {
    id: 'sl-01',
    title: 'Dasar-dasar Inovasi di PLN',
    description:
      'Modul pembelajaran mandiri yang memberikan pemahaman tentang ekosistem inovasi di PLN, proses inovasi, dan bagaimana memulai proyek inovasi.',
    deliveryMethod: 'online-self-learning',
    duration: 'self-paced (est. 6 hours)',
    level: 'beginner',
    categories: ['design-thinking', 'leadership'],
    thumbnailImage: '/images/programs/innovation-basics.jpg',
    benefits: [
      'Memahami ekosistem inovasi di PLN',
      'Mengenal kategori dan contoh inovasi yang berhasil',
      'Memahami proses pengajuan dan pengembangan inovasi',
      'Mengenal sumber daya yang tersedia untuk inovator',
    ],
    targetAudience: ['Karyawan baru', 'Karyawan yang belum terlibat dalam inovasi', 'Semua karyawan yang ingin menyegarkan pengetahuan'],
    capacity: 999,
    facilitators: [],
    innovationCategories: ['Technical Supporting', 'Pembangkit', 'Optimasi Proses Bisnis', 'Energi Baru Terbarukan', 'Aplikasi', 'Breakthrough'],
    skillsGained: ['Innovation Fundamentals', 'PLN Innovation Ecosystem'],
  },
  {
    id: 'imp-01',
    title: 'Implementation Excellence: From Prototype to Scale',
    description:
      'Program intensif yang mengajarkan bagaimana mengimplementasikan inovasi dari tahap prototype hingga penerapan skala penuh di berbagai unit.',
    deliveryMethod: 'blended',
    duration: '6 weeks',
    level: 'advanced',
    categories: ['implementation', 'scaling'],
    thumbnailImage: '/images/programs/implementation.jpg',
    prerequisites: ['Memiliki prototype inovasi yang siap implementasi', 'Pemahaman dasar manajemen proyek'],
    benefits: [
      'Mengembangkan rencana implementasi yang komprehensif',
      'Mengelola risiko dan tantangan implementasi',
      'Mengukur kesuksesan implementasi',
      'Strategi untuk adopsi dan skalabilitas',
    ],
    targetAudience: ['Tim implementasi inovasi', 'Project manager', 'Inovator dengan inovasi yang siap diimplementasikan'],
    schedule: {
      startDate: '2024-06-15',
      endDate: '2024-07-27',
    },
    capacity: 15,
    facilitators: ['mentor-2', 'mentor-7'],
    innovationCategories: ['Technical Supporting', 'Pembangkit', 'Optimasi Proses Bisnis', 'Aplikasi'],
    skillsGained: ['Project Management', 'Change Management', 'Risk Management', 'Stakeholder Management', 'Performance Measurement'],
  },
];

export const getRecommendedPrograms = (userId: string, innovatorLevel: string, interests: string[]): Program[] => {
  // In a real implementation, this would use ML or rule-based logic
  // For now, simply return some filtered programs

  if (innovatorLevel === 'Novice' || innovatorLevel === 'Explorer') {
    return programs.filter((p) => p.level === 'beginner' || p.level === 'intermediate');
  } else if (innovatorLevel === 'Creator') {
    return programs.filter((p) => p.level === 'intermediate');
  } else {
    return programs.filter((p) => p.level === 'advanced' || p.level === 'expert');
  }
};

export const getPopularPrograms = (): Program[] => {
  // In a real implementation, this would be based on enrollment data
  return programs.slice(0, 3);
};
