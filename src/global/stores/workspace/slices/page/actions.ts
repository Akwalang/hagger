import { closePage } from  "./actions/close-page.act";
import { movePageToGroup } from "./actions/move-page-to-group.act";
import { setActivePage } from  "./actions/set-active-page.act";

export const PageActions = (set: any) => ({
  closePage: closePage(set),
  movePageToGroup: movePageToGroup(set),
  setActivePage: setActivePage(set),
});

export type PageActions = ReturnType<typeof PageActions>;
