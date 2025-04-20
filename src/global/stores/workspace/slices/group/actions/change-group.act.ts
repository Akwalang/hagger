import { replace } from "@/utils/object";

import { State } from "../../../state";

import { getActiveEnvironment } from "../../../selectors";

export const changeGroup = (set: any) => (activeGroupId: string) => {
  set((state: State) => {
    const environment = getActiveEnvironment(state);

    return {
      environments: replace(state.environments, { [environment.id]: { activeGroupId } }),
    };
  });
};
