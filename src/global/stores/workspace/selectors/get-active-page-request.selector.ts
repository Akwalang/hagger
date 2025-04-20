import { State } from "../state";

import { Page } from "../slices/page/state";
import { PageType } from "../slices/page/enums";

import { getActivePage } from './get-active-page.selector';
import { PageRequest } from "../slices/page-request/types";

export const getActivePageRequest = (state: State): Page<PageType.Request, PageRequest> => {
  const page = getActivePage(state);

  if (!page) {
    throw new Error('No active page found');
  }

  if (page.type !== PageType.Request) {
    throw new Error('Active page is not a request page');
  }

  return page as Page<PageType.Request, PageRequest>;
};
