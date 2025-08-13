import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'he' | 'ru' | '';

type State = { language: Language };

type Actions = {
  setLanguage: (language: Language) => void;
};

export const usePersistentLanguage = create<State & Actions>()(
  persist(
    (set) => ({
      language: '',
      setLanguage: (language) => set({ language })
    }),
    { name: 'language-storage' }
  )
);
