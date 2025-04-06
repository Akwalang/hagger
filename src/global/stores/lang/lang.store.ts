import { create } from 'zustand';

import { langs } from '@/global/langs';

interface State {
  lang: keyof typeof langs;
}

interface Actions {
  setLang: (lang: keyof typeof langs) => void;
}

export const useLangStore = create<State & Actions>((set) => ({
  lang: 'by',
  setLang: (lang) => set(() => ({ lang })),
}));
