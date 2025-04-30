import { isUndefined } from "@/utils/is";

import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

export const moveAllPagesToGroup = (set: any) => {
  function applier(destGroupId: string): void;
  function applier(srcGroupId: string, destGroupId: string): void;
  function applier(srcOrDestGroupId: string, destGroupId?: string): void {
    set((state: State) => {
      let src = isUndefined(destGroupId) ? getActiveGroup(state) : state.groups[srcOrDestGroupId];
      let dest = isUndefined(destGroupId) ? state.groups[srcOrDestGroupId] : state.groups[destGroupId];

      if (!src) throw new Error("Source group not found");
      if (!dest) throw new Error("Destination group not found");

      if (src.id === dest.id) return state;

      src = { ...src };
      dest = { ...dest };

      dest.pageIds = dest.pageIds.concat(src.pageIds);

      return {
        groups: {
          ...state.groups,
          [src.id]: { ...src, activePageId: null, pageIds: [] },
          [dest.id]: { ...dest, activePageId: dest.activePageId || dest.pageIds[0] },
        },
      };
    });
  }

  return applier;
};
