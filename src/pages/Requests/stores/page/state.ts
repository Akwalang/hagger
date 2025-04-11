import { State } from "./interfaces";

import { mockGroups } from "./mock";

export const state: State = {
  groups: mockGroups,
  activeGroupId: mockGroups[0].id,
} as const;
