import { closePage } from  "./actions/close-page.act";
import { createNewPage } from "./actions/create-new-page.act";
import { movePageToGroup } from "./actions/move-page-to-group.act";
import { renamePage } from "./actions/rename-page.act";
import { setActivePage } from  "./actions/set-active-page.act";

export const PageActions = (set: any) => ({
  closePage: closePage(set),
  createNewPage: createNewPage(set),
  movePageToGroup: movePageToGroup(set),
  renamePage: renamePage(set),
  setActivePage: setActivePage(set),
});

export type PageActions = ReturnType<typeof PageActions>;
