// src/app/(DashboardLayout)/kelola-inovasi/diseminasi/data/innovations.ts
/**
 * Mock data for innovation dissemination platform
 * Contains sample innovations with complete information for display and interaction
 */

import { Inovasi } from './types';

export const innovations: Inovasi[] = [
  {
    id: 'dewasta',
    title: 'Digitalisasi Proses Pengangkutan FABA (Fly Ash dan Bottom Ash) Untuk Mendukung Program Beyond KWh Korporat',
    executiveSummary: [
      'Aplikasi digitalisasi untuk proses administrasi dalam pengangkutan FABA yang mempercepat proses dan meningkatkan efisiensi.',
      'Menggantikan sistem manual dengan sistem digital berbasis web dan aplikasi mobile.',
      'Meningkatkan pendapatan beyond KWh melalui pemanfaatan 100% FABA oleh industri semen.',
    ],
    painPoints: [
      'Proses administrasi pengangkutan FABA masih manual, memakan waktu hingga 1 hari untuk approval.',
      'Tidak ada list antrian truk pengangkut FABA.',
      'Tidak ada informasi real-time tentang level silo untuk ketersediaan FABA.',
      'Belum ada monitoring KIR ijin kendaraan pengangkut FABA.',
      'FABA yang tidak terangkut ditimbun di ash yard, menyebabkan kerugian Rp 800 juta pada 2022.',
    ],
    stakeholders: [
      'Bidang lingkungan PLTU',
      'Manager HAR',
      'Transporter/perusahaan pengangkut',
      'Driver kendaraan pengangkut',
      'Operator pembangkit',
      'Industri pemanfaat FABA (semen dan fiber semen)',
    ],
    solution: [
      'Aplikasi DeWasTa berbasis web dan mobile (Android/iOS) untuk digitalisasi proses pengangkutan FABA.',
      'Sistem terintegrasi antara unit pembangkit, transporter, dan pemanfaat.',
      'Mempercepat proses approval dari 1 hari menjadi 10 menit.',
      'Monitoring real-time level silo dan antrian kendaraan pengangkut.',
    ],
    features: [
      'Dashboard real-time untuk monitoring pengangkutan FABA.',
      'Sistem antrian digital untuk kendaraan pengangkut.',
      'Informasi real-time level silo FABA.',
      'Notifikasi warning untuk kontrak dan KIR kendaraan yang akan kadaluarsa.',
      'Fitur tracking GPS untuk monitoring kendaraan pengangkut.',
    ],
    novelty: [
      'Integrasi sistem antara pembangkit, transporter, dan pemanfaat dalam satu platform.',
      'Implementasi tracking GPS untuk monitoring kendaraan pengangkut.',
      'Sistem antrian digital yang mengoptimalkan proses pengangkutan.',
      'Notifikasi otomatis untuk level silo dan kesiapan FABA untuk dimanfaatkan.',
    ],
    comparativeAnalysis: [
      'Sistem sebelumnya: Manual, menggunakan 300 lembar kertas per bulan, approval 1 hari.',
      'Sistem DeWasTa: Digital, paperless, approval 10 menit, monitoring real-time.',
      'Mengurangi resiko human error dalam proses administrasi.',
      'Menghilangkan potensi double data yang sering terjadi pada sistem manual.',
    ],
    investment: {
      developmentCost: ['Biaya pembuatan aplikasi DeWasTa: Rp 60.000.000,-'],
      requiredResources: ['Tim pengembang aplikasi web dan mobile', 'Tim implementasi dan monitoring dari bidang lingkungan'],
      infrastructure: [
        'Server untuk hosting aplikasi web',
        'Perangkat mobile untuk operator, manager, dan driver',
        'Infrastruktur jaringan di area PLTU',
      ],
    },
    financialBenefits: {
      revenue: [
        'Pendapatan penjualan FABA per 29 Desember 2023: Rp 5.026.521.373,-',
        'Peningkatan pendapatan dari zero waste (pemanfaatan 100% FABA)',
      ],
      costSaving: [
        'Penghematan dari pencegahan FABA yang terbuang ke landfill: Rp 806.205.000,- per tahun',
        'Penghematan kertas dan biaya administrasi manual',
      ],
      roi: ['Cost saving setelah implementasi: Rp 746.205.000,- (penghematan Rp 806.205.000 - biaya implementasi Rp 60.000.000)'],
    },
    nonFinancialBenefits: {
      operationalEfficiency: [
        'Proses administrasi 6x lebih cepat (dari 1 hari menjadi 10 menit)',
        'Proses monitoring dan koordinasi real-time',
        'Terhindar dari double data dan kesalahan administrasi',
      ],
      qualityImprovement: ['Peningkatan akurasi data pengelolaan FABA', 'Pengelolaan FABA yang lebih terstruktur dan terorganisir'],
      safetyImprovement: [
        'Monitoring KIR kendaraan melalui sistem warning untuk mencegah penggunaan kendaraan yang tidak laik jalan',
        'Tracking GPS untuk memastikan tujuan pengangkutan sesuai dengan dokumen',
      ],
      companyImage: [
        'Mendukung program Beyond KWh korporat',
        'Implementasi pengelolaan limbah yang ramah lingkungan (zero waste)',
        'Digitalisasi proses bisnis yang mendukung transformasi digital perusahaan',
      ],
    },
    implementation: [
      'Uji coba aplikasi sejak 14 November 2022',
      'Go Live pada 2 Januari 2023',
      'Pemanfaatan FABA oleh industri semen meningkat 100% setiap bulannya',
      'Tidak ada lagi limbah FABA yang ditimbun di ash yard',
    ],
    scalability: [
      'Dapat diimplementasikan di seluruh unit pembangkit PLN yang menghasilkan FABA',
      'Potensi pengembangan untuk sistem pengelolaan limbah jenis lain',
      'Model integrasi antara unit penghasil limbah - transporter - pemanfaat dapat direplikasi untuk jenis limbah lain',
    ],
    category: 'Aplikasi Digital',
    complexity: 'Moderate',
    resources: 'Medium',
    timeline: 'Short',

    // Additional mock data for display purposes
    innovators: [
      {
        id: 'innovator1',
        name: 'Ahmad Fauzi',
        position: 'Senior Engineer',
        unit: 'PLTU Jawa Unit 3',
        email: 'ahmad.fauzi@plnnpservices.co.id',
        phone: '081234567890',
        bio: 'Berpengalaman 12 tahun dalam bidang pengelolaan limbah PLTU dan pengembangan sistem digital untuk efisiensi operasional.',
        profileImage: '/images/innovator-ahmad.jpg',
      },
      {
        id: 'innovator2',
        name: 'Siti Amalia',
        position: 'Environmental Specialist',
        unit: 'PLTU Jawa Unit 3',
        email: 'siti.amalia@plnnpservices.co.id',
        bio: 'Spesialis manajemen limbah dengan fokus pada pemanfaatan FABA untuk industri dan pengurangan dampak lingkungan.',
        profileImage: '/images/innovator-siti.jpg',
      },
    ],
    adoptingUnits: [
      {
        id: 'adopter1',
        name: 'PLTU Suralaya',
        implementationDate: '2023-03-15',
        status: 'completed',
        testimonial: 'Implementasi DeWasTa berhasil meningkatkan efisiensi proses pengangkutan FABA dan mengurangi biaya operasional kami.',
        contactPerson: 'Budi Santoso',
      },
      {
        id: 'adopter2',
        name: 'PLTU Paiton',
        implementationDate: '2023-05-20',
        status: 'implementing',
        contactPerson: 'Dewi Rahma',
      },
      {
        id: 'adopter3',
        name: 'PLTU Cirebon',
        implementationDate: '2023-06-10',
        status: 'planning',
        contactPerson: 'Andi Permana',
      },
    ],
    awards: [
      {
        title: 'Juara 1 Kompetisi Inovasi PLN',
        year: '2023',
        level: 'national',
        description: 'Penghargaan untuk inovasi digital terbaik dalam kategori pengelolaan limbah dan peningkatan pendapatan beyond KWh.',
      },
      {
        title: 'Best Environmental Innovation',
        year: '2023',
        level: 'regional',
        description: 'Penghargaan untuk kontribusi dalam pengelolaan limbah yang berkelanjutan melalui digitalisasi proses.',
      },
    ],
    comments: [
      {
        id: 'comment1',
        userId: 'user1',
        userName: 'Roni Wijaya',
        userUnit: 'PLTU Tanjung Jati',
        userRole: 'Plant Manager',
        content: 'Apakah aplikasi ini bisa diimplementasikan untuk unit yang kapasitas produksi FABA-nya lebih kecil?',
        timestamp: '2023-11-15T09:30:00',
        replies: [
          {
            id: 'reply1',
            userId: 'innovator1',
            userName: 'Ahmad Fauzi',
            userUnit: 'PLTU Jawa Unit 3',
            userRole: 'Innovator',
            content:
              'Ya, aplikasi ini dapat disesuaikan untuk berbagai kapasitas produksi FABA. Skala operasi tidak menjadi kendala dalam implementasi.',
            timestamp: '2023-11-15T11:20:00',
          },
        ],
      },
      {
        id: 'comment2',
        userId: 'user2',
        userName: 'Diana Putri',
        userUnit: 'PLTU Indramayu',
        userRole: 'Environmental Officer',
        content: 'Berapa lama waktu yang dibutuhkan untuk implementasi dari awal hingga go live?',
        timestamp: '2023-11-18T14:15:00',
        replies: [
          {
            id: 'reply2',
            userId: 'innovator2',
            userName: 'Siti Amalia',
            userUnit: 'PLTU Jawa Unit 3',
            userRole: 'Innovator',
            content: 'Implementasi penuh biasanya membutuhkan waktu 1-2 bulan, tergantung kesiapan infrastruktur dan pelatihan pengguna.',
            timestamp: '2023-11-18T16:45:00',
          },
        ],
      },
    ],
    inquiries: [
      {
        id: 'inquiry1',
        unitId: 'unit1',
        unitName: 'PLTU Lontar',
        contactPerson: 'Rudi Hartono',
        contactEmail: 'rudi.hartono@plnnpservices.co.id',
        contactPhone: '081234567891',
        inquiryType: 'implementation',
        message:
          'Kami tertarik mengimplementasikan DeWasTa di unit kami. Mohon informasi lebih lanjut tentang proses implementasi dan kebutuhan teknis.',
        status: 'responded',
        timestamp: '2023-12-01T10:00:00',
      },
      {
        id: 'inquiry2',
        unitId: 'unit2',
        unitName: 'PLTU Cilacap',
        contactPerson: 'Nina Agustina',
        contactEmail: 'nina.agustina@plnnpservices.co.id',
        contactPhone: '081234567892',
        inquiryType: 'information',
        message: 'Kami ingin tahu lebih detail tentang ROI dan kebutuhan sumber daya untuk implementasi DeWasTa.',
        status: 'pending',
        timestamp: '2023-12-10T14:30:00',
      },
    ],
    readinessMetrics: {
      technicalComplexity: 3,
      implementationTime: 2,
      resourceRequirement: 2,
      roi: 4,
      scalability: 5,
    },
    overallRating: 4.7,
    images: [
      '/images/dewasta-dashboard.jpg',
      '/images/dewasta-mobile-app.jpg',
      '/images/dewasta-implementation.jpg',
      '/images/dewasta-faba-monitoring.jpg',
    ],
    featuredImage: '/images/dewasta-featured.jpg',
    videoUrl: 'https://www.youtube.com/embed/sample-video-id',
    createdAt: '2022-11-01T00:00:00',
    updatedAt: '2023-12-29T00:00:00',
    tags: ['digitalisasi', 'FABA', 'beyond KWh', 'zero waste', 'pengelolaan limbah', 'mobile app'],
    highlightPoints: [
      'Penghematan biaya hingga Rp 800 juta per tahun',
      'Peningkatan efisiensi proses 6x lebih cepat',
      'Pemanfaatan FABA 100% (zero waste)',
      'Implementasi cepat dalam 1-2 bulan',
    ],
    applicableUnitTypes: ['PLTU Batubara', 'Pembangkit dengan produksi FABA', 'Unit dengan tantangan pengelolaan limbah'],
    managerRemarks:
      'Inovasi DeWasTa menunjukkan bagaimana digitalisasi proses dapat memberikan dampak signifikan pada efisiensi operasional, peningkatan pendapatan, dan pengelolaan lingkungan. Sangat direkomendasikan untuk unit pembangkit yang memiliki produksi FABA.',
  },
  // Add more innovations as needed for the listing page
  {
    id: 'powermonitor',
    title: 'Power Monitor: Sistem Pemantauan Kinerja Pembangkit Realtime',
    // Mock data for listing display
    executiveSummary: [
      'Sistem monitoring pembangkit terintegrasi berbasis IoT dan cloud computing.',
      'Dashboard realtime untuk pemantauan kinerja dan deteksi dini potensi gangguan.',
      'Mengoptimalkan efisiensi operasional dan mempercepat respons terhadap anomali.',
    ],
    painPoints: ['Keterlambatan deteksi masalah', 'Monitoring manual tidak efisien', 'Kesulitan analisis tren'],
    // Minimal data for card display
    category: 'Monitoring System',
    complexity: 'High',
    resources: 'High',
    timeline: 'Medium',
    readinessMetrics: {
      technicalComplexity: 4,
      implementationTime: 3,
      resourceRequirement: 4,
      roi: 5,
      scalability: 4,
    },
    overallRating: 4.5,
    featuredImage: '/images/powermonitor-featured.jpg',
    innovators: [
      {
        id: 'innovator3',
        name: 'Budi Santoso',
        position: 'System Engineer',
        unit: 'PLTU Banten Unit 2',
        email: 'budi.santoso@plnnpservices.co.id',
        bio: 'Spesialis sistem monitoring dan IoT dengan pengalaman 10 tahun.',
        profileImage: '/images/innovator-budi.jpg',
      },
    ],
    // Minimal data for listing
    stakeholders: [],
    solution: [],
    features: [],
    novelty: [],
    comparativeAnalysis: [],
    investment: { developmentCost: [], requiredResources: [], infrastructure: [] },
    financialBenefits: { revenue: [], costSaving: [], roi: [] },
    nonFinancialBenefits: { operationalEfficiency: [], qualityImprovement: [], safetyImprovement: [], companyImage: [] },
    implementation: [],
    scalability: [],
    adoptingUnits: [],
    awards: [],
    comments: [],
    inquiries: [],
    images: [],
    createdAt: '2023-03-15T00:00:00',
    updatedAt: '2023-12-20T00:00:00',
    tags: ['monitoring', 'IoT', 'realtime', 'cloud'],
    highlightPoints: [],
    applicableUnitTypes: [],
    managerRemarks: '',
  },
  {
    id: 'turboclean',
    title: 'TurboClean: Sistem Otomasi Pembersihan Kondensor Turbin',
    // Mock data for listing display
    executiveSummary: [
      'Sistem otomatis untuk pembersihan kondensor turbin uap tanpa shutdown.',
      'Menggunakan teknologi robotik dan AI untuk deteksi dan pembersihan fouling.',
      'Meningkatkan efisiensi termal dan mencegah penurunan performa turbin.',
    ],
    painPoints: ['Efisiensi turbin menurun', 'Waktu shutdown untuk pembersihan', 'Biaya tinggi untuk manual cleaning'],
    // Minimal data for card display
    category: 'Mechanical System',
    complexity: 'High',
    resources: 'High',
    timeline: 'Long',
    readinessMetrics: {
      technicalComplexity: 5,
      implementationTime: 4,
      resourceRequirement: 4,
      roi: 5,
      scalability: 3,
    },
    overallRating: 4.8,
    featuredImage: '/images/turboclean-featured.jpg',
    innovators: [
      {
        id: 'innovator4',
        name: 'Rini Kusuma',
        position: 'Mechanical Engineer',
        unit: 'PLTU Sumatera Unit 1',
        email: 'rini.kusuma@plnnpservices.co.id',
        bio: 'Ahli turbin dengan spesialisasi sistem pembersihan otomatis.',
        profileImage: '/images/innovator-rini.jpg',
      },
    ],
    // Minimal data for listing
    stakeholders: [],
    solution: [],
    features: [],
    novelty: [],
    comparativeAnalysis: [],
    investment: { developmentCost: [], requiredResources: [], infrastructure: [] },
    financialBenefits: { revenue: [], costSaving: [], roi: [] },
    nonFinancialBenefits: { operationalEfficiency: [], qualityImprovement: [], safetyImprovement: [], companyImage: [] },
    implementation: [],
    scalability: [],
    adoptingUnits: [],
    awards: [],
    comments: [],
    inquiries: [],
    images: [],
    createdAt: '2023-05-20T00:00:00',
    updatedAt: '2023-12-15T00:00:00',
    tags: ['turbin', 'otomasi', 'pembersihan', 'efisiensi termal'],
    highlightPoints: [],
    applicableUnitTypes: [],
    managerRemarks: '',
  },
];

export const getInnovationById = (id: string): Inovasi | undefined => {
  return innovations.find((innovation) => innovation.id === id);
};

export const getAdoptionStatistics = () => {
  return {
    totalInnovations: innovations.length,
    totalAdoptions: innovations.reduce((acc, innovation) => acc + innovation.adoptingUnits.length, 0),
    pendingInquiries: innovations.reduce((acc, innovation) => acc + innovation.inquiries.filter((inq) => inq.status === 'pending').length, 0),
    implementationByCategory: {
      'Aplikasi Digital': 3,
      'Monitoring System': 2,
      'Mechanical System': 1,
    },
    topUnits: [
      { unitName: 'PLTU Suralaya', adoptions: 3 },
      { unitName: 'PLTU Paiton', adoptions: 2 },
      { unitName: 'PLTU Cirebon', adoptions: 2 },
    ],
  };
};
