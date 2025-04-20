import { State } from '../../../state';
import { RequestParameter } from '../types';

import { getActivePageRequest } from '../../../selectors';

import { updateActivePage } from '../../page/utils';

export const changeRequestHeaders = (set: any) => (
  idx: number,
  update: Partial<RequestParameter>,
): void => {
  set((state: State) => {
    const page = getActivePageRequest(state);

    const headers = page.data.request.headers.map((item, i) => {
      return idx === i ? { ...item, ...update } : item;
    });

    return updateActivePage(state, { data: { request: { headers } } });
  });
};
