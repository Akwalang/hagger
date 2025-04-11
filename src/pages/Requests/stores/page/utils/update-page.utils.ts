import { replace } from "@/utils/object";

import { State } from "../interfaces";

export const updatePage = <T extends Record<any, any>>(
  state: State,
  update: T,
) => {
  const groups = state.groups.map((group) => {
    if (group.id !== state.activeGroupId) return group;

    const pidx = group.pages.findIndex((p) => p.id === group.activePageId);

    if (pidx === -1) return group;

    const page = replace(group.pages[pidx], update);

    return {
      ...group,
      pages: group.pages.map((p, i) => (i === pidx ? page : p)),
    };
  });

  return { groups };
};
