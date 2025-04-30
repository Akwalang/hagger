import { isUndefined } from "@/utils/is";

import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

export const closeAllPages = (set: any) => (groupId?: string) => {
  set((state: State) => {
    const group = isUndefined(groupId) ? getActiveGroup(state) : state.groups[groupId];
    const pages = { ...state.pages };

    group.pageIds.forEach((id) => delete pages[id]);

    return {
      groups: {
        ...state.groups,
        [group.id]: { ...group, activePageId: null, pageIds: [] },
      },
      pages,
    };
  });
};
