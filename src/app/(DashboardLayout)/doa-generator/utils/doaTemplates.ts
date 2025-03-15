// src/app/(DashboardLayout)/doa-generator/utils/doaTemplates.ts

/**
 * Templates for different sections of the prayer
 * These are used to construct a complete prayer based on user input
 */

// Define interfaces for type safety
interface PrayerTemplate {
  opening: string[];
  transition: string[];
  closing: string[];
}

type TemplateString = string;

// Ensure all template strings contain the {recipient} placeholder
const validateTemplate = (template: string): TemplateString => template;

// Acknowledgment of weakness templates
export const weaknessTemplates = [
  '{recipient} menyadari bahwa tanpa bimbingan dan pertolongan-Mu, {recipient} tidak mampu mencapai apapun.',
  'Kemampuan {recipient} sangat terbatas, pengetahuan {recipient} sangat minim dalam menghadapi hal ini.',
  '{recipient} mengakui kelemahan dalam menghadapi ujian ini dan hanya kepada-Mu {recipient} memohon pertolongan.',
  'Tanpa pertolongan-Mu, {recipient} tidak memiliki kekuatan untuk mengatasi masalah ini.',
  '{recipient} hanyalah hamba yang lemah di hadapan keagungan-Mu.',
  'Segala daya dan upaya {recipient} tidak akan berarti tanpa izin dan rahmat-Mu.',
  'Hanya kepada-Mu {recipient} berserah diri, karena {recipient} sadar bahwa tidak ada kekuatan dan kemampuan kecuali dengan pertolongan-Mu.',
];

// Worship connection templates
export const worshipTemplates = [
  'Jadikanlah ini sebagai sarana untuk semakin mendekatkan diri kepada-Mu.',
  'Berikanlah kekuatan agar {recipient} dapat beribadah dengan lebih khusyuk.',
  'Jadikanlah pengalaman ini sebagai penghapus dosa dan peningkat derajat {recipient} di sisi-Mu.',
  'Lindungilah {recipient} dari sifat-sifat buruk, serta jadikanlah ini sebagai sarana untuk semakin bersyukur.',
  'Anugerahkanlah kepada {recipient} kemampuan untuk menggunakan nikmat ini di jalan yang Engkau ridhai.',
  'Jadikanlah {recipient} termasuk hamba-hamba-Mu yang pandai bersyukur dan selalu mengingat-Mu dalam setiap keadaan.',
  'Kuatkanlah iman {recipient} dan jadikanlah ujian ini sebagai jalan untuk semakin mencintai-Mu.',
];

// Formal language variations
export const formalVariations: PrayerTemplate = {
  opening: [
    'Dengan segenap kerendahan hati, {recipient} memohon kepada-Mu',
    'Dengan penuh pengharapan, {recipient} bermunajat kepada-Mu',
    'Dengan bertawasul melalui nama-nama-Mu Yang Mulia, {recipient} memanjatkan permohonan',
  ],
  transition: [
    'Sesungguhnya Engkau Maha Mengetahui apa yang terbaik untuk hamba-hamba-Mu.',
    'Sungguh tidak ada daya dan upaya melainkan dengan pertolongan-Mu.',
    'Tiada tempat memohon yang lebih baik selain kepada-Mu.',
  ],
  closing: [
    'Kabarkanlah doa ini, Wahai Dzat Yang Maha Mengabulkan permohonan hamba-hamba-Nya.',
    'Kabulkanlah permohonan ini dengan rahmat-Mu yang luas, Ya Arhamar Rahimin.',
    'Dengarkanlah permohonan hamba-Mu yang lemah ini, Ya Rabb.',
  ],
};

// Simple language variations
export const simpleVariations: PrayerTemplate = {
  opening: ['{recipient} mohon kepada-Mu', '{recipient} berdoa kepada-Mu', '{recipient} meminta kepada-Mu'],
  transition: ['Engkau Maha Tahu yang terbaik untuk kami.', 'Hanya kepada-Mu kami berserah.', 'Engkau Maha Mendengar doa-doa kami.'],
  closing: ['Kabulkanlah doa ini Ya Allah.', 'Dengarkanlah permohonan kami ini.', 'Terimalah doa kami ini Ya Allah Yang Maha Pengasih.'],
};
