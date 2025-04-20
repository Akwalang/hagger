import { create } from "zustand";

import { State } from "./state";
import { Actions } from "./actions";

export const usePageStore = create<State & Actions>((set) => ({
  ...State(),
  ...Actions(set),
}));
