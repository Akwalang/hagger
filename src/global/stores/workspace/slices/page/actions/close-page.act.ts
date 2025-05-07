import { without, replace } from "@/utils/object";

import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

export const closePage = (set: any) => (pageId: string) => {
  set((state: State) => {
    const group = getActiveGroup(state);

    const idx = group.pageIds.findIndex((id) => id === pageId);

    if (idx === -1) {
      throw new Error(`Page not found in group: pageId=${pageId} groupId=${group.id}`);
    }

    const pageIds = group.pageIds.filter((_, i) => i !== idx);

    const activePageId = pageId === group.activePageId
      ? pageIds[idx !== 0 ? idx - 1 : 0] || null
      : group.activePageId;

    return {
      groups: replace(
        state.groups,
        { [group.id]: { activePageId, pageIds } },
      ),
      pages: without(state.pages, pageId),
    };
  });
};
