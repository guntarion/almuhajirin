// src/app/(DashboardLayout)/ide-inovasi/komparasi-ide/data/kerangka-komparasi.ts

/**
 * Data structure for the Innovation Comparison Framework
 * Contains all sections and subsections with their details
 */

export interface Subsection {
  title: string;
  reason: string;
  example: string | string[];
}

export interface FrameworkSection {
  key: string;
  title: string;
  subsections: Subsection[];
}

/**
 * Complete data for the Innovation Comparison Framework
 * Structured as an array of sections, each containing subsections with reasons and examples
 */
export const frameworkSections: FrameworkSection[] = [
  {
    key: '1',
    title: '1. Karakteristik Dasar Inovasi dan Penempatan',
    subsections: [
      {
        title: 'a. Domain Teknologi dan Area Fokus',
        reason:
          'Membantu memetakan apakah suatu inovasi berada di area yang sudah padat dengan solusi atau masuk ke wilayah yang masih jarang dijelajahi.',
        example:
          'Membandingkan "Smart Grid Optimization dengan AI" dengan "Virtual Power Plant" untuk melihat overlap domain dalam manajemen jaringan listrik cerdas, tetapi dengan pendekatan berbeda (optimasi grid vs. agregasi DER).',
      },
      {
        title: 'b. Klasifikasi Inovasi',
        reason:
          'Menentukan posisi inovasi dalam spektrum inovasi (inkremental, breakthrough, disruptif) membantu dalam menentukan strategi pengembangan dan ekspektasi dampak.',
        example:
          '"Digital Twin untuk Optimasi Proses Kilang Minyak" merupakan inovasi breakthrough yang mengubah paradigma operasi, sementara "Predictive Maintenance Turbin Gas" lebih bersifat inkremental terhadap praktik pemeliharaan yang ada.',
      },
    ],
  },
  {
    key: '2',
    title: '2. Analisis Permasalahan dan Solusi',
    subsections: [
      {
        title: 'a. Perbandingan Definisi Masalah',
        reason:
          'Memahami apakah inovasi berbeda menyasar masalah yang sama atau masalah berbeda namun terkait, membantu mengidentifikasi potensi kolaborasi atau solusi komprehensif.',
        example:
          '"Sistem Prediksi Produksi Energi Solar" dan "Battery Energy Storage" mengatasi masalah intermittency energi terbarukan dari sisi yang berbeda (prediksi vs. penyimpanan), menunjukkan potensi integrasi.',
      },
      {
        title: 'b. Kedalaman dan Keluasan Solusi',
        reason: 'Mengevaluasi seberapa menyeluruh suatu inovasi mengatasi akar permasalahan dibandingkan solusi lain.',
        example:
          '"Carbon Capture ML" menawarkan optimasi proses penangkapan karbon yang ada, sedangkan "Hydrogen Production" memberikan solusi alternatif yang lebih menyeluruh untuk dekarbonisasi.',
      },
    ],
  },
  {
    key: '3',
    title: '3. Aspek Teknis dan Implementasi',
    subsections: [
      {
        title: 'a. Penggunaan Teknologi Enabling',
        reason: 'Membandingkan basis teknologi yang digunakan membantu mengidentifikasi tren teknologi dan potensi sinergi antar inovasi.',
        example:
          'Beberapa inovasi seperti "Smart Grid Optimization", "Predictive Maintenance", dan "Digital Twin Refinery" menggunakan AI sebagai teknologi enabling utama, menunjukkan peluang untuk mengembangkan platform AI terintegrasi.',
      },
      {
        title: 'b. Kompleksitas Implementasi',
        reason: 'Menilai tingkat kesulitan implementasi relatif terhadap solusi lain membantu dalam prioritisasi dan alokasi sumber daya.',
        example:
          '"Blockchain Energy Trading" memiliki kompleksitas implementasi yang lebih tinggi karena memerlukan perubahan regulasi dan adopsi massal, dibandingkan "Drone Pipeline Inspection" yang dapat diimplementasikan secara bertahap.',
      },
    ],
  },
  {
    key: '4',
    title: '4. Dampak dan Nilai Bisnis',
    subsections: [
      {
        title: 'a. Perbandingan ROI dan Periode Pengembalian',
        reason: 'Analisis komparatif nilai finansial membantu dalam prioritisasi investasi inovasi.',
        example:
          '"Battery Energy Storage" memiliki IRR 18% dengan payback period 5 tahun, sedangkan "Smart Grid Optimization" memiliki ROI 400% dalam 3 tahun, memberikan perspektif untuk prioritisasi investasi.',
      },
      {
        title: 'b. Skalabilitas dan Potensi Pertumbuhan',
        reason: 'Memahami potensi pertumbuhan dan penerapan skala besar dari suatu inovasi dibandingkan inovasi lain.',
        example:
          '"Virtual Power Plant" memiliki skalabilitas tinggi karena bisa mengagregasi hingga 10.000 DER, sementara "Geothermal Drilling AI" lebih terbatas pada lokasi panas bumi spesifik.',
      },
    ],
  },
  {
    key: '5',
    title: '5. Aspek Keberlanjutan',
    subsections: [
      {
        title: 'a. Kontribusi Terhadap Target Karbon',
        reason: 'Keselarasan dengan tujuan dekarbonisasi dan keberlanjutan menjadi faktor kritis dalam evaluasi inovasi di sektor energi.',
        example:
          '"Hydrogen Production" dan "Carbon Capture ML" memiliki kontribusi langsung terhadap pengurangan emisi, sementara "Seismic AI Exploration" lebih berfokus pada efisiensi eksplorasi fosil.',
      },
      {
        title: 'b. Kesesuaian dengan Tren Industri Jangka Panjang',
        reason: 'Mengevaluasi apakah inovasi sejalan dengan tren industri utama atau berpotensi menjadi usang karena perubahan arah industri.',
        example:
          '"EV Charging AI" sejalan dengan tren elektrifikasi transportasi, sedangkan inovasi terkait pembangkit berbasis fosil perlu mempertimbangkan risiko aset terdampar (stranded assets).',
      },
    ],
  },
  {
    key: '6',
    title: '6. Relasi dengan Inovasi Lain',
    subsections: [
      {
        title: 'a. Pemetaan Hubungan Antar Inovasi',
        reason: 'Mengidentifikasi hubungan komplementer, kompetitif, atau dependen membantu mengoptimalkan portofolio inovasi secara keseluruhan.',
        example: [
          'Komplementer: "Solar Forecasting AI" dan "Battery Energy Storage" saling melengkapi untuk manajemen energi terbarukan',
          'Substitusi/kompetitif: "Hydrogen Production" dan "Carbon Capture" sebagai pendekatan berbeda untuk dekarbonisasi',
          'Enabler: "Digital Twin" sebagai enabler untuk berbagai optimasi operasional',
          'Dependency: "Blockchain Energy Trading" bergantung pada penetrasi DER dan smart meters',
        ],
      },
      {
        title: 'b. Potensi Integrasi dan Bundling',
        reason: 'Mengidentifikasi inovasi yang dapat digabungkan untuk menciptakan solusi yang lebih komprehensif.',
        example:
          '"Smart Grid Optimization", "Virtual Power Plant", dan "EV Charging AI" dapat diintegrasikan menjadi solusi manajemen energi terdistribusi menyeluruh.',
      },
    ],
  },
  {
    key: '7',
    title: '7. Keunikan dan Diferensiasi',
    subsections: [
      {
        title: 'a. Faktor Pembeda Utama',
        reason:
          'Mengidentifikasi elemen unik yang membedakan suatu inovasi dari inovasi serupa membantu menilai novelty dan potensi keunggulan kompetitif.',
        example:
          '"Digital Twin Refinery" diferensiasinya terletak pada integrasi data operasional, desain, dan model fisik-kimia, sementara solusi digital lain mungkin hanya fokus pada aspek tertentu.',
      },
      {
        title: 'b. Kekokohan Klaim Keunggulan',
        reason: 'Mengevaluasi seberapa kuat dan terverifikasi klaim keunggulan yang diajukan dalam inovasi.',
        example:
          'Klaim efisiensi "Carbon Capture ML" untuk pengurangan konsumsi energi 20% perlu dibandingkan dengan baseline teknologi lain dan divalidasi melalui pilot.',
      },
    ],
  },
  {
    key: '8',
    title: '8. Aspek Organisasional dan Pengembangan Kapabilitas',
    subsections: [
      {
        title: 'a. Kesesuaian dengan Kapabilitas Organisasi',
        reason: 'Menilai sejauh mana inovasi memanfaatkan kekuatan organisasi atau memerlukan pengembangan kapabilitas baru.',
        example:
          'PLN memiliki keahlian dalam manajemen jaringan, sehingga "Smart Grid Optimization" lebih selaras dengan kapabilitas, sedangkan "Hydrogen Production" mungkin memerlukan pengembangan keahlian baru.',
      },
      {
        title: 'b. Potensi Pengembangan Intellectual Property',
        reason: 'Membandingkan potensi penciptaan dan perlindungan IP dari berbagai inovasi.',
        example:
          'Algoritma AI dalam "Predictive Maintenance Turbin" atau "Digital Twin" dapat dipatenkan dan menjadi aset intelektual bernilai dibandingkan inovasi proses operasional.',
      },
    ],
  },
];

export default frameworkSections;
