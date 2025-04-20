import { DEFAULT_GROUP_NAME } from "../../../constants";

import { State } from "../../../state";
import { Environment } from "../state";

import { createGroup } from '../../group/actions/create-group.act';

export const createEnvironment = (set: any) => (name: string): string => {
  const id = crypto.randomUUID();

  set((state: State) => {
    const activeGroupId = createGroup(set)(DEFAULT_GROUP_NAME);

    const environment: Environment = {
      id,
      name,
      activeGroupId,
      groupIds: [],
      variables: [],
    };

    return { environments: { ...state.environments, [id]: environment } };
  });

  return id;
};
