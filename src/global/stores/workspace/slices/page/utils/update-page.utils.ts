import { replace } from "@/utils/object";

import { State } from "../../../state";

import { getActivePage } from "../../../selectors";

export const updatePage = <T extends Record<any, any>>(
  state: State,
  update: T,
) => {
  const page = getActivePage(state);

  if (!page) {
    throw new Error('No active page found');
  }

  return {
    pages: { ...state.pages, [page.id]: replace(page, update) },
  };
};
