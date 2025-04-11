import { State } from "../interfaces";
import { Group } from "../types";

export const getActiveGroup = (state: State): Group => {
  return state.groups.find((g) => g.id === state.activeGroupId)!;
};
