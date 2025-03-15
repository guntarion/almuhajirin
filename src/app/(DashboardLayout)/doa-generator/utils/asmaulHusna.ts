// src/app/(DashboardLayout)/doa-generator/utils/asmaulHusna.ts

/**
 * Collection of Allah's Beautiful Names (Asmaul Husna) categorized by theme
 * Used for selecting relevant names based on prayer intention
 */

type AsmaCategory =
  | 'healing'
  | 'prosperity'
  | 'guidance'
  | 'protection'
  | 'strength'
  | 'forgiveness'
  | 'peace'
  | 'success'
  | 'knowledge'
  | 'love'
  | 'time';

export const asmaulHusna: Record<AsmaCategory, string[]> = {
  healing: ['As-Syafi (Yang Maha Menyembuhkan)', "Al-Mu'afi (Yang Maha Menyelamatkan)", 'Ar-Rahman (Yang Maha Pengasih)'],
  prosperity: [
    'Ar-Razzaq (Yang Maha Pemberi Rezeki)',
    'Al-Fattah (Yang Maha Pembuka)',
    'Al-Wahhab (Yang Maha Pemberi)',
    'Al-Basit (Yang Maha Melapangkan)',
  ],
  guidance: ['Al-Hadi (Yang Maha Pemberi Petunjuk)', 'Al-Alim (Yang Maha Mengetahui)', 'An-Nur (Sumber Cahaya)', 'Al-Rashid (Yang Maha Membimbing)'],
  protection: [
    'Al-Hafiz (Yang Maha Memelihara)',
    'Al-Waliy (Yang Maha Melindungi)',
    'Al-Muhaymin (Yang Maha Mengawasi)',
    "Al-Mani' (Yang Maha Mencegah)",
  ],
  strength: ['Al-Qawi (Yang Maha Kuat)', 'Al-Matin (Yang Maha Kokoh)', 'Al-Aziz (Yang Maha Perkasa)', 'Al-Jabbar (Yang Memiliki Mutlak Kegagahan)'],
  forgiveness: [
    'Al-Ghaffar (Yang Maha Pengampun)',
    'At-Tawwab (Yang Maha Penerima Tobat)',
    'Al-Afuw (Yang Maha Pemaaf)',
    'Al-Halim (Yang Maha Penyantun)',
  ],
  peace: ['As-Salam (Sumber Kedamaian)', "Al-Mu'min (Yang Memberi Keamanan)", 'Al-Latif (Yang Maha Lembut)', 'Al-Barr (Yang Maha Dermawan)'],
  success: [
    'Al-Fattah (Yang Maha Pembuka)',
    'Al-Mujib (Yang Mengabulkan Doa)',
    'Al-Wakil (Yang Maha Memelihara)',
    'Al-Mughni (Yang Maha Memberi Kekayaan)',
  ],
  knowledge: [
    'Al-Alim (Yang Maha Mengetahui)',
    'Al-Hakim (Yang Maha Bijaksana)',
    'Al-Khabir (Yang Maha Mengenal)',
    'Al-Wasi (Yang Maha Luas Ilmu-Nya)',
  ],
  love: ['Al-Wadud (Yang Maha Mencintai)', 'Ar-Rahman (Yang Maha Pengasih)', 'Ar-Rahim (Yang Maha Penyayang)', 'Al-Barr (Yang Maha Dermawan)'],
  time: ['Al-Awwal (Yang Maha Awal)', 'Al-Akhir (Yang Maha Akhir)', 'Al-Warith (Yang Maha Mewarisi)', 'Al-Baqi (Yang Maha Kekal)'],
};

/**
 * Function to select relevant Asmaul Husna based on prayer intention
 * @param intention - The prayer intention entered by the user
 * @returns Array of selected Asmaul Husna names (up to 3)
 */
export const selectRelevantAsma = (intention: string): string[] => {
  // Convert intention to lowercase for easier matching
  const lowercaseIntention = intention.toLowerCase();

  // Array to store selected Asmaul Husna
  let selectedAsma: string[] = [];

  // Check for keywords in the intention and select appropriate Asmaul Husna
  if (lowercaseIntention.includes('sembuh') || lowercaseIntention.includes('sehat') || lowercaseIntention.includes('sakit')) {
    selectedAsma = asmaulHusna.healing;
  } else if (
    lowercaseIntention.includes('rezeki') ||
    lowercaseIntention.includes('usaha') ||
    lowercaseIntention.includes('bisnis') ||
    lowercaseIntention.includes('kaya')
  ) {
    selectedAsma = asmaulHusna.prosperity;
  } else if (lowercaseIntention.includes('petunjuk') || lowercaseIntention.includes('bimbingan') || lowercaseIntention.includes('ilmu')) {
    selectedAsma = asmaulHusna.guidance;
  } else if (lowercaseIntention.includes('lindung') || lowercaseIntention.includes('jaga') || lowercaseIntention.includes('aman')) {
    selectedAsma = asmaulHusna.protection;
  } else if (lowercaseIntention.includes('kuat') || lowercaseIntention.includes('sabar') || lowercaseIntention.includes('tahan')) {
    selectedAsma = asmaulHusna.strength;
  } else if (lowercaseIntention.includes('ampun') || lowercaseIntention.includes('maaf') || lowercaseIntention.includes('dosa')) {
    selectedAsma = asmaulHusna.forgiveness;
  } else if (lowercaseIntention.includes('damai') || lowercaseIntention.includes('tenang') || lowercaseIntention.includes('tentram')) {
    selectedAsma = asmaulHusna.peace;
  } else if (lowercaseIntention.includes('sukses') || lowercaseIntention.includes('berhasil') || lowercaseIntention.includes('capaian')) {
    selectedAsma = asmaulHusna.success;
  } else if (lowercaseIntention.includes('belajar') || lowercaseIntention.includes('ujian') || lowercaseIntention.includes('pengetahuan')) {
    selectedAsma = asmaulHusna.knowledge;
  } else if (lowercaseIntention.includes('cinta') || lowercaseIntention.includes('kasih') || lowercaseIntention.includes('sayang')) {
    selectedAsma = asmaulHusna.love;
  } else if (lowercaseIntention.includes('waktu') || lowercaseIntention.includes('umur') || lowercaseIntention.includes('masa')) {
    selectedAsma = asmaulHusna.time;
  } else {
    // If no specific match, select random Asmaul Husna from different categories
    const categories = Object.keys(asmaulHusna) as AsmaCategory[];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    selectedAsma = asmaulHusna[randomCategory];
  }

  // Shuffle the array to get different combinations
  const shuffled = [...selectedAsma].sort(() => 0.5 - Math.random());

  // Return up to 3 relevant names
  return shuffled.slice(0, 3);
};
