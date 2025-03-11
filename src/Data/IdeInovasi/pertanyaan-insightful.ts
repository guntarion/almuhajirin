// src/Data/IdeInovasi/pertanyaan-insightful.ts

export interface PertanyaanCategory {
  category: string;
  description: string;
  questions: string[];
}

const pertanyaanInsightful: PertanyaanCategory[] = [
  {
    category: 'Analisis Tren Teknologi dan Implementasi',
    description: 'Pertanyaan tentang tren dan penerapan teknologi di berbagai industri',
    questions: [
      'Bagaimana penerapan AI dan machine learning dalam ide-ide inovasi di industri energi dibandingkan dengan industri konstruksi?',
      'Apa teknologi terbaru yang paling banyak digunakan dalam solusi inovasi di berbagai sektor industri berdasarkan data yang tersedia?',
      'Bagaimana teknologi IoT diimplementasikan secara berbeda antara industri minyak & gas dengan industri konstruksi?',
      'Ide inovasi apa yang memiliki potensi integrasi teknologi paling komprehensif berdasarkan deskripsi yang ada?',
      'Bagaimana digital twin diterapkan pada berbagai sektor industri dan apa perbedaan implementasinya?',
    ],
  },
  {
    category: 'Dampak Finansial dan Analisis ROI',
    description: 'Pertanyaan terkait aspek keuangan dan pengembalian investasi',
    questions: [
      'Ide inovasi mana yang menawarkan potensi penghematan biaya terbesar dan bagaimana penghematan tersebut dicapai?',
      'Bagaimana rasio antara investasi teknologi dengan manfaat finansial untuk inovasi di sektor energi terbarukan?',
      'Ide-ide mana yang menunjukkan payback period tercepat berdasarkan proyeksi manfaat finansial yang dijelaskan?',
      'Apa pola umum dari komponen biaya yang dapat dihemat melalui inovasi teknologi di industri konstruksi?',
      'Bandingkan potensi keuntungan finansial antara inovasi yang berfokus pada efisiensi operasional versus inovasi yang menciptakan revenue stream baru.',
    ],
  },
  {
    category: 'Integrasi Lintas Sektor dan Aplikasi',
    description: 'Pertanyaan mengenai potensi lintas industri dan integrasi solusi',
    questions: [
      'Temukan ide-ide yang memiliki potensi aplikasi lintas industri dan jelaskan bagaimana adaptasinya bisa dilakukan.',
      'Bagaimana teknologi blockchain dapat diimplementasikan untuk mengintegrasikan berbagai ide inovasi dalam energi terbarukan?',
      'Identifikasi teknologi inti yang bisa menjembatani industri konstruksi dengan industri energi berdasarkan ide-ide yang ada.',
      'Bagaimana solusi berbasis cloud digunakan dalam berbagai ide inovasi dan apa pola pemanfaatannya?',
      'Ide mana yang memiliki potensi terbesar untuk menciptakan ekosistem inovasi yang saling terhubung?',
    ],
  },
  {
    category: 'Analisis Dampak Lingkungan dan Keberlanjutan',
    description: 'Pertanyaan terkait aspek lingkungan dan keberlanjutan',
    questions: [
      'Ide inovasi mana yang memberikan kontribusi terbesar terhadap pengurangan emisi karbon dan bagaimana cara mengukurnya?',
      'Bagaimana inovasi di sektor energi mendukung pencapaian target net-zero dan ekonomi sirkular?',
      'Bandingkan pendekatan berbeda dalam menangani isu keberlanjutan antara industri konstruksi dan industri energi.',
      'Bagaimana teknologi dapat mengoptimalkan penggunaan sumber daya alam dalam berbagai ide inovasi yang ada?',
      'Identifikasi ide-ide yang berpotensi memberikan multiple environmental benefits sekaligus.',
    ],
  },
  {
    category: 'Transformasi Proses Bisnis dan Operasional',
    description: 'Pertanyaan tentang perubahan proses bisnis dan operasional',
    questions: [
      'Bagaimana ide-ide inovasi mengubah model bisnis konvensional menjadi model yang lebih adaptif dan data-driven?',
      'Ide mana yang menunjukkan transformasi paling radikal dari proses manual ke proses otomatis dan apa implikasinya?',
      'Bandingkan pendekatan reaktif vs proaktif dalam manajemen aset berdasarkan berbagai ide inovasi yang tersedia.',
      'Ide inovasi mana yang memiliki potensi terbesar untuk mengubah seluruh value chain industri terkait?',
      'Bagaimana pergeseran dari pendekatan terpusat ke pendekatan terdistribusi terjadi dalam ide-ide inovasi energi?',
    ],
  },
  {
    category: 'Skala Implementasi dan Potensi Disrupsi',
    description: 'Pertanyaan mengenai implementasi skala besar dan potensi disrupsi',
    questions: [
      'Identifikasi inovasi yang memiliki barrier to entry terendah namun dampak transformasional tertinggi.',
      'Bagaimana skala implementasi (dari pilot project hingga full-scale) dibahas dalam berbagai ide inovasi?',
      'Ide mana yang memiliki potensi disrupsi terbesar terhadap industri konvensional berdasarkan manfaat yang dijelaskan?',
      'Bandingkan ide-ide yang berfokus pada optimasi sistem yang ada versus ide-ide yang menciptakan paradigma baru.',
      'Identifikasi faktor-faktor kritis yang menentukan keberhasilan implementasi skala besar untuk ide-ide inovasi terpilih.',
    ],
  },
];

export default pertanyaanInsightful;
