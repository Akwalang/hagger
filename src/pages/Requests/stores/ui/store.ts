import { create } from 'zustand';

interface State {
  collectionSize: number;
  requestSize: number;
}

interface Actions {
  setCollectionSize: (size: number) => void;
  setRequestSize: (size: number) => void;
}

export const useUiStore = create<State & Actions>((set) => ({
  collectionSize: 20,
  requestSize: 40,
  setCollectionSize: (size: number) => set(() => ({ collectionSize: size })),
  setRequestSize: (size: number) => set(() => ({ requestSize: size })),
}));
