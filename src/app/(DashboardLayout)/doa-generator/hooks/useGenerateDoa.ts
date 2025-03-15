// src/app/doa-generator/hooks/useGenerateDoa.ts
import { useState } from 'react';
import { selectRelevantAsma } from '../utils/asmaulHusna';
import { weaknessTemplates, worshipTemplates, formalVariations, simpleVariations } from '../utils/doaTemplates';

interface PrayerContent {
  basmalah: string;
  opening: string;
  content: string;
  closing: string;
}

/**
 * Custom hook for doa generation functionality
 * Manages form state and handles prayer generation logic
 */
export const useGenerateDoa = () => {
  // Form state
  const [intention, setIntention] = useState('');
  const [recipient, setRecipient] = useState('self');
  const [customRecipient, setCustomRecipient] = useState('');
  const [situation, setSituation] = useState('');
  const [language, setLanguage] = useState('simple');
  const [length, setLength] = useState('medium');
  const [generatedPrayer, setGeneratedPrayer] = useState<PrayerContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Function to generate prayer content locally without API
   * Used as a fallback or when working offline
   */
  const generateLocalPrayer = (): PrayerContent => {
    // Determine prayer recipient
    const prayerRecipient = recipient === 'self' ? 'hamba' : customRecipient;

    // Get relevant Asmaul Husna
    const relevantAsma = selectRelevantAsma(intention);
    const asmaText = relevantAsma.join(', ');

    // Determine prayer length factor (affects number of sentences)
    const lengthFactor = length === 'short' ? 1 : length === 'medium' ? 2 : 3;

    // Generate opening with selected Asmaul Husna
    const opening = `Ya Allah, ${asmaText}.`;

    // Select language variations based on preference
    const variations = language === 'formal' ? formalVariations : simpleVariations;
    const openingPhrase = variations.opening[Math.floor(Math.random() * variations.opening.length)];

    // Generate main prayer content based on intention and situation
    let mainContent = `${openingPhrase.replace('{recipient}', prayerRecipient)} ${intention}`;

    if (situation) {
      mainContent += ` dalam situasi ${situation}`;
    }

    mainContent += `. `;

    // Add a transition phrase
    const transitionPhrase = variations.transition[Math.floor(Math.random() * variations.transition.length)];
    mainContent += `${transitionPhrase} `;

    // Add acknowledgment of weakness
    const shuffledWeakness = [...weaknessTemplates].sort(() => 0.5 - Math.random());
    for (let i = 0; i < lengthFactor; i++) {
      if (i < shuffledWeakness.length) {
        mainContent += ` ${shuffledWeakness[i].replace(/{recipient}/g, prayerRecipient)}`;
      }
    }

    // Add connection to worship and goodness
    const shuffledWorship = [...worshipTemplates].sort(() => 0.5 - Math.random());
    for (let i = 0; i < lengthFactor; i++) {
      if (i < shuffledWorship.length) {
        mainContent += ` ${shuffledWorship[i].replace(/{recipient}/g, prayerRecipient)}`;
      }
    }

    // Add a closing phrase
    const closingPhrase = variations.closing[Math.floor(Math.random() * variations.closing.length)];
    mainContent += ` ${closingPhrase}`;

    // Add standard closing
    const closing = "Aamiin Ya Rabbal 'Alamin.";

    // Combine all parts
    const completePrayer = {
      basmalah: 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ',
      opening: opening,
      content: mainContent,
      closing: closing,
    };

    return completePrayer;
  };

  /**
   * Handles prayer generation
   * Could be extended to use API if needed
   */
  const generatePrayer = async () => {
    try {
      setIsLoading(true);
      const prayer = generateLocalPrayer();
      setGeneratedPrayer(prayer);
    } catch (error) {
      console.error('Error generating prayer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resets the form to initial state
   */
  const resetForm = () => {
    setIntention('');
    setRecipient('self');
    setCustomRecipient('');
    setSituation('');
    setLanguage('simple');
    setLength('medium');
    setGeneratedPrayer(null);
  };

  return {
    intention,
    setIntention,
    recipient,
    setRecipient,
    customRecipient,
    setCustomRecipient,
    situation,
    setSituation,
    language,
    setLanguage,
    length,
    setLength,
    generatedPrayer,
    isLoading,
    generatePrayer,
    resetForm,
  };
};
