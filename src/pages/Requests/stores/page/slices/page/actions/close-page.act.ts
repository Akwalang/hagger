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

    return {
      groups: replace(
        state.groups,
        {
          [group.id]: { pageIds: group.pageIds.filter((_, i) => i !== idx) },
        },
      ),
      pages: without(state.pages, pageId),
    };
  });
};
