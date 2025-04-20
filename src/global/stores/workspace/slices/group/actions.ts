import { changeGroup } from './actions/change-group.act';
import { createGroup } from './actions/create-group.act';

export const GroupActions = (set: any) => ({
  changeGroup: changeGroup(set),
  createGroup: createGroup(set),
}) as const;

export type GroupActions = ReturnType<typeof GroupActions>;
