import { RequestActions } from './domains/request/actions';
import { TabsActions } from './domains/tabs/actions';

export const actions = (set: any) => ({
  ...RequestActions(set),
  ...TabsActions(set),
});
