import { changeGroup } from './actions/change-group.act';
import { closeAllOtherPages } from './actions/close-all-other-pages.act';
import { closeAllPages } from './actions/close-all-pages.act';
import { createGroup } from './actions/create-group.act';
import { moveAllPagesToGroup } from './actions/move-all-pages-to-group.act';

export const GroupActions = (set: any) => ({
  changeGroup: changeGroup(set),
  closeAllOtherPages: closeAllOtherPages(set),
  closeAllPages: closeAllPages(set),
  createGroup: createGroup(set),
  moveAllPagesToGroup: moveAllPagesToGroup(set),
}) as const;

export type GroupActions = ReturnType<typeof GroupActions>;
