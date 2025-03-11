// src/app/(MainBody)/kelolaInovasi/list-inovasi-standar/data/index.ts

export interface Innovation {
  id: string;
  title: string;
  executiveSummary: string[];
  painPoints: string[];
  stakeholders: string[];
  solution: string[];
  features: string[];
  novelty: string[];
  comparativeAnalysis: string[];
  investment: {
    developmentCost: string[];
    requiredResources: string[];
    infrastructure: string[];
  };
  financialBenefits: {
    revenue: string[];
    costSaving: string[];
    roi: string[];
  };
  nonFinancialBenefits: {
    operationalEfficiency: string[];
    qualityImprovement: string[];
    safetyImprovement: string[];
    companyImage: string[];
  };
  implementation: string[];
  scalability: string[];
  category: string;
  complexity: 'Low' | 'Moderate' | 'High';
  resources: 'Low' | 'Medium' | 'High';
  timeline: 'Short' | 'Medium' | 'Long';
}

export const innovations: Innovation[] = [
  // Contoh data berdasarkan DeWasTa
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
    category: 'Aplikasi',
    complexity: 'Moderate',
    resources: 'Medium',
    timeline: 'Short',
  },
  {
    id: 'ai-operation-performance',
    title:
      'Operation And Performance Analysis Berbasis Kecerdasan Buatan Sebagai Guidelines Operator Controllable Untuk Meningkatkan Efisiensi Pembangkit Listrik',
    executiveSummary: [
      'Aplikasi berbasis kecerdasan buatan untuk mengoptimalkan NPHR melalui pengoptimalan pola operasi.',
      'Menggunakan metodologi supervised machine learning untuk melakukan regretion, classification, dan forecasting secara otomatis.',
      'Menyediakan guidelines operation controllable berdasarkan standar EPRI untuk meningkatkan efisiensi pembangkit listrik.',
    ],
    painPoints: [
      'Nilai NPHR PLTU Rembang mengalami trend kenaikan, yang menunjukkan penurunan efisiensi operasi.',
      'Penurunan efisiensi operasi berdampak pada penurunan keuntungan finansial unit.',
      '65% kerusakan peralatan diakibatkan oleh kesalahan operasi menurut standar EPRI.',
      'Aplikasi pengoptimalan pembakaran yang ada hanya menggunakan parameter O2 content sebagai acuan.',
      'Proses pengambilan keputusan membutuhkan waktu ±11 hari sebelum adanya inovasi.',
    ],
    stakeholders: [
      'Operator pembangkit listrik',
      'Teknisi pemeliharaan',
      'Manajer dan supervisor operasi',
      'Tim enjiniring dan kinerja',
      'Manajemen unit pembangkit',
    ],
    solution: [
      'Mengembangkan aplikasi berbasis kecerdasan buatan untuk analisis operasi dan kinerja pembangkit.',
      'Menggunakan metodologi supervised machine learning untuk analisis data operasi secara real-time.',
      'Menerapkan standar EPRI untuk menganalisis Turbine Losses, Condenser Losses, Boiler Losses, dan Circulating Water Losses.',
      'Mengintegrasikan data dari DCS melalui OPC dan menambahkan data dari SOP terbaru dan COA batubara.',
      'Memberikan guidelines operation controllable untuk mengoptimalkan NPHR.',
    ],
    features: [
      'Dashboard real-time untuk monitoring heat rate losses.',
      'Analisis otomatis menggunakan kecerdasan buatan untuk mengoptimalkan NPHR.',
      'Sistem peringatan dini terhadap kondisi kerusakan peralatan (minor dan major).',
      'Analisis dokumen COA batubara untuk menunjukkan nilai emisi hasil pembakaran dan dampaknya terhadap NPHR.',
      'Rekomendasi perubahan rantai pasok batubara dan pengaturan mixing batubara yang optimal.',
    ],
    novelty: [
      'Penerapan kecerdasan buatan untuk mengoptimalkan pola operasi berdasar standar EPRI.',
      'Integrasi data dari berbagai sumber (DCS, SOP, COA batubara) dalam satu platform analisis.',
      'Kemampuan melakukan perhitungan mandiri kontribusi penggunaan aplikasi dalam menurunkan nilai NPHR.',
      'Sistem peringatan dini yang dapat dikonfigurasi untuk mendeteksi kondisi minor dan major pada peralatan.',
    ],
    comparativeAnalysis: [
      'Sistem sebelumnya: RAPTORS dan aplikasi pengoptimalan proses pembakaran berdasar O2 Content.',
      'Sistem baru: Analisis komprehensif berdasar standar EPRI, SOP, dan COA batubara menggunakan kecerdasan buatan.',
      'Proses pengambilan keputusan dipercepat dari ±11 hari menjadi 5 menit.',
      'Analisis lebih akurat dengan penambahan dataset berbasis standar EPRI.',
    ],
    investment: {
      developmentCost: ['Biaya pengembangan aplikasi: (tidak disebutkan dalam dokumen)'],
      requiredResources: [
        'Tim pengembang aplikasi berbasis kecerdasan buatan',
        'Infrastruktur untuk integrasi data dari DCS melalui OPC',
        'Server untuk pemrosesan data dengan machine learning',
      ],
      infrastructure: [
        'Server untuk hosting aplikasi',
        'Sistem integrasi dengan Distribute Control System (DCS)',
        'OLE for Process Control (OPC) sebagai perantara untuk penarikan data',
      ],
    },
    financialBenefits: {
      revenue: [
        'Peningkatan keuntungan finansial melalui penurunan nilai NPHR pembangkit.',
        'Pengurangan biaya pemeliharaan akibat kesalahan operasi.',
      ],
      costSaving: [
        'Penurunan nilai NPHR sebesar 92.67 kCal/kWh (dari 3057.5 kCal/kWh menjadi 2964.83 kCal/kWh)',
        'Penghematan biaya bahan bakar batubara',
      ],
      roi: ['Pengurangan kesalahan operasi yang menyebabkan 65% kerusakan peralatan.'],
    },
    nonFinancialBenefits: {
      operationalEfficiency: [
        'Proses pengambilan keputusan dipercepat dari ±11 hari menjadi 5 menit.',
        'Peningkatan awareness operation melalui guidelines operation controllable.',
        'Pengoptimalan pola operasi berdasar standar EPRI.',
      ],
      qualityImprovement: [
        'Analisis yang lebih akurat menggunakan metodologi machine learning.',
        'Peningkatan pemahaman operator tentang faktor-faktor yang mempengaruhi NPHR.',
        'Deteksi dini kondisi abnormal pada peralatan pembangkit.',
      ],
      safetyImprovement: [
        'Pengurangan risiko kerusakan peralatan melalui deteksi dini.',
        'Pengoperasian peralatan yang lebih optimal dan aman.',
        'Pengurangan emisi melalui pembakaran yang lebih efisien.',
      ],
      companyImage: [
        'Penerapan teknologi modern berbasis kecerdasan buatan dalam operasi pembangkit.',
        'Peningkatan efisiensi pembangkit yang berkontribusi pada pengurangan emisi.',
        'Digitalisasi proses operasi yang mendukung transformasi digital perusahaan.',
      ],
    },
    implementation: [
      'Karya inovasi dibahas dalam kegiatan CoP pada 2 Februari 2023.',
      'Implementasi penuh sejak bulan Juli 2023 di PLTU Rembang.',
      'Menghasilkan penurunan nilai NPHR sebesar 92.67 kCal/kWh.',
      'Mempercepat proses pengambilan keputusan dari ±11 hari menjadi 5 menit.',
    ],
    scalability: [
      'Dapat diimplementasikan di seluruh unit pembangkit dengan modifikasi minor.',
      'Metodologi machine learning dapat diadaptasi untuk menganalisis performa pembangkit jenis lain.',
      'Platform analisis dapat dikembangkan untuk mengintegrasikan lebih banyak sumber data.',
    ],
    category: 'Aplikasi',
    complexity: 'High',
    resources: 'Medium',
    timeline: 'Medium',
  },
  {
    id: 'm-action',
    title: 'M-Action 4.0',
    executiveSummary: [
      'Aplikasi monitoring tindak lanjut arahan dan keputusan rapat yang memudahkan proses dokumentasi dan tracking.',
      'Pengembangan aplikasi M-Action 2014 dengan fitur-fitur baru yang memudahkan penggunanya dari sisi admin user dan PIC.',
      'Aplikasi ini memastikan arahan-arahan strategis dari rapat dijalankan dan dimonitor secara akuntabel.',
    ],
    painPoints: [
      'Penyampaian arahan dan monitoring progress tindak lanjut masih dilaksanakan secara manual, dengan mendatangi PIC satu persatu.',
      'PIC belum konsisten dalam mengupdate progress tindak lanjut.',
      'Belum ada fitur jumlah rekapan dan status arahan yang harus ditindaklanjuti dan harus segera diselesaikan oleh PIC.',
      'Perusahaan belum pernah melakukan monitoring secara akuntabel terhadap tindak lanjut action plan/arahan dari rapat.',
      'Dokumen hasil rapat tidak terdokumentasi dengan baik.',
    ],
    stakeholders: [
      'Direksi perusahaan',
      'Dewan Komisaris',
      'Manager dan Asisten Manager sebagai PIC tindak lanjut',
      'Divisi Manajemen Stakeholder sebagai pengelola aplikasi',
      'Divisi Teknologi Informasi sebagai pendukung teknis',
    ],
    solution: [
      'Pengembangan Aplikasi M-Action 4.0 dengan fitur pengiriman arahan secara langsung kepada PIC terkait.',
      'Penambahan fitur notifikasi adanya arahan baru dan update progress tindak lanjut.',
      'Penambahan fitur untuk input evidence secara langsung oleh PIC.',
      'Penambahan fitur dashboard untuk monitoring status tindak lanjut rapat secara keseluruhan.',
      'Kemampuan untuk membuat custom berbagai jenis rapat yang dibutuhkan.',
    ],
    features: [
      'Dashboard monitoring progress tindak lanjut untuk melihat status arahan (belum, on progress, selesai, selesai berkelanjutan).',
      'Notifikasi otomatis arahan baru kepada PIC dan notifikasi update progress kepada admin.',
      'Fitur upload evidence tindak lanjut secara langsung oleh PIC.',
      'Dokumentasi elemen rapat (daftar hadir, materi, notulen, arahan) secara digital.',
      'Custom berbagai jenis rapat sesuai kebutuhan perusahaan.',
      'Fitur pengisian daftar hadir Direksi dan Dekom untuk monitoring kehadiran pejabat.',
    ],
    novelty: [
      'Integrasi sistem notifikasi dan email untuk pemberitahuan arahan dan update progress.',
      'Dashboard yang menampilkan statistik tindak lanjut secara real-time.',
      'Dokumentasi digital terintegrasi untuk seluruh elemen rapat perusahaan.',
      'Sistem Single Sign On (SSO) dengan Active Directory untuk kemudahan akses.',
    ],
    comparativeAnalysis: [
      'M-Action 2014: Pengiriman action plan relatif lambat, update progress tanpa evidence langsung, tidak ada fitur notifikasi, tidak ada fitur dokumentasi lengkap.',
      'M-Action 4.0: Pengiriman action plan secara langsung, update progress dengan evidence langsung, fitur notifikasi untuk admin dan PIC, dokumentasi lengkap (daftar hadir, materi, notulen).',
      'M-Action 2014: Terbatas hanya untuk Rapat Direksi.',
      'M-Action 4.0: Dapat digunakan untuk berbagai jenis rapat yang dikustomisasi.',
    ],
    investment: {
      developmentCost: ['Tidak disebutkan secara spesifik dalam dokumen'],
      requiredResources: ['Tim pengembang aplikasi web', 'Server untuk hosting aplikasi', 'Integrasi dengan sistem Active Directory untuk SSO'],
      infrastructure: [
        'Perangkat lunak berbasis web dengan bahasa pemrograman PHP 7.3',
        'Framework CodeIgniter v 3.1.9',
        'Framework front-end Bootstrap v4',
        'Database aplikasi M-Action eksisting',
        'Sistem Single Sign On (SSO) dengan Active Directory',
      ],
    },
    financialBenefits: {
      revenue: [
        'Membantu pencapaian target KPI perusahaan melalui monitoring tindak lanjut arahan strategis.',
        'Mencegah kerugian dari keterlambatan tindak lanjut arahan yang bersifat finansial.',
      ],
      costSaving: [
        'Penghematan kertas untuk mencetak daftar arahan Direksi (sekitar Rp 204.000 per tahun).',
        'Mencegah potential loss hingga Rp 11,49 Milyar (berdasarkan contoh kasus denda keterlambatan).',
      ],
      roi: [
        'Mencegah kerugian finansial dari keterlambatan tindak lanjut arahan Direksi.',
        'Memastikan peluang-peluang bisnis perusahaan dapat segera ditindaklanjuti.',
      ],
    },
    nonFinancialBenefits: {
      operationalEfficiency: [
        'Arahan rapat dapat secepat mungkin sampai kepada penanggungjawab.',
        'Memudahkan proses update progress tindak lanjut dan input evidence.',
        'Mempercepat proses pengambilan keputusan melalui monitoring status tindak lanjut.',
      ],
      qualityImprovement: [
        'Memastikan seluruh arahan rapat ditindaklanjuti dengan dibuktikan oleh dokumen evidence.',
        'Meningkatkan akuntabilitas dalam pelaksanaan tindak lanjut rapat.',
        'Meningkatkan efektivitas rapat melalui dokumentasi dan monitoring yang lebih baik.',
      ],
      safetyImprovement: ['Tidak disebutkan secara spesifik dalam dokumen'],
      companyImage: [
        'Memudahkan implementasi Good Corporate Governance melalui dokumentasi rapat yang sistematis.',
        'Meningkatkan transparansi dan akuntabilitas dalam tindak lanjut hasil rapat.',
        'Meningkatkan implementasi digitalisasi dalam proses bisnis perusahaan.',
      ],
    },
    implementation: [
      'Implementasi aplikasi M-Action 4.0 dimulai pada 13 Januari 2023.',
      'Sosialisasi melalui poster di lift dan mading kantor pada Mei-Juni 2023.',
      'Pendampingan pengisian M-Action pada tanggal 7-16 Juni 2023.',
      'Pelaporan progress M-Action dalam Rapat Direksi secara rutin.',
    ],
    scalability: [
      'Dapat dikembangkan untuk mengelola berbagai jenis rapat di seluruh unit perusahaan.',
      'Berpotensi dikembangkan untuk integrasi dengan sistem manajemen kinerja perusahaan.',
      'Dapat direplikasi di anak perusahaan atau unit-unit lain dalam grup PLN.',
    ],
    category: 'Aplikasi',
    complexity: 'High',
    resources: 'Medium',
    timeline: 'Medium',
  },
  {
    id: 'condition-monitoring-riot',
    title: 'Implementasi Condition Monitoring Menggunakan Aplikasi R-IoT untuk Forecasting Failure Equipment Pembangkit',
    executiveSummary: [
      'Aplikasi berbasis Maximo yang mengintegrasikan data condition monitoring untuk forecasting kegagalan peralatan pembangkit.',
      'Transformasi dari pemeliharaan berbasis waktu menjadi pemeliharaan berbasis kondisi aktual peralatan.',
      'Sistem terintegrasi yang menyediakan visualisasi tren data untuk pemahaman lebih mendalam tentang kondisi peralatan.',
    ],
    painPoints: [
      'Proses pengolahan data, analisa dan pembuatan laporan masih dilakukan secara manual.',
      'Data hasil pengukuran Condition Monitoring terbatas pada keperluan CBM itu sendiri tanpa penyebaran informasi lebih lanjut.',
      'Keterlambatan dalam merespons kondisi abnormal peralatan yang berpotensi menyebabkan kegagalan.',
      'Kurangnya kemampuan prediktif dalam pemantauan kondisi peralatan.',
      'Keterbatasan akses informasi untuk departemen lain, menyebabkan kurangnya kolaborasi dan koordinasi.',
      'Dampak finansial yang signifikan dalam hal biaya perbaikan darurat dan downtime operasional.',
    ],
    stakeholders: [
      'Bidang Engineering',
      'Bidang Operasi',
      'Bidang Pemeliharaan',
      'Manajemen unit pembangkit',
      'Tim Condition Monitoring',
      'Unit PT PLN Nusantara Power',
    ],
    solution: [
      'Pengembangan aplikasi Condition Monitoring berbasis Maximo yang terintegrasi dengan R-IoT.',
      'Integrasi data dari peralatan di lapangan ke dalam sistem manajemen Maximo untuk akses terpusat.',
      'Penggunaan R-IoT untuk membuat tren data dan memberikan pemahaman lebih mendalam tentang kondisi peralatan.',
      'Implementasi aspek prediktif untuk forecasting failure equipment.',
      'Automatisasi pengolahan data hasil Condition Monitoring.',
    ],
    features: [
      'Dashboard monitoring data Condition Monitoring secara real-time.',
      'Visualisasi tren data untuk pemahaman kondisi normal, batas alarm, dan high alarm.',
      'Sistem prediksi potensi kegagalan peralatan menggunakan data historis.',
      'Fitur analisis dan penerbitan rekomendasi perbaikan.',
      'Akses multi-platform (web based dan mobile) untuk kemudahan penggunaan.',
      'Integrasi dengan sistem Maximo untuk manajemen data terpusat.',
    ],
    novelty: [
      'Penerapan teknologi IoT dalam pemantauan kondisi peralatan pembangkit.',
      'Pendekatan prediktif untuk forecasting failure equipment yang meningkatkan proaktivitas pemeliharaan.',
      'Integrasi data Condition Monitoring ke dalam sistem manajemen terpusat.',
      'Penggunaan algoritma analisis untuk interpretasi data dan prediksi kegagalan.',
    ],
    comparativeAnalysis: [
      'Sistem sebelumnya: Pemeliharaan berbasis waktu atau masa pakai yang kurang efektif dan tidak mempertimbangkan kondisi aktual peralatan.',
      'Sistem R-IoT: Pemeliharaan berbasis kondisi dengan kemampuan prediktif yang memungkinkan respons proaktif.',
      'Sistem sebelumnya: Proses pengolahan data, analisis, dan pelaporan manual yang memakan waktu.',
      'Sistem R-IoT: Automatisasi pengolahan data dan analisis yang mempercepat respons terhadap kondisi abnormal.',
      'Sistem sebelumnya: Keterbatasan akses informasi dan data yang tidak terintegrasi.',
      'Sistem R-IoT: Integrasi data dan akses informasi untuk berbagai bidang yang meningkatkan kolaborasi.',
    ],
    investment: {
      developmentCost: ['Tidak disebutkan secara spesifik dalam dokumen'],
      requiredResources: [
        'Tim pengembang aplikasi berbasis Maximo dan R-IoT',
        'Sistem pengumpulan data dari peralatan di lapangan',
        'Infrastruktur IT untuk hosting aplikasi dan database',
      ],
      infrastructure: [
        'Sistem berbasis web dan Android (intranet dan Internet)',
        'Server untuk hosting aplikasi dan database',
        'Sistem integrasi dengan peralatan di lapangan',
        'Infrastruktur jaringan untuk transmisi data',
      ],
    },
    financialBenefits: {
      revenue: ['Peningkatan ketersediaan dan keandalan peralatan pembangkit.', 'Optimasi penggunaan peralatan yang meningkatkan produktivitas.'],
      costSaving: [
        'Reduksi biaya pemeliharaan darurat melalui deteksi dini kondisi abnormal.',
        'Pengurangan downtime yang mengurangi kerugian produksi.',
        'Efisiensi konsumsi energi melalui perbaikan proaktif.',
        'Peningkatan umur peralatan yang mengurangi frekuensi penggantian.',
      ],
      roi: [
        'Reduksi biaya produksi melalui pengurangan risiko downtime dan kegagalan peralatan.',
        'Penghematan dari pencegahan kegagalan peralatan yang tidak terduga.',
      ],
    },
    nonFinancialBenefits: {
      operationalEfficiency: [
        'Kemudahan, kecepatan dalam pencarian data, analisa dan forecasting.',
        'Optimasi pengelolaan peralatan melalui pemantauan yang cermat.',
        'Pengambilan keputusan yang cerdas berdasarkan data real-time dan prediktif.',
      ],
      qualityImprovement: [
        'Peningkatan keandalan peralatan dengan pendekatan pemeliharaan berbasis kondisi aktual.',
        'Pengurangan risiko kegagalan tak terduga melalui forecasting failure equipment.',
        'Peningkatan kualitas pemantauan melalui visualisasi tren data.',
      ],
      safetyImprovement: [
        'Peningkatan keamanan dan keselamatan melalui deteksi dini potensi kegagalan peralatan.',
        'Pencegahan situasi berbahaya yang dapat timbul dari kegagalan peralatan.',
      ],
      companyImage: [
        'Peningkatan reputasi perusahaan melalui kinerja operasional yang lebih baik.',
        'Kontribusi terhadap keberlanjutan lingkungan melalui manajemen peralatan yang lebih efisien.',
        'Inovasi teknologi terkini yang mendorong adopsi teknologi dalam manajemen pemeliharaan.',
        'Menjawab tantangan revolusi industri 4.0 dengan melakukan digitalisasi dan pemanfaatan IoT.',
      ],
    },
    implementation: [
      'Pilot proyek untuk pengujian dan evaluasi awal pada unit atau area spesifik.',
      'Pelatihan intensif untuk tim yang terlibat, termasuk tim teknis, analis data, dan personel terkait.',
      'Evaluasi performa sistem setelah implementasi pilot dan penyesuaian parameter pemantauan.',
      'Implementasi penuh yang melibatkan semua unit dan departemen yang relevan.',
      'Penyusunan rencana perluasan terinci yang mencakup jadwal waktu, sumber daya, dan tahapan implementasi.',
    ],
    scalability: [
      'Dapat diimplementasikan di seluruh unit PT PLN Nusantara Power.',
      'Adaptabilitas sistem untuk berbagai jenis peralatan pembangkit.',
      'Potensi pengembangan untuk integrasi dengan sistem manajemen lainnya.',
      'Kemampuan untuk menambahkan parameter pemantauan baru sesuai kebutuhan.',
    ],
    category: 'Aplikasi',
    complexity: 'High',
    resources: 'Medium',
    timeline: 'Medium',
  },
  // Data inovasi lainnya dapat ditambahkan di sini
];
