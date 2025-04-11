import { State } from "../interfaces";

import { getActiveGroup } from './get-active-group.selector';

import { TabItem } from "../domains/tabs/types";

export const getTabs = (state: State): TabItem[] => {
  return getActiveGroup(state).tabs;
};
