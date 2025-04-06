import { create } from 'zustand';

type TabItem = {
  id: string;
  name: string;
  type: string;
};

interface State {
  items: TabItem[];
}

interface Actions {
}

export const useTabStore = create<State & Actions>((set) => ({
}));
