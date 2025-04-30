import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

export const movePageToGroup = (set: any) => {
  function applier(destGroupId: string, pageId: string): void;
  function applier(srcGroupId: string, destGroupId: string, pageId: string): void;
  function applier(srcOrDestGroupId: string, destGroupOrPageId: string, pageId?: string): void {
    set((state: State) => {
      let src = arguments.length === 2 ? getActiveGroup(state) : state.groups[srcOrDestGroupId];
      let dest = arguments.length === 2 ? state.groups[srcOrDestGroupId] : state.groups[destGroupOrPageId];

      const page = arguments.length === 2 ? state.pages[destGroupOrPageId] : state.pages[pageId!];

      if (!src) throw new Error("Source group not found");
      if (!dest) throw new Error("Destination group not found");
      if (!page) throw new Error("Page not found");

      const idx = src.pageIds.findIndex((id) => id === page.id);

      if (src.id === dest.id) return state;

      src = { ...src };
      dest = { ...dest };

      src.pageIds = src.pageIds.filter((id) => id !== page.id);
      dest.pageIds = dest.pageIds.concat(page.id);

      src.activePageId = page.id === src.activePageId
        ? (src.pageIds[idx !== 0 ? idx - 1 : 0] || null)
        : src.activePageId;

      dest.activePageId = dest.activePageId || dest.pageIds[0];

      return {
        groups: {
          ...state.groups,
          [src.id]: src,
          [dest.id]: dest,
        },
      };
    });
  }

  return applier;
};
