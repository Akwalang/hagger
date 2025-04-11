import { clone } from "@/utils/object";

import { State } from "../../../interfaces";

export const closeTab = (set: any) => (id: string) => set((state: State) => {
  const { groups, activeGroupId } = state;

  const gidx = groups.findIndex((g) => g.id === activeGroupId);

  const group = clone(groups[gidx]);

  if (!group) return state;

  const pidx = group.pages.findIndex((p) => p.id === id);

  group.activePageId = group.activePageId === id
    ? group.tabs[pidx - 1]?.pageId || group.tabs[pidx + 1]?.pageId || null
    : group.activePageId;

  group.tabs = group.tabs.filter((tab) => tab.pageId !== id);
  group.pages = group.pages.filter((page) => page.id !== id);

  return { groups: groups.map((g, i) => i === gidx ? group : g) };
});
