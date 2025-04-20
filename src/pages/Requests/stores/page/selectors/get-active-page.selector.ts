import { State } from "../state";

import { PageWithData } from "../slices/page/state";

import { getActiveGroup } from './get-active-group.selector';

export const getActivePage = (state: State): PageWithData | null => {
  const group = getActiveGroup(state);

  if (group.activePageId === null) return null;

  return state.pages[group.activePageId];
};
