import { replace } from '@/utils/object';

import { State } from '../../../interfaces';

import { updatePage } from '../../../utils/update-page.utils';
import { getActivePage } from '../../../selectors';
import { RequestParameter } from '../types';

export const changeRequestParams = (set: any) => (
  type: 'path' | 'query',
  idx: number,
  update: Partial<RequestParameter>,
) => {
  set((state: State) => {
    const page = getActivePage(state);

    if (!page) return state;

    const list = page.data.request.params[type].slice();

    list[idx] = replace(list[idx], update);

    const params = { [type]: list };

    return updatePage(state, { data: { request: { params } } });
  })
};
