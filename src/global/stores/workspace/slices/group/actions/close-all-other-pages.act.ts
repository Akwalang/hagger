import { isUndefined } from "@/utils/is";

import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

export const closeAllOtherPages = (set: any) => {
  function applier(pageId: string): void;
  function applier(groupId: string, pageId: string): void;
  function applier(groupOrPageId: string, pageId?: string): void {
    set((state: State) => {
      const group = isUndefined(pageId) ? getActiveGroup(state) : state.groups[groupOrPageId];
      const page = isUndefined(pageId) ? state.pages[groupOrPageId] : state.pages[pageId];

      const idx = group.pageIds.indexOf(page.id);

      if (idx === -1) throw new Error("Page not found in group");

      const pages = { ...state.pages };

      group.pageIds.forEach((id) => id !== page.id && delete pages[id]);

      return {
        groups: {
          ...state.groups,
          [group.id]: { ...group, activePageId: page.id, pageIds: [page.id] },
        },
        pages,
      };
    });
  }

  return applier;
};
