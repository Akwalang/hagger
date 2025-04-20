import { RequestState } from "./slices/requests/state";

export type State =
  & RequestState;

export const State = (): State => ({
  ...RequestState(),
}) as const;
