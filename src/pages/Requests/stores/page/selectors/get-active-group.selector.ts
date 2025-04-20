import { Group } from "../slices/group/state";
import { State } from "../state";

import { getActiveEnvironment } from "./get-active-environment.selector";

export const getActiveGroup = (state: State): Group => {
  const environment = getActiveEnvironment(state);

  const group = state.groups[environment.activeGroupId];

  if (!group) {
    throw new Error(`Group does not exist: id=${environment.activeGroupId}`);
  }

  return group;
};
