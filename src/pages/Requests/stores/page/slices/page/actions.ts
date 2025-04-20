import { closePage } from  "./actions/close-page.act";
import { setActivePage } from  "./actions/set-active-page.act";

export const PageActions = (set: any) => ({
  closePage: closePage(set),
  setActivePage: setActivePage(set),
});

export type PageActions = ReturnType<typeof PageActions>;
