import { create } from 'zustand';

import { TabItem, RequestPage } from './types';
import { mockTabs, mockPages } from './mock';

interface State {
  activePageId: string | null;
  tabs: TabItem[];
  pages: (RequestPage)[];
}

interface Actions {
  setActivePageId: (id: string) => void;
  closeTab: (id: string) => void;
  // addTab: (id: string) => void;
  // removeTab: (id: string) => void;
  // setItems: (items: RequestPage[]) => void;
  // addItem: (item: RequestPage) => void;
  // removeItem: (id: string) => void;
}

export const usePageStore = create<State & Actions>((set) => ({
  activePageId: mockTabs()[0].pageId,
  tabs: mockTabs(),
  pages: mockPages(),
  setActivePageId: (id) => set(() => ({ activePageId: id })),
  closeTab: (id) => set((state) => {
    const idx = state.tabs.findIndex((tab) => tab.pageId === id);

    const activePageId = state.activePageId === id
      ? state.tabs[idx - 1]?.pageId || state.tabs[idx + 1]?.pageId || null
      : state.activePageId;

    const tabs = state.tabs.filter((tab) => tab.pageId !== id);
    const pages = state.pages.filter((page) => page.id !== id);

    return { activePageId, tabs, pages };
  }),
}));
