import { State } from "../../../state";
import { Group } from "../state";

import { getActiveEnvironment } from "../../../selectors";

export const createGroup = (set: any) => (name: string): string => {
  const id = crypto.randomUUID();

  set((state: State) => {
    const environment = getActiveEnvironment(state);

    const group: Group = {
      id,
      name,
      activePageId: null,
      pageIds: [],
    };

    return {
      environments: {
        ...state.environments,
        [id]: {
          ...environment,
          groupIds: [...environment.groupIds, id],
        },
      },
      groups: {
        ...state.groups,
        [id]: group,
      },
    };
  });

  return id;
};
