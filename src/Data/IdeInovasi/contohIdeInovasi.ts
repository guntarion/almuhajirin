// File: src/Data/IdeInovasi/contohIdeInovasi.ts
import { IIdeInovasi } from '../../models/IdeInovasi';
import mongoose from 'mongoose';

const contohIdeInovasiSurveyor: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Pengembangan Sistem Survei Berbasis Drone dan AI',
    namaPenggagas: 'Andi Prasetyo',
    nip: '1234567890123456',
    posisiJabatan: 'Surveyor',
  },
  deskripsiPermasalahan:
    'Proses survei tanah di lokasi proyek sering kali memakan waktu lama dan memerlukan banyak sumber daya manusia. Selain itu, penggunaan alat tradisional seperti Total Station memiliki keterbatasan dalam hal akurasi pada area yang sulit dijangkau atau berbahaya. Hal ini dapat menyebabkan penundaan proyek dan meningkatkan risiko keselamatan kerja.',
  dampakPermasalahan:
    'Keterlambatan dalam proses survei dapat menghambat progres proyek secara keseluruhan. Selain itu, biaya operasional survei menjadi lebih tinggi karena membutuhkan tenaga kerja tambahan dan waktu yang lebih lama. Risiko keselamatan pekerja juga meningkat terutama di area yang sulit diakses.',
  deskripsiIde:
    'Mengembangkan sistem survei berbasis drone yang dilengkapi dengan teknologi AI untuk pemetaan dan analisis data secara otomatis. Drone akan digunakan untuk mengambil gambar udara dan data topografi, kemudian AI akan memproses data tersebut untuk menghasilkan peta digital yang presisi. Sistem ini dapat diintegrasikan dengan software CAD/GIS untuk mempermudah analisis dan perencanaan konstruksi.',
  keunggulanIde:
    '1. Mempercepat proses survei hingga 50% dibandingkan metode tradisional.\n2. Meningkatkan akurasi data dengan teknologi AI.\n3. Mengurangi risiko keselamatan kerja karena tidak perlu mengirim tim survei ke area berbahaya.\n4. Biaya operasional survei dapat dikurangi secara signifikan.',
  manfaatFinansial:
    'Dengan penghematan waktu dan tenaga kerja, biaya survei dapat dikurangi sebesar 30-40%. Selain itu, penggunaan drone dan AI dapat mengurangi kebutuhan peralatan survei tradisional yang mahal.',
  manfaatNonFinansial:
    '1. Peningkatan efisiensi dan produktivitas tim survei.\n2. Penurunan risiko keselamatan kerja di area sulit dijangkau.\n3. Peningkatan akurasi data survei yang mendukung perencanaan konstruksi yang lebih baik.\n4. Pengurangan dampak lingkungan karena minimnya intervensi fisik di lapangan.',
  userId: new mongoose.Types.ObjectId('67a1bba2e6dc979e7747de2f'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiCostController: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Implementasi Sistem Monitoring Biaya Proyek Berbasis Dashboard Real-Time',
    namaPenggagas: 'Budi Santoso',
    nip: '9876543210987654',
    posisiJabatan: 'Cost Controller',
  },
  deskripsiPermasalahan:
    'Pemantauan biaya proyek saat ini masih dilakukan secara manual dengan menggunakan spreadsheet, yang rentan terhadap kesalahan input data dan keterlambatan dalam pelaporan. Hal ini menyebabkan kurangnya transparansi dan kontrol terhadap anggaran proyek.',
  dampakPermasalahan:
    'Kesalahan dalam pelaporan biaya dapat menyebabkan pembengkakan anggaran yang tidak terdeteksi hingga tahap akhir proyek. Selain itu, keterlambatan dalam identifikasi masalah biaya dapat menghambat pengambilan keputusan yang tepat waktu.',
  deskripsiIde:
    'Mengembangkan dashboard real-time yang terintegrasi dengan sistem ERP (Enterprise Resource Planning) untuk memantau biaya proyek secara otomatis. Dashboard ini akan menampilkan data biaya aktual vs anggaran, tren pengeluaran, dan prediksi biaya akhir proyek. Data akan diperbarui secara real-time dari sumber seperti vendor, subkontraktor, dan tim lapangan.',
  keunggulanIde:
    '1. Pemantauan biaya proyek secara real-time.\n2. Mengurangi kesalahan input data dengan otomatisasi.\n3. Meningkatkan transparansi dan akuntabilitas dalam pengelolaan anggaran.\n4. Memungkinkan pengambilan keputusan yang lebih cepat dan tepat.',
  manfaatFinansial:
    'Dengan pengendalian biaya yang lebih baik, proyek dapat menghemat hingga 15-20% dari anggaran yang dialokasikan. Selain itu, pengurangan kesalahan input data dapat menghindari pembengkakan biaya tak terduga.',
  manfaatNonFinansial:
    '1. Peningkatan kolaborasi antara tim proyek dan manajemen.\n2. Peningkatan akurasi data biaya proyek.\n3. Pengambilan keputusan yang lebih cepat dan efektif.\n4. Peningkatan kepuasan klien karena transparansi anggaran.',
  userId: new mongoose.Types.ObjectId('67a4cb5debb9ca7a9741caff'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiSafetyOfficer: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Penerapan Sistem Pelaporan Insiden Keselamatan Berbasis Aplikasi Mobile',
    namaPenggagas: 'Rina Wijaya',
    nip: '1122334455667788',
    posisiJabatan: 'Safety Officer',
  },
  deskripsiPermasalahan:
    'Pelaporan insiden keselamatan kerja sering kali tertunda karena proses manual yang memakan waktu. Selain itu, kurangnya aksesibilitas alat pelaporan membuat pekerja enggan melaporkan insiden kecil yang dapat berpotensi menjadi besar.',
  dampakPermasalahan:
    'Insiden kecil yang tidak dilaporkan dapat berkembang menjadi masalah besar yang membahayakan keselamatan pekerja dan proyek. Selain itu, keterlambatan pelaporan menghambat tindakan pencegahan yang cepat.',
  deskripsiIde:
    'Mengembangkan aplikasi mobile untuk pelaporan insiden keselamatan secara real-time. Aplikasi ini akan memungkinkan pekerja melaporkan insiden langsung dari lokasi proyek dengan foto, video, dan deskripsi singkat. Data akan langsung tersinkronisasi ke dashboard manajemen untuk tindakan cepat.',
  keunggulanIde:
    '1. Pelaporan insiden lebih cepat dan mudah.\n2. Data insiden lebih lengkap dengan dukungan foto dan video.\n3. Tindakan pencegahan dapat dilakukan lebih cepat.\n4. Meningkatkan partisipasi pekerja dalam menjaga keselamatan.',
  manfaatFinansial:
    'Dengan penanganan insiden yang lebih cepat, biaya akibat kecelakaan kerja dapat dikurangi hingga 25%. Selain itu, pengurangan downtime proyek dapat meningkatkan produktivitas.',
  manfaatNonFinansial:
    '1. Peningkatan kesadaran keselamatan di kalangan pekerja.\n2. Pengurangan risiko kecelakaan kerja.\n3. Peningkatan reputasi perusahaan sebagai tempat kerja yang aman.',
  userId: new mongoose.Types.ObjectId('67a4cb75ebb9ca7a9741cb01'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiAdministrativeStaff: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Digitalisasi Dokumen Administratif Proyek dengan Sistem Cloud-Based',
    namaPenggagas: 'Siti Rahma',
    nip: '2233445566778899',
    posisiJabatan: 'Administrative Staff',
  },
  deskripsiPermasalahan:
    'Pengelolaan dokumen administratif proyek masih dilakukan secara manual dengan penyimpanan fisik, yang rentan terhadap kerusakan atau kehilangan. Selain itu, akses dokumen sering kali terbatas bagi tim yang bekerja di lapangan.',
  dampakPermasalahan:
    'Kehilangan dokumen penting dapat menyebabkan penundaan proyek dan ketidaksesuaian dalam pelaporan. Selain itu, akses terbatas memperlambat komunikasi antara tim lapangan dan manajemen.',
  deskripsiIde:
    'Mengimplementasikan sistem cloud-based untuk pengelolaan dokumen administratif proyek. Sistem ini memungkinkan penyimpanan, pencarian, dan berbagi dokumen secara digital dengan akses real-time dari mana saja. Fitur keamanan seperti enkripsi dan kontrol akses akan diterapkan untuk melindungi data sensitif.',
  keunggulanIde:
    '1. Dokumen lebih aman dan mudah diakses.\n2. Mengurangi risiko kehilangan dokumen fisik.\n3. Meningkatkan efisiensi dalam pengelolaan dokumen.\n4. Mendukung kolaborasi tim yang lebih baik.',
  manfaatFinansial:
    'Penghematan biaya penyimpanan dokumen fisik dan pengurangan waktu dalam pencarian dokumen dapat menghemat hingga 10% dari biaya administrasi proyek.',
  manfaatNonFinansial:
    '1. Peningkatan produktivitas tim administrasi.\n2. Peningkatan transparansi dan akuntabilitas.\n3. Pengurangan dampak lingkungan dengan minimnya penggunaan kertas.',
  userId: new mongoose.Types.ObjectId('67a4cb82ebb9ca7a9741cb03'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiHeavyEquipmentOperator: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Penerapan Teknologi IoT untuk Pemantauan Kondisi Alat Berat',
    namaPenggagas: 'Ahmad Fauzi',
    nip: '3344556677889900',
    posisiJabatan: 'Heavy Equipment Operator',
  },
  deskripsiPermasalahan:
    'Pemantauan kondisi alat berat saat ini masih dilakukan secara manual dengan inspeksi rutin. Hal ini sering kali tidak efektif karena kerusakan kecil tidak terdeteksi hingga menyebabkan kerusakan besar.',
  dampakPermasalahan:
    'Kerusakan besar pada alat berat dapat menyebabkan downtime yang lama dan biaya perbaikan yang tinggi. Selain itu, inspeksi manual memakan waktu dan tenaga kerja tambahan.',
  deskripsiIde:
    'Mengimplementasikan teknologi IoT (Internet of Things) untuk memantau kondisi alat berat secara real-time. Sensor IoT akan dipasang pada alat berat untuk memantau parameter seperti suhu mesin, tekanan oli, dan tingkat bahan bakar. Data akan dikirim ke dashboard untuk analisis dan peringatan dini jika ada potensi kerusakan.',
  keunggulanIde:
    '1. Deteksi dini kerusakan alat berat.\n2. Pengurangan downtime alat berat.\n3. Pemeliharaan alat berat lebih efisien.\n4. Penghematan biaya perawatan dan perbaikan.',
  manfaatFinansial:
    'Dengan deteksi dini kerusakan, biaya perbaikan dapat dikurangi hingga 30%. Selain itu, pengurangan downtime dapat meningkatkan produktivitas proyek.',
  manfaatNonFinansial:
    '1. Peningkatan umur alat berat.\n2. Pengurangan risiko kecelakaan akibat kerusakan alat.\n3. Peningkatan efisiensi operasional lapangan.',
  userId: new mongoose.Types.ObjectId('67a4cb8cebb9ca7a9741cb05'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiConstructionManager: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Pengembangan Sistem Manajemen Proyek Terpadu dengan Fitur Kolaborasi Tim',
    namaPenggagas: 'Dedi Kurniawan',
    nip: '4455667788990011',
    posisiJabatan: 'Construction Manager',
  },
  deskripsiPermasalahan:
    'Manajemen proyek saat ini masih menggunakan beberapa platform yang terpisah untuk komunikasi, pelaporan, dan pengelolaan jadwal. Hal ini menyebabkan kurangnya koordinasi antar tim dan keterlambatan dalam pengambilan keputusan.',
  dampakPermasalahan:
    'Kurangnya koordinasi antar tim dapat menyebabkan penundaan proyek dan ketidaksesuaian dalam pelaksanaan pekerjaan. Selain itu, pengambilan keputusan menjadi lambat karena data tersebar di berbagai platform.',
  deskripsiIde:
    'Mengembangkan sistem manajemen proyek terpadu yang mencakup fitur kolaborasi tim, pelaporan, pengelolaan jadwal, dan monitoring progres. Sistem ini akan menjadi satu platform untuk semua kebutuhan manajemen proyek, dengan antarmuka yang user-friendly dan integrasi real-time.',
  keunggulanIde:
    '1. Koordinasi antar tim lebih efektif.\n2. Pengambilan keputusan lebih cepat.\n3. Data proyek lebih terpusat dan mudah diakses.\n4. Peningkatan transparansi dan akuntabilitas.',
  manfaatFinansial:
    'Dengan pengelolaan proyek yang lebih efisien, biaya operasional proyek dapat dikurangi hingga 10%. Selain itu, pengurangan penundaan proyek dapat meningkatkan pendapatan.',
  manfaatNonFinansial:
    '1. Peningkatan produktivitas tim proyek.\n2. Peningkatan kepuasan klien.\n3. Pengurangan stres kerja karena koordinasi yang lebih baik.',
  userId: new mongoose.Types.ObjectId('67a4cd11ebb9ca7a9741cb07'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiEnvironmentalOfficer: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Implementasi Sistem Monitoring Lingkungan Berbasis IoT',
    namaPenggagas: 'Rina Kartika',
    nip: '5566778899001122',
    posisiJabatan: 'Environmental Officer',
  },
  deskripsiPermasalahan:
    'Monitoring dampak lingkungan di lokasi proyek sering kali dilakukan secara manual, yang memakan waktu dan tidak real-time. Hal ini menyebabkan potensi pelanggaran regulasi lingkungan karena ketidakmampuan mendeteksi masalah secara dini.',
  dampakPermasalahan:
    'Pelanggaran regulasi lingkungan dapat mengakibatkan sanksi hukum, denda, atau bahkan penghentian proyek. Selain itu, kerusakan lingkungan yang tidak terdeteksi dapat berdampak negatif pada ekosistem lokal.',
  deskripsiIde:
    'Mengembangkan sistem monitoring lingkungan berbasis IoT untuk memantau parameter seperti kualitas udara, kebisingan, dan limbah secara real-time. Data akan dikirim ke dashboard manajemen untuk analisis dan tindakan cepat jika ada pelanggaran batas aman.',
  keunggulanIde:
    '1. Pemantauan lingkungan secara real-time.\n2. Deteksi dini potensi pelanggaran regulasi.\n3. Pengurangan risiko sanksi hukum dan denda.\n4. Meningkatkan reputasi perusahaan sebagai pelaku konstruksi ramah lingkungan.',
  manfaatFinansial:
    'Dengan pengelolaan lingkungan yang lebih baik, biaya denda dan sanksi hukum dapat dihindari. Selain itu, efisiensi dalam pemantauan lingkungan dapat menghemat hingga 15% dari anggaran lingkungan.',
  manfaatNonFinansial:
    '1. Peningkatan kepatuhan terhadap regulasi lingkungan.\n2. Pengurangan dampak negatif pada ekosistem lokal.\n3. Peningkatan reputasi perusahaan di mata masyarakat dan regulator.',
  userId: new mongoose.Types.ObjectId('67ab5c2d0f0d8a0461d7ff26'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiLegalAdvisor: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Pengembangan Knowledge Base Hukum untuk Proyek Konstruksi',
    namaPenggagas: 'Ahmad Rizki',
    nip: '6677889900112233',
    posisiJabatan: 'Legal Advisor',
  },
  deskripsiPermasalahan:
    'Akses informasi hukum terkait proyek konstruksi sering kali tersebar di berbagai dokumen dan platform, yang membuat sulit untuk menemukan referensi yang tepat saat dibutuhkan. Hal ini dapat menyebabkan penundaan dalam pengambilan keputusan hukum.',
  dampakPermasalahan:
    'Kurangnya akses cepat ke informasi hukum dapat menyebabkan pelanggaran kontrak atau regulasi, yang berpotensi mengakibatkan sengketa hukum dan kerugian finansial.',
  deskripsiIde:
    'Mengembangkan knowledge base hukum digital yang terpusat untuk proyek konstruksi. Knowledge base ini mencakup regulasi, kontrak, dan kasus hukum terkait konstruksi dengan fitur pencarian cepat dan akurat. Informasi akan diperbarui secara berkala oleh tim legal.',
  keunggulanIde:
    '1. Akses cepat ke informasi hukum yang relevan.\n2. Mengurangi risiko pelanggaran kontrak atau regulasi.\n3. Mendukung pengambilan keputusan hukum yang lebih cepat.\n4. Meningkatkan efisiensi kerja tim legal.',
  manfaatFinansial:
    'Dengan pengelolaan informasi hukum yang lebih baik, biaya sengketa hukum dapat dikurangi hingga 20%. Selain itu, penghematan waktu dalam pencarian informasi dapat meningkatkan produktivitas.',
  manfaatNonFinansial:
    '1. Peningkatan kepatuhan terhadap regulasi hukum.\n2. Pengurangan risiko sengketa hukum.\n3. Peningkatan kolaborasi antara tim legal dan proyek.',
  userId: new mongoose.Types.ObjectId('67ac6113fa562071b5daad94'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiAccountant: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Implementasi Sistem Akuntansi Otomatis dengan Integrasi ERP',
    namaPenggagas: 'Siti Nurhaliza',
    nip: '7788990011223344',
    posisiJabatan: 'Accountant',
  },
  deskripsiPermasalahan:
    'Proses akuntansi saat ini masih dilakukan secara manual dengan spreadsheet, yang rentan terhadap kesalahan input data dan keterlambatan dalam pelaporan keuangan. Hal ini menyebabkan kurangnya transparansi dan kontrol terhadap arus kas proyek.',
  dampakPermasalahan:
    'Kesalahan dalam pelaporan keuangan dapat menyebabkan pembengkakan anggaran dan ketidaksesuaian laporan keuangan. Selain itu, keterlambatan dalam identifikasi masalah keuangan dapat menghambat pengambilan keputusan.',
  deskripsiIde:
    'Mengimplementasikan sistem akuntansi otomatis yang terintegrasi dengan ERP (Enterprise Resource Planning) untuk memproses transaksi keuangan secara real-time. Sistem ini akan menghasilkan laporan keuangan otomatis, termasuk arus kas, laba rugi, dan neraca.',
  keunggulanIde:
    '1. Pengolahan data keuangan lebih cepat dan akurat.\n2. Laporan keuangan tersedia secara real-time.\n3. Mengurangi risiko kesalahan input data.\n4. Meningkatkan transparansi dan akuntabilitas keuangan.',
  manfaatFinansial:
    'Dengan pengelolaan keuangan yang lebih baik, biaya operasional akuntansi dapat dikurangi hingga 25%. Selain itu, pengurangan kesalahan input data dapat menghindari pembengkakan biaya tak terduga.',
  manfaatNonFinansial:
    '1. Peningkatan efisiensi kerja tim akuntansi.\n2. Peningkatan akurasi laporan keuangan.\n3. Pengambilan keputusan keuangan yang lebih cepat dan efektif.',
  userId: new mongoose.Types.ObjectId('67ac61ea1fc4c1d2b716f201'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiLogisticsCoordinator: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Optimalisasi Rute Pengiriman Material dengan Algoritma AI',
    namaPenggagas: 'Budi Santoso',
    nip: '8899001122334455',
    posisiJabatan: 'Logistics Coordinator',
  },
  deskripsiPermasalahan:
    'Pengiriman material ke lokasi proyek sering kali mengalami keterlambatan karena rute yang tidak optimal. Hal ini menyebabkan penundaan proyek dan meningkatkan biaya logistik.',
  dampakPermasalahan:
    'Keterlambatan pengiriman material dapat menghambat progres proyek secara keseluruhan. Selain itu, biaya logistik menjadi lebih tinggi karena penggunaan rute yang tidak efisien.',
  deskripsiIde:
    'Menggunakan algoritma AI untuk mengoptimalkan rute pengiriman material berdasarkan data lalu lintas, cuaca, dan kondisi jalan. Sistem ini akan memberikan rekomendasi rute terbaik kepada pengemudi dan memperbarui rute secara real-time jika ada perubahan kondisi.',
  keunggulanIde:
    '1. Pengiriman material lebih cepat dan efisien.\n2. Mengurangi biaya logistik.\n3. Mengurangi risiko keterlambatan pengiriman.\n4. Meningkatkan efisiensi operasional logistik.',
  manfaatFinansial:
    'Dengan pengoptimalan rute, biaya logistik dapat dikurangi hingga 20%. Selain itu, pengurangan downtime proyek dapat meningkatkan produktivitas.',
  manfaatNonFinansial:
    '1. Peningkatan kepuasan klien karena pengiriman tepat waktu.\n2. Pengurangan dampak lingkungan karena penggunaan bahan bakar yang lebih efisien.\n3. Peningkatan efisiensi tim logistik.',
  userId: new mongoose.Types.ObjectId('67ac63671fc4c1d2b716f205'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const contohIdeInovasiWarehouseManager: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Implementasi Sistem Manajemen Inventaris Berbasis RFID',
    namaPenggagas: 'Wawan Kurniawan',
    nip: '9900112233445566',
    posisiJabatan: 'Warehouse Manager',
  },
  deskripsiPermasalahan:
    'Pengelolaan inventaris gudang saat ini masih dilakukan secara manual dengan barcode atau pencatatan fisik, yang rentan terhadap kesalahan dan keterlambatan dalam pelacakan barang.',
  dampakPermasalahan:
    'Kesalahan dalam pelacakan inventaris dapat menyebabkan kekurangan material di lokasi proyek atau kelebihan stok yang tidak diperlukan. Selain itu, proses pencarian barang menjadi lebih lambat.',
  deskripsiIde:
    'Mengimplementasikan sistem manajemen inventaris berbasis RFID (Radio Frequency Identification) untuk melacak barang secara otomatis dan real-time. Sistem ini akan memungkinkan pemindaian massal barang tanpa kontak langsung dan memberikan update inventaris secara otomatis ke database.',
  keunggulanIde:
    '1. Pelacakan inventaris lebih cepat dan akurat.\n2. Mengurangi risiko kehilangan barang.\n3. Mengoptimalkan penggunaan ruang gudang.\n4. Meningkatkan efisiensi operasional gudang.',
  manfaatFinansial:
    'Dengan pengelolaan inventaris yang lebih baik, biaya penyimpanan dan kehilangan barang dapat dikurangi hingga 15%. Selain itu, pengurangan waktu dalam pencarian barang dapat meningkatkan produktivitas.',
  manfaatNonFinansial:
    '1. Peningkatan akurasi data inventaris.\n2. Pengurangan risiko kekurangan atau kelebihan stok.\n3. Peningkatan efisiensi tim gudang.',
  userId: new mongoose.Types.ObjectId('67ac65561fc4c1d2b716f20b'),
  createdAt: new Date(),
  updatedAt: new Date(),
};

// Energy Industry Innovations

const smartGridOptimization: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Smart Grid Optimization dengan AI untuk Distribusi Energi',
    namaPenggagas: 'Dewi Pratiwi',
    nip: '7701234567890123',
    posisiJabatan: 'Senior Engineer, Grid Systems',
  },
  deskripsiPermasalahan:
    'Distribusi energi saat ini masih belum optimal dengan banyak terjadinya bottleneck pada jaringan distribusi dan load balancing yang tidak efisien. Saat beban puncak, seringkali terjadi pemadaman bergilir dan kualitas daya yang menurun, sementara pada jam lain terjadi kelebihan daya yang terbuang.',
  dampakPermasalahan:
    'Ketidakefisienan distribusi mengakibatkan kerugian finansial sekitar Rp 50 miliar per tahun dan mengurangi kepuasan pelanggan. Beban puncak yang tidak terkendali mengharuskan investasi infrastruktur tambahan yang mahal, sementara utilisasi aset pada jam lainnya rendah.',
  deskripsiIde:
    'Mengembangkan sistem optimasi smart grid berbasis AI yang dapat memprediksi beban, mengoptimalkan aliran daya secara real-time, dan menyeimbangkan distribusi energi berdasarkan prediksi konsumsi. Sistem akan mengintegrasikan data dari berbagai sumber termasuk cuaca, pola konsumsi historis, dan acara-acara khusus untuk mengoptimalkan distribusi energi dan mencegah pemadaman.',
  keunggulanIde:
    '1. Prediksi beban dengan akurasi 95% menggunakan machine learning.\n2. Optimasi distribusi real-time untuk mengurangi losses hingga 30%.\n3. Load balancing otomatis yang mengurangi beban puncak hingga 25%.\n4. Integrasi dengan sumber energi terbarukan untuk maksimalisasi pemanfaatan.',
  manfaatFinansial:
    'Implementasi sistem ini diproyeksikan menghemat Rp 35 miliar per tahun dari pengurangan kerugian energi dan Rp 20 miliar dari penundaan investasi infrastruktur. ROI diperkirakan 400% dalam 3 tahun pertama.',
  manfaatNonFinansial:
    '1. Peningkatan reliability distribusi hingga 99.95%.\n2. Pengurangan emisi karbon sekitar 45,000 ton per tahun.\n3. Peningkatan utilisasi sumber energi terbarukan hingga 40%.\n4. Peningkatan kepuasan pelanggan dan reputasi perusahaan.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da01'),
  createdAt: new Date('2024-01-05'),
  updatedAt: new Date('2024-01-15'),
};

const predictiveMaintenanceTurbine: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Prediktif Maintenance Turbin Gas Berbasis IoT dan Machine Learning',
    namaPenggagas: 'Arief Wicaksono',
    nip: '7712345678901234',
    posisiJabatan: 'Reliability Engineer',
  },
  deskripsiPermasalahan:
    'Pemeliharaan turbin gas saat ini dilakukan secara terjadwal (preventive) atau ketika terjadi kerusakan (corrective). Pendekatan ini menyebabkan downtime yang tidak perlu atau kegagalan tak terduga yang mengganggu produksi listrik dan memerlukan biaya perbaikan tinggi.',
  dampakPermasalahan:
    'Kegagalan turbin mendadak menyebabkan kehilangan produksi senilai Rp 500 juta per hari, sementara pemeliharaan terjadwal yang terlalu sering mengakibatkan biaya Rp 2 miliar per tahun dan pengurangan umur komponen yang tidak perlu.',
  deskripsiIde:
    'Mengembangkan sistem prediktif maintenance berbasis IoT dengan memasang sensor pada komponen-komponen kritis turbin gas untuk memonitor kondisi operasi secara real-time. Data dari sensor akan dianalisis menggunakan algoritma machine learning untuk memprediksi potensi kegagalan sebelum terjadi dan merekomendasikan jadwal pemeliharaan yang optimal.',
  keunggulanIde:
    '1. Deteksi dini potensi kegagalan dengan akurasi 92%.\n2. Penentuan waktu pemeliharaan optimal berdasarkan kondisi aktual, bukan jadwal tetap.\n3. Dashboards real-time untuk monitoring kesehatan turbin.\n4. Integrasi dengan sistem manajemen aset perusahaan.',
  manfaatFinansial:
    'Sistem ini diproyeksikan mengurangi biaya pemeliharaan sebesar 35%, mengurangi downtime yang tidak direncanakan sebesar 75%, dan memperpanjang umur komponen turbin hingga 20%. Total penghematan diperkirakan Rp 15 miliar per tahun.',
  manfaatNonFinansial:
    '1. Peningkatan keandalan dan stabilitas produksi listrik.\n2. Pengurangan risiko keselamatan terkait kegagalan turbin mendadak.\n3. Optimasi sumber daya tim pemeliharaan.\n4. Pengembangan kapabilitas analitik data dalam perusahaan.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da02'),
  createdAt: new Date('2024-01-10'),
  updatedAt: new Date('2024-01-23'),
};

const digitalTwinRefinery: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Digital Twin untuk Optimasi Proses dan Simulasi Kilang Minyak',
    namaPenggagas: 'Budi Setiawan',
    nip: '7723456789012345',
    posisiJabatan: 'Process Engineer',
  },
  deskripsiPermasalahan:
    'Optimasi kilang minyak saat ini bergantung pada model statis dan pengalaman operator yang subyektif. Hal ini menyebabkan inefisiensi proses, ketidakmampuan beradaptasi dengan cepat terhadap perubahan kualitas feedstock, dan kesulitan dalam pengambilan keputusan yang optimal ketika terjadi gangguan.',
  dampakPermasalahan:
    'Inefisiensi proses menyebabkan yield produk yang lebih rendah 3-5% dari potensi optimal, konsumsi energi berlebih senilai Rp 30 miliar per tahun, dan kerugian waktu produksi hingga 15 hari per tahun akibat penyesuaian proses yang tidak efisien.',
  deskripsiIde:
    'Mengembangkan digital twin kilang minyak yang mereplikasi seluruh proses secara virtual dan real-time. Digital twin ini mengintegrasikan data operasional, desain pabrik, dan model fisik-kimia untuk simulasi, optimasi, dan prediksi perilaku kilang dalam berbagai skenario. Teknologi ini memungkinkan pengujian virtual untuk optimasi proses tanpa risiko operasional.',
  keunggulanIde:
    '1. Simulasi real-time untuk optimasi parameter proses.\n2. Prediksi performa kilang dengan berbagai jenis feedstock.\n3. What-if analysis untuk evaluasi modifikasi proses tanpa downtime.\n4. Training operator dalam lingkungan virtual yang realistis.',
  manfaatFinansial:
    'Peningkatan yield produk sebesar 2-3% yang setara dengan Rp 80 miliar per tahun, pengurangan konsumsi energi hingga 15% senilai Rp 25 miliar, dan pengurangan downtime hingga 30% yang berkontribusi pada penghematan Rp 40 miliar per tahun.',
  manfaatNonFinansial:
    '1. Peningkatan keselamatan melalui prediksi dan pencegahan kondisi abnormal.\n2. Pengurangan emisi karbon hingga 20%.\n3. Percepatan upskilling operator dan insinyur proses.\n4. Dokumentasi know-how proses yang komprehensif untuk transfer pengetahuan.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da03'),
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-28'),
};

const batteryEnergyStorage: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Penyimpanan Energi Baterai Skala Utilitas dengan AI Management',
    namaPenggagas: 'Nina Kusumawardani',
    nip: '7734567890123456',
    posisiJabatan: 'Energy Storage Specialist',
  },
  deskripsiPermasalahan:
    'Penetrasi energi terbarukan yang semakin tinggi menciptakan tantangan stabilitas jaringan karena sifatnya yang intermiten. Saat ini, fluktuasi ini ditangani dengan spinning reserve dari pembangkit fosil yang mahal dan tidak efisien, sementara kelebihan produksi energi terbarukan sering terbuang.',
  dampakPermasalahan:
    'Biaya spinning reserve mencapai Rp 150 miliar per tahun, curtailment energi terbarukan menyebabkan kehilangan potensi pendapatan hingga Rp 75 miliar, dan ketidakstabilan frekuensi jaringan sering menyebabkan gangguan layanan yang merugikan konsumen dan industri.',
  deskripsiIde:
    'Mengembangkan sistem penyimpanan energi baterai skala utilitas (100 MW/400 MWh) yang dioptimalkan dengan algoritma AI untuk manajemen energi. Sistem ini akan menyerap kelebihan produksi energi terbarukan, menyediakan layanan stabilitas jaringan, dan melakukan arbitrase energi untuk memaksimalkan nilai ekonomis. AI akan memprediksi produksi energi terbarukan, beban jaringan, dan harga pasar untuk strategi charge/discharge optimal.',
  keunggulanIde:
    '1. Kapasitas penyimpanan 400 MWh dengan efisiensi round-trip 92%.\n2. Algoritma AI untuk optimasi charge/discharge berdasarkan prediksi produksi, beban, dan harga.\n3. Kemampuan memberikan multiple layanan jaringan (frequency regulation, spinning reserve, load shifting).\n4. Desain modular yang memungkinkan scaling dan relokasi.',
  manfaatFinansial:
    'Penghematan biaya spinning reserve Rp 120 miliar per tahun, pendapatan dari arbitrase energi Rp 90 miliar per tahun, dan pendapatan dari layanan ancillary Rp 60 miliar per tahun. Analisis NPV menunjukkan IRR 18% dengan payback period 5 tahun.',
  manfaatNonFinansial:
    '1. Peningkatan penetrasi energi terbarukan hingga 35% dari bauran energi.\n2. Pengurangan emisi CO2 sebesar 200,000 ton per tahun.\n3. Peningkatan stabilitas dan keandalan jaringan listrik.\n4. Pengembangan kapabilitas teknologi penyimpanan energi dalam negeri.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da04'),
  createdAt: new Date('2024-01-20'),
  updatedAt: new Date('2024-02-05'),
};

const solarForecastingAI: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Prediksi Produksi Energi Solar Berbasis AI dan Citra Satelit',
    namaPenggagas: 'Rini Widyastuti',
    nip: '7745678901234567',
    posisiJabatan: 'Renewable Energy Forecaster',
  },
  deskripsiPermasalahan:
    'Prediksi produksi energi dari pembangkit solar saat ini memiliki akurasi rendah karena ketergantungan pada prakiraan cuaca umum yang tidak spesifik lokasi. Ketidakakuratan prediksi mengakibatkan kesulitan dalam perencanaan operasi jaringan listrik dan kebutuhan cadangan yang lebih besar.',
  dampakPermasalahan:
    'Kesalahan prediksi rata-rata 20-30% menyebabkan biaya tambahan untuk spinning reserve sebesar Rp 60 miliar per tahun, penalti ketidakseimbangan di pasar energi sebesar Rp 45 miliar, dan pembatasan kapasitas solar yang dapat diintegrasikan ke jaringan.',
  deskripsiIde:
    'Mengembangkan sistem prediksi produksi energi solar dengan menggunakan AI yang mengintegrasikan data citra satelit real-time, prakiraan cuaca numerik resolusi tinggi, data historis produksi, dan informasi dari sensor ground-level. Sistem ini akan memberikan prediksi produksi dengan interval 5 menit hingga 48 jam ke depan dengan akurasi yang jauh lebih tinggi.',
  keunggulanIde:
    '1. Akurasi prediksi 15 menit ke depan sebesar 95% dan 24 jam sebesar 85%.\n2. Pembaruan prediksi otomatis setiap 5 menit berdasarkan citra satelit terkini.\n3. Pemetaan spasial detail dari ekspektasi produksi untuk setiap area solar farm.\n4. Integrasi langsung dengan sistem manajemen energi dan trading platform.',
  manfaatFinansial:
    'Pengurangan biaya spinning reserve sebesar Rp 40 miliar per tahun, pengurangan penalti ketidakseimbangan sebesar Rp 35 miliar, dan potensi peningkatan kapasitas solar yang dapat diintegrasikan hingga 30% tanpa infrastruktur tambahan.',
  manfaatNonFinansial:
    '1. Peningkatan stabilitas jaringan dengan integrasi energi terbarukan yang lebih tinggi.\n2. Pengurangan emisi karbon dari pembangkit cadangan.\n3. Pengembangan keahlian dalam forecasting energi terbarukan.\n4. Platform dapat dikembangkan untuk teknologi renewable lainnya seperti angin dan hidro.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da05'),
  createdAt: new Date('2024-01-25'),
  updatedAt: new Date('2024-02-10'),
};

const dronePipelineInspection: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Inspeksi Pipeline Otomatis Menggunakan Drone dan AI',
    namaPenggagas: 'Hendra Gunawan',
    nip: '7756789012345678',
    posisiJabatan: 'Pipeline Integrity Specialist',
  },
  deskripsiPermasalahan:
    'Inspeksi pipeline minyak dan gas saat ini dilakukan secara manual dengan mengirimkan tim ke lapangan atau menggunakan helicopter untuk area yang luas. Proses ini mahal, memakan waktu, berisiko tinggi bagi personel, dan tidak dapat mendeteksi masalah secara komprehensif dan dini.',
  dampakPermasalahan:
    'Biaya inspeksi manual mencapai Rp 5 miliar per 100 km pipeline per tahun, keterlambatan deteksi kebocoran kecil menyebabkan kerugian produk senilai Rp 20 miliar, dan risiko kecelakaan personel saat inspeksi di area berbahaya.',
  deskripsiIde:
    'Mengembangkan sistem inspeksi pipeline otomatis menggunakan drone yang dilengkapi dengan kamera termal, sensor gas, dan kamera optik resolusi tinggi. Drone akan mengikuti rute pre-programmed di sepanjang pipeline dan mengumpulkan data visual dan sensor. AI akan menganalisis data real-time untuk mendeteksi kebocoran, korosi, pertumbuhan vegetasi berlebih, aktivitas penggalian tidak sah, dan masalah integritas lainnya.',
  keunggulanIde:
    '1. Inspeksi otomatis tanpa risiko personel di lapangan.\n2. Deteksi kebocoran dan korosi dengan akurasi 98%.\n3. Interval inspeksi yang lebih sering (mingguan vs bulanan/tahunan).\n4. Dokumentasi digital komprehensif untuk analisis trend dan compliance.',
  manfaatFinansial:
    'Pengurangan biaya inspeksi hingga 70% (Rp 3.5 miliar per 100 km), pencegahan kehilangan produk senilai Rp 15 miliar melalui deteksi dini, dan penghematan biaya perbaikan darurat sekitar Rp 25 miliar melalui pemeliharaan preventif.',
  manfaatNonFinansial:
    '1. Pengurangan risiko keselamatan personel inpeksi.\n2. Minimalisasi dampak lingkungan dari kebocoran yang tidak terdeteksi.\n3. Peningkatan kepatuhan terhadap regulasi keselamatan.\n4. Database kondisi pipeline yang komprehensif untuk manajemen aset jangka panjang.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da06'),
  createdAt: new Date('2024-01-30'),
  updatedAt: new Date('2024-02-15'),
};

const blockchainEnergyTrading: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Platform Blockchain untuk Perdagangan Energi Terbarukan P2P',
    namaPenggagas: 'Fajar Ramadhan',
    nip: '7767890123456789',
    posisiJabatan: 'Energy Market Specialist',
  },
  deskripsiPermasalahan:
    'Prosumer energi (konsumen yang juga memproduksi energi, misalnya dengan solar panel) tidak memiliki mekanisme efisien untuk menjual kelebihan energi mereka. Sistem grid saat ini hanya memungkinkan penjualan ke utilitas dengan harga yang ditentukan sepihak dan proses administrasi yang kompleks.',
  dampakPermasalahan:
    'Potensi ekonomi dari excess produksi energi terbarukan skala kecil senilai Rp 500 miliar per tahun tidak termanfaatkan, adopsi energi terbarukan terhambat karena ROI yang lebih rendah, dan grid mengalami ketidakseimbangan karena ketiadaan insentif untuk produksi sesuai kebutuhan lokal.',
  deskripsiIde:
    'Mengembangkan platform blockchain yang memungkinkan perdagangan energi peer-to-peer secara langsung antara prosumer dan konsumen. Platform ini akan menggunakan smart contracts untuk transaksi otomatis, smart meters untuk pengukuran real-time, dan token energi yang mewakili produksi energi terbarukan. Pengguna dapat menjual, membeli, atau melelang energi mereka dengan harga yang ditentukan pasar.',
  keunggulanIde:
    '1. Transaksi peer-to-peer tanpa intermediari dengan biaya rendah.\n2. Smart contracts untuk eksekusi otomatis dan settlement instan.\n3. Traceability energi untuk sertifikasi asal energi terbarukan.\n4. Dynamic pricing berdasarkan supply-demand real-time.',
  manfaatFinansial:
    'Potensi pendapatan tambahan bagi prosumer hingga 30% dibanding feed-in tariff konvensional, pengurangan biaya energi bagi konsumen hingga 15%, dan penciptaan pasar baru dengan proyeksi nilai Rp 200 miliar dalam tahun pertama.',
  manfaatNonFinansial:
    '1. Percepatan adopsi energi terbarukan skala kecil.\n2. Demokratisasi pasar energi.\n3. Peningkatan efisiensi grid melalui insentif ekonomi.\n4. Pengurangan emisi karbon melalui peningkatan konsumsi energi terbarukan lokal.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da07'),
  createdAt: new Date('2024-02-05'),
  updatedAt: new Date('2024-02-20'),
};

const carbonCaptureML: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Optimasi Teknologi Carbon Capture Menggunakan Machine Learning',
    namaPenggagas: 'Laras Anggraini',
    nip: '7778901234567890',
    posisiJabatan: 'Carbon Management Engineer',
  },
  deskripsiPermasalahan:
    'Teknologi carbon capture saat ini memiliki efisiensi rendah dan biaya tinggi, dengan konsumsi energi yang signifikan untuk proses penangkapan dan regenerasi solven. Parameter operasi statis tidak dapat beradaptasi dengan variasi komposisi gas buang, yang menurunkan efektivitas dan ekonomis proses.',
  dampakPermasalahan:
    'Biaya penangkapan karbon mencapai $60-80 per ton CO2, konsumsi energi untuk proses mencapai 25-30% dari output pembangkit listrik, dan efisiensi penangkapan yang hanya 85-90% dalam kondisi fluktuatif.',
  deskripsiIde:
    'Mengembangkan sistem control berbasis machine learning untuk optimasi real-time parameter operasi carbon capture plant. Sistem akan memproses data dari berbagai sensor (komposisi gas, temperature, pressure, flow rates) dan secara otomatis menyesuaikan parameter operasi seperti solvent circulation rate, reboiler duty, dan absorber pressure untuk memaksimalkan efisiensi penangkapan dengan konsumsi energi minimal.',
  keunggulanIde:
    '1. Optimasi parameter operasi real-time berdasarkan kondisi aktual.\n2. Peningkatan efisiensi penangkapan hingga 95% dalam berbagai kondisi.\n3. Pengurangan konsumsi energi proses hingga 20%.\n4. Predictive maintenance untuk komponen sistem carbon capture.',
  manfaatFinansial:
    'Pengurangan biaya penangkapan karbon hingga $15 per ton CO2, pengurangan konsumsi energi yang setara dengan peningkatan revenue Rp 30 miliar per tahun untuk PLTU 500 MW, dan pengurangan downtime yang bernilai Rp 10 miliar per tahun.',
  manfaatNonFinansial:
    '1. Peningkatan jumlah CO2 yang tertangkap sebesar 10-15%.\n2. Pengurangan footprint karbon perusahaan secara signifikan.\n3. Teknologi yang dapat diterapkan pada industri lain (semen, baja, petrokimia).\n4. Positioning sebagai pionir teknologi carbon capture cerdas.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da08'),
  createdAt: new Date('2024-02-10'),
  updatedAt: new Date('2024-02-25'),
};

const virtualPowerPlant: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Virtual Power Plant untuk Agregasi dan Optimasi Distributed Energy Resources',
    namaPenggagas: 'Ivan Susanto',
    nip: '7789012345678901',
    posisiJabatan: 'Smart Grid Engineer',
  },
  deskripsiPermasalahan:
    'Sumber energi terdistribusi (DER) seperti solar rooftop, small wind, battery storage, dan flexible loads saat ini beroperasi secara independen tanpa koordinasi. Hal ini menyebabkan ketidakstabilan jaringan, penggunaan aset yang tidak optimal, dan ketidakmampuan DER untuk berpartisipasi dalam pasar energi yang membutuhkan skala lebih besar.',
  dampakPermasalahan:
    'Potensi kapasitas fleksibel 500 MW dari DER tidak termanfaatkan untuk grid services, prosumer tidak mendapatkan revenue stream tambahan senilai Rp 300 miliar per tahun, dan grid membutuhkan infrastruktur tambahan senilai Rp 2 triliun untuk menjaga stabilitas.',
  deskripsiIde:
    'Mengembangkan Virtual Power Plant (VPP) yang mengagregasi dan mengoptimalkan berbagai DER untuk beroperasi sebagai satu kesatuan pembangkit. VPP akan menggunakan AI untuk memprediksi kapasitas available, mengoptimalkan dispatch, dan berpartisipasi dalam berbagai pasar energi (energy, capacity, ancillary services). Sistem ini akan memberikan komunikasi dua arah dengan DER melalui cloud platform dan edge computing devices.',
  keunggulanIde:
    '1. Agregasi hingga 10,000 DER sebagai satu entitas yang dispatchable.\n2. Optimasi real-time berbasis AI untuk maksimalisasi nilai dan grid support.\n3. Partisipasi otomatis dalam multiple pasar energi.\n4. Pembagian revenue yang transparan melalui blockchain.',
  manfaatFinansial:
    'Pendapatan dari energy trading sebesar Rp 150 miliar per tahun, pendapatan dari ancillary services sebesar Rp 90 miliar per tahun, dan penghematan investasi grid sebesar Rp 300 miliar melalui penundaan penguatan infrastruktur.',
  manfaatNonFinansial:
    '1. Integrasi energi terbarukan yang lebih tinggi ke dalam grid.\n2. Peningkatan resiliensi sistem energi melalui sumber yang terdistribusi.\n3. Pemberdayaan konsumen untuk berpartisipasi aktif dalam sistem energi.\n4. Inovasi model bisnis dalam sektor energi.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da09'),
  createdAt: new Date('2024-02-15'),
  updatedAt: new Date('2024-03-01'),
};

const hydrogenProduction: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Produksi Hidrogen Hijau dengan Elektroliser Dinamis dan Integrasi Renewable',
    namaPenggagas: 'Maya Purnamasari',
    nip: '7790123456789012',
    posisiJabatan: 'Hydrogen Technology Specialist',
  },
  deskripsiPermasalahan:
    'Produksi hidrogen saat ini didominasi oleh proses berbasis fosil (steam methane reforming) yang menghasilkan emisi karbon tinggi. Produksi hidrogen hijau melalui elektrolisis masih terkendala biaya tinggi dan efisiensi rendah, terutama saat diintegrasikan dengan sumber energi terbarukan yang intermiten.',
  dampakPermasalahan:
    'Biaya produksi hidrogen hijau mencapai $5-6 per kg (vs $1-2 untuk gray hydrogen), utilisasi elektroliser yang rendah (30-40%) saat menggunakan renewable energy, dan ketidakmampuan memanfaatkan surplus energi terbarukan.',
  deskripsiIde:
    'Mengembangkan sistem produksi hidrogen hijau yang mengintegrasikan elektroliser PEM tekanan tinggi dengan direct coupling ke sumber energi terbarukan (solar dan angin) dan battery buffer. Sistem akan menggunakan AI untuk mengoptimalkan operasi elektroliser secara dinamis berdasarkan ketersediaan energi terbarukan, harga listrik grid, dan permintaan hidrogen. Komponen inovatif meliputi elektroliser yang dapat beroperasi dalam load partial, sistem power conditioning, dan penyimpanan hidrogen terintegrasi.',
  keunggulanIde:
    '1. Elektroliser dengan dynamic range 10-150% dan efisiensi tinggi.\n2. Optimasi operasi real-time berdasarkan availability renewable dan harga listrik.\n3. Prosedur shut down dan start up cepat untuk respons terhadap fluktuasi renewable.\n4. Integrasi dengan oxygen utilization untuk peningkatan ekonomis.',
  manfaatFinansial:
    'Pengurangan biaya produksi hidrogen hijau hingga $2 per kg, peningkatan utilisasi elektroliser hingga 70%, dan pendapatan tambahan dari grid services (load shifting, frequency response) senilai Rp 15 miliar per tahun untuk instalasi 10 MW.',
  manfaatNonFinansial:
    '1. Pengurangan emisi CO2 sebesar 9 kg per kg hidrogen dibandingkan metode konvensional.\n2. Enabling technology untuk dekarbonisasi sektor transportasi dan industri.\n3. Pengembangan kompetensi dalam ekonomi hidrogen.\n4. Kontribusi terhadap target net-zero nasional.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da10'),
  createdAt: new Date('2024-02-20'),
  updatedAt: new Date('2024-03-05'),
};

const energyTwinOilField: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Digital Twin dan AI untuk Optimasi Produksi Lapangan Minyak',
    namaPenggagas: 'Dimas Hariyanto',
    nip: '7701234567893456',
    posisiJabatan: 'Petroleum Engineer',
  },
  deskripsiPermasalahan:
    'Manajemen lapangan minyak saat ini menggunakan pendekatan reaktif dan model statis yang tidak dapat mengakomodasi perubahan dinamis reservoir dan kondisi operasi. Optimasi produksi dilakukan secara manual berdasarkan data sampling terbatas yang menyebabkan ketidakoptimalan dan keterlambatan respons.',
  dampakPermasalahan:
    'Production decline rate yang lebih cepat 2-3% dari potensi optimal, penggunaan energi untuk operasi yang 25% lebih tinggi dari benchmark, dan lost production opportunity sebesar 5-8% karena ketidakmampuan mengoptimalkan operasi secara real-time.',
  deskripsiIde:
    'Mengembangkan digital twin lapangan minyak yang mengintegrasikan data dari sensor downhole, surface facilities, dan model reservoir untuk simulasi dan optimasi real-time. Sistem ini akan menggunakan AI untuk memperbarui model reservoir secara kontinu, memprediksi perilaku sumur, dan merekomendasikan parameter operasi optimal untuk maksimalisasi produksi dan minimalisasi biaya. Digital twin akan mencakup model 3D komprehensif yang terhubung dengan data operasi aktual.',
  keunggulanIde:
    '1. Modeling reservoir dinamis yang update secara otomatis berdasarkan data produksi.\n2. Optimasi parameter operasi real-time (choke settings, gas injection rates, water handling).\n3. Predictive maintenance untuk ESP dan peralatan produksi lainnya.\n4. Simulasi skenario what-if untuk evaluasi strategi produksi jangka panjang.',
  manfaatFinansial:
    'Peningkatan produksi sebesar 4-6% yang setara dengan Rp 120 miliar per tahun untuk lapangan menengah, pengurangan biaya operasi sebesar 15% senilai Rp 60 miliar per tahun, dan pengurangan capex melalui optimasi workover dan well intervention senilai Rp 80 miliar.',
  manfaatNonFinansial:
    '1. Pengurangan emisi melalui optimasi penggunaan energi.\n2. Peningkatan pengetahuan reservoir melalui continuous learning models.\n3. Minimalisasi risiko HSE melalui deteksi dini abnormalitas.\n4. Pembangunan kapabilitas digital di industri minyak dan gas.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da11'),
  createdAt: new Date('2024-02-25'),
  updatedAt: new Date('2024-03-10'),
};

const geothermalDrillingAI: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Optimasi Pengeboran Panas Bumi Berbasis AI dan Real-time Data',
    namaPenggagas: 'Ratna Wijaya',
    nip: '7712345678904567',
    posisiJabatan: 'Drilling Engineer',
  },
  deskripsiPermasalahan:
    'Pengeboran panas bumi menghadapi tantangan unik seperti formasi keras, suhu tinggi, dan fluida korosif yang menyebabkan kegagalan peralatan, produktivitas sumur yang tidak optimal, dan biaya pengeboran yang tinggi. Pendekatan konvensional tidak dapat mengantisipasi permasalahan subsurface secara real-time.',
  dampakPermasalahan:
    'Biaya pengeboran 30-40% lebih tinggi dari target karena non-productive time, kegagalan mencapai zona produktif optimal pada 25% sumur, dan umur bit dan downhole tools yang lebih pendek 40% dari spesifikasi akibat kondisi ekstrem.',
  deskripsiIde:
    'Mengembangkan sistem real-time drilling optimization untuk panas bumi yang mengintegrasikan data dari measurement while drilling (MWD), logging while drilling (LWD), surface parameters, dan model geologi. AI akan menganalisis data secara real-time untuk mengoptimalkan parameter pengeboran (WOB, RPM, flow rate), memprediksi kondisi formasi di depan bit, dan memberikan peringatan dini untuk potensi masalah seperti lost circulation dan stuck pipe.',
  keunggulanIde:
    '1. Optimasi parameter pengeboran real-time untuk kondisi panas bumi yang kompleks.\n2. Deteksi dini zona produktif dan fractured berdasarkan minute drilling data.\n3. Prediksi dan pencegahan masalah downhole seperti lost circulation dan stuck pipe.\n4. Machine learning yang terus belajar dari setiap sumur untuk pengeboran berikutnya.',
  manfaatFinansial:
    'Pengurangan biaya pengeboran sebesar 20% yang setara dengan Rp 20 miliar per sumur, peningkatan produktivitas sumur sebesar 15-20% senilai Rp 100 miliar selama umur sumur, dan pengurangan non-productive time sebesar 35% yang berkontribusi pada penghematan Rp 15 miliar per sumur.',
  manfaatNonFinansial:
    '1. Peningkatan keselamatan operasi pengeboran.\n2. Pengurangan dampak lingkungan melalui pencegahan masalah seperti blowout dan lost circulation.\n3. Peningkatan knowledge reservoir panas bumi.\n4. Transfer teknologi dan keahlian untuk pengeboran geothermal.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da12'),
  createdAt: new Date('2024-03-01'),
  updatedAt: new Date('2024-03-15'),
};

const evChargingAI: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Smart EV Charging Network dengan AI Load Balancing dan Grid Integration',
    namaPenggagas: 'Andika Pratama',
    nip: '7723456789015678',
    posisiJabatan: 'E-Mobility Specialist',
  },
  deskripsiPermasalahan:
    'Pertumbuhan kendaraan listrik menciptakan tantangan bagi jaringan distribusi listrik, terutama saat peak demand. Infrastruktur charging saat ini tidak terintegrasi dengan grid management dan tidak memiliki kemampuan untuk mengoptimalkan charging berdasarkan kondisi grid, harga listrik, dan kebutuhan pengguna.',
  dampakPermasalahan:
    'Potensi overload pada trafo distribusi dengan penetrasi EV 15%, kebutuhan investasi grid strengthening sebesar Rp 5 triliun untuk mengakomodasi charging uncontrolled, dan pengalaman pengguna yang buruk dengan waktu tunggu panjang pada jam sibuk.',
  deskripsiIde:
    'Mengembangkan jaringan EV charging cerdas yang menggunakan AI untuk mengoptimalkan proses charging berdasarkan kondisi grid, harga energi, dan kebutuhan pengguna. Sistem akan mengintegrasikan stasiun charging dengan grid management system untuk load balancing, menerapkan smart scheduling berdasarkan user preferences, dan menggunakan vehicle-to-grid (V2G) untuk grid support pada saat diperlukan. Pengguna berinteraksi melalui mobile app yang memberikan insentif untuk charging pada waktu-waktu yang menguntungkan grid.',
  keunggulanIde:
    '1. Dynamic power allocation berdasarkan kondisi grid dan kebutuhan pengguna.\n2. Predictive charging demand untuk antisipasi kebutuhan infrastruktur.\n3. Vehicle-to-grid capability untuk mendukung grid saat peak demand.\n4. Integrasi dengan renewable energy untuk green charging.',
  manfaatFinansial:
    'Pengurangan kebutuhan investasi grid strengthening hingga 40% (Rp 2 triliun), pendapatan dari layanan grid support sebesar Rp 50 miliar per tahun untuk 1000 charging points, dan margin bisnis charging yang lebih tinggi 25% melalui optimasi biaya energi.',
  manfaatNonFinansial:
    '1. Fasilitasi adopsi kendaraan listrik yang lebih cepat.\n2. Pengurangan emisi karbon dari transportasi.\n3. Peningkatan stabilitas grid dengan integrasi EV yang terkelola.\n4. Pengalaman pengguna EV yang lebih baik.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da13'),
  createdAt: new Date('2024-03-05'),
  updatedAt: new Date('2024-03-20'),
};

const biomassGasification: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Sistem Gasifikasi Biomassa Cerdas dengan Kontrol AI dan Integrasi Circular Economy',
    namaPenggagas: 'Surya Darma',
    nip: '7734567890126789',
    posisiJabatan: 'Biomass Energy Engineer',
  },
  deskripsiPermasalahan:
    'Pemanfaatan biomassa untuk energi saat ini terkendala efisiensi rendah, emisi tinggi, dan kesulitan menangani variabilitas bahan baku. Sistem konvensional tidak mampu menyesuaikan parameter operasi untuk berbagai jenis biomassa, menghasilkan kinerja sub-optimal dan masalah operasional.',
  dampakPermasalahan:
    'Efisiensi konversi energi hanya 20-25% dibandingkan potensi 35-40%, downtime tinggi (30%) akibat fouling dan masalah operasional lainnya, dan keterbatasan jenis biomassa yang dapat diproses secara ekonomis.',
  deskripsiIde:
    'Mengembangkan sistem gasifikasi biomassa cerdas yang menggunakan AI untuk mengoptimalkan parameter operasi berdasarkan karakteristik biomassa input. Sistem ini akan mencakup pre-treatment otomatis, sensor real-time untuk analisis gas dan kondisi reaktor, serta kontrol adaptif untuk air-fuel ratio, temperature profiling, dan pembersihan gas. Integrasi circular economy akan memanfaatkan biochar dan ash sebagai produk samping bernilai tambah.',
  keunggulanIde:
    '1. Optimasi parameter operasi real-time untuk berbagai jenis biomassa.\n2. Sistem pre-treatment otomatis untuk standardisasi input.\n3. Pemanfaatan produk samping untuk ekonomi sirkular (biochar, ash untuk pupuk).\n4. Produksi syngas bersih untuk aplikasi pembangkit listrik dan bahan bakar.',
  manfaatFinansial:
    'Peningkatan efisiensi konversi hingga 35-40% yang meningkatkan output 50%, pengurangan downtime menjadi <10% yang meningkatkan availability, dan pendapatan tambahan dari produk samping senilai Rp 15 miliar per tahun untuk fasilitas 5 MW.',
  manfaatNonFinansial:
    '1. Pengurangan emisi CO2 melalui karbon negatif dari biochar.\n2. Diversifikasi energi terbarukan berbasis biomassa lokal.\n3. Pemberdayaan komunitas pedesaan melalui ekonomi biomassa.\n4. Pengurangan limbah pertanian dan kehutanan.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da14'),
  createdAt: new Date('2024-03-10'),
  updatedAt: new Date('2024-03-25'),
};

const seismicAIExploration: Partial<IIdeInovasi> = {
  profilIde: {
    judulIde: 'Analisis Seismik Berbasis Deep Learning untuk Eksplorasi Minyak dan Gas',
    namaPenggagas: 'Anita Susanti',
    nip: '7745678901237890',
    posisiJabatan: 'Geophysicist',
  },
  deskripsiPermasalahan:
    'Interpretasi data seismik untuk eksplorasi migas saat ini membutuhkan waktu lama, sangat bergantung pada keahlian interpreter, dan memiliki tingkat ketidakpastian tinggi. Proses manual ini menyebabkan ketidakkonsistenan hasil, potensi area prospektif yang terlewatkan, dan waktu dari akuisisi data hingga drilling decision yang terlalu panjang.',
  dampakPermasalahan:
    'Waktu interpretasi 3-6 bulan per project, success rate eksplorasi hanya 25-30% dengan biaya dry holes mencapai jutaan dolar, dan hilangnya competitive advantage karena lamanya proses pengambilan keputusan.',
  deskripsiIde:
    'Mengembangkan platform analisis seismik berbasis deep learning yang dapat mengotomatisasi interpretasi data seismik 3D/4D. Sistem akan melakukan fault detection, horizon tracking, facies classification, dan prediksi properti reservoir secara otomatis dengan akurasi tinggi. Neural network akan dilatih dengan data historis interpretasi manual dan hasil well untuk meningkatkan akurasi prediksi. Platform ini akan menyediakan hasil dalam bentuk model 3D interaktif dengan probabilitas dan uncertainty analysis.',
  keunggulanIde:
    '1. Otomatisasi interpretasi seismik dengan akurasi 85-90% dibanding expert human.\n2. Reduksi waktu interpretasi dari bulan menjadi hari.\n3. Uncertainty quantification untuk pengambilan keputusan yang lebih baik.\n4. Kemampuan menemukan subtle features yang sering terlewatkan interpreter manusia.',
  manfaatFinansial:
    'Peningkatan success rate eksplorasi hingga 40-45% yang berdampak pada penghematan Rp 300 miliar per tahun dari dry holes, pengurangan cycle time eksplorasi 70% yang mempercepat revenue generation, dan pengurangan man-hours untuk interpretasi senilai Rp 15 miliar per tahun.',
  manfaatNonFinansial:
    '1. Preservasi knowledge dari expert geophysicists yang akan pensiun.\n2. Demokratisasi akses ke interpretasi berkualitas tinggi.\n3. Standarisasi proses interpretasi untuk konsistensi hasil.\n4. Pembangunan database karakteristik reservoir yang komprehensif untuk eksplorasi future.',
  userId: new mongoose.Types.ObjectId('67e1cb1debe9ca7a9641da15'),
  createdAt: new Date('2024-03-15'),
  updatedAt: new Date('2024-03-30'),
};

// Export all ideas as an array for easy retrieval
export const contohIdeInovasiList = [
  contohIdeInovasiSurveyor,
  contohIdeInovasiCostController,
  contohIdeInovasiSafetyOfficer,
  contohIdeInovasiAdministrativeStaff,
  contohIdeInovasiHeavyEquipmentOperator,
  contohIdeInovasiConstructionManager,
  contohIdeInovasiEnvironmentalOfficer,
  contohIdeInovasiLegalAdvisor,
  contohIdeInovasiAccountant,
  contohIdeInovasiLogisticsCoordinator,
  contohIdeInovasiWarehouseManager,
  smartGridOptimization,
  predictiveMaintenanceTurbine,
  digitalTwinRefinery,
  batteryEnergyStorage,
  solarForecastingAI,
  dronePipelineInspection,
  blockchainEnergyTrading,
  carbonCaptureML,
  virtualPowerPlant,
  hydrogenProduction,
  energyTwinOilField,
  geothermalDrillingAI,
  evChargingAI,
  biomassGasification,
  seismicAIExploration,
];
