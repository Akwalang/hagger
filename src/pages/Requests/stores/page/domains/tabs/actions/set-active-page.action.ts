import { State } from "../../../interfaces";

export const setActivePage = (set: any) => (pageId: string) => set((state: State) => {
  const { groups, activeGroupId } = state;

  const idx = groups.findIndex((g) => g.id === activeGroupId);

  if (idx === -1) return state;

  return { groups: groups.map((g, i) => i === idx ? { ...g, activePageId: pageId } : g) };
});
