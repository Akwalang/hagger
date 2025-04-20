import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";
import { replace } from "@/utils/object";

export const setActivePage = (set: any) => (activePageId: string) => {
  set((state: State) => {
    const group = getActiveGroup(state);

    return {
      groups: replace(state.groups, { [group.id]: { activePageId } }),
    };
  });
};
