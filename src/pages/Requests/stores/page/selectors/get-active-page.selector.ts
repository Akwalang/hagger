import { State } from "../interfaces";
import { CommonPage } from "../types";

import { getActiveGroup } from './get-active-group.selector';

export const getActivePage = (state: State): CommonPage | null => {
  const group = getActiveGroup(state);

  return group.pages.find((p) => p.id === group.activePageId) || null;
};
