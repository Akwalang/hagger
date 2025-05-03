import { State } from "../../../state";

import { getActiveGroup } from "../../../selectors";

import { createNewRequest } from "../utils/new-request-page.utils";

export const createNewPage = (set: any) => () => {
  set((state: State) => {
    const group = { ...getActiveGroup(state) };

    const page = createNewRequest("New Request");

    group.activePageId = page.id;
    group.pageIds = group.pageIds.concat(page.id);

    return {
      groups: { ...state.groups, [group.id]: group },
      pages: { ...state.pages, [page.id]: page },
    };
  });
};
