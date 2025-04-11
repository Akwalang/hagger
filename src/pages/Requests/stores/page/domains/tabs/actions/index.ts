import { closeTab } from './close-tab.action';
import { setActivePage } from './set-active-page.action';

export const TabsActions = (set: any) => ({
  closeTab: closeTab(set),
  setActivePage: setActivePage(set),
});
