import { State } from '../../../state';

import { RequestParameter } from '../types';
import { RequestParamsType } from '../enums';
import { PageType } from '../../page/enums';

import { getActivePage } from '../../../selectors';
import { updatePage } from '../../page/utils/update-page.utils';

export const changeRequestParams = (set: any) => (
  type: RequestParamsType,
  idx: number,
  update: Partial<RequestParameter>,
): void => {
  set((state: State) => {
    const page = getActivePage(state);

    if (!page) {
      throw new Error('No active page found');
    }

    if (page.type !== PageType.Request) {
      throw new Error('Active page is not a request page');
    }

    const list = page.data.request.params[type].map((item, i) => {
      return idx === i ? { ...item, ...update } : item;
    });

    const params = { [type]: list };

    return updatePage(state, { data: { request: { params } } });
  });
};
