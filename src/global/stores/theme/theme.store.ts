import { create } from 'zustand';

import { themes } from '@/global/data/themes';

import { ThemeMode } from './enums';

interface State {
  theme: string;
  mode: ThemeMode;
}

interface Actions {
  toggleMode: () => void;
  setTheme: (theme: string) => void;
  nextTheme: () => void;
}

const list = themes.map((item) => item.name);

export const useThemeStore = create<State & Actions>((set) => ({
  theme: 'claymorphism',
  mode: ThemeMode.Light,
  setTheme: (theme) => set(() => ({ theme })),
  toggleMode: () => set((state) => ({
    mode: {
      [ThemeMode.Light]: ThemeMode.Dark,
      [ThemeMode.Dark]: ThemeMode.Light,
    }[state.mode],
  })),
  nextTheme: () => set((state) => ({
    theme: list[(list.indexOf(state.theme) + 1) % list.length],
  })),
}));
