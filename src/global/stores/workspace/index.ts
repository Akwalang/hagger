import { create } from "zustand";

import { State } from "./state";
import { Actions } from "./actions";

export { RequestParamsType } from "./slices/page-request/enums";

export { type Group } from "./slices/group/state";

export const useWorkspaceStore = create<State & Actions>((set) => ({
  ...State(),
  ...Actions(set),
}));
