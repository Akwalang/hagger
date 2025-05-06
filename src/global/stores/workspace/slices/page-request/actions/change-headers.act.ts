import { State } from '../../../state';
import { RequestParameter } from '../types';

import { getActivePageRequest } from '../../../selectors';

import { updateActivePage } from '../../page/utils';

import { createEmptyParam } from '../utils/create-empty-param.utils';

export const changeRequestHeaders = (set: any) => (
  idx: number,
  update: Partial<RequestParameter>,
): void => {
  set((state: State) => {
    const page = getActivePageRequest(state);

    const headers = page.data.request.headers.map((item, i) => {
      return idx === i ? { ...item, ...update } : item;
    });

    if (idx > headers.length - 1) {
      headers.push({ ...createEmptyParam(), ...update } as RequestParameter);
    }

    return updateActivePage(state, { data: { request: { headers } } });
  });
};
