import { EnvironmentState } from "./slices/environment/state";
import { GroupState } from "./slices/group/state";
import { PageState } from "./slices/page/state";

export type State =
  & EnvironmentState
  & GroupState
  & PageState;

export const State = (): State => {
  const ids = {
    environment: crypto.randomUUID(),
    groups: [...new Array(4)].map(() => crypto.randomUUID()),
    pages: [...new Array(4)].map(() => crypto.randomUUID()),
  };

  return {
    ...EnvironmentState(ids),
    ...GroupState(ids),
    ...PageState(ids),
  } as const;
};
