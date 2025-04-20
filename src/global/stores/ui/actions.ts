import { RequestsActions } from './slices/requests/actions';

export type Actions =
  & RequestsActions;

export const Actions = (set: any) => ({
  ...RequestsActions(set),
});
