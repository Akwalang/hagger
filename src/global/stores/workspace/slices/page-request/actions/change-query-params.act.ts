import { State } from '../../../state';

import { RequestParameter } from '../types';
import { RequestParamsType } from '../enums';

import { getActivePageRequest } from '../../../selectors';
import { updateActivePage } from '../../page/utils';

export const changeRequestQueryParams = (set: any) => (
  idx: number,
  update: Partial<RequestParameter>,
): void => {
  set((state: State) => {
    const page = getActivePageRequest(state);

    const list = page.data.request.params[RequestParamsType.Query].map((item, i) => {
      return idx === i ? { ...item, ...update } : item;
    });

    const params = { [RequestParamsType.Query]: list };

    return updateActivePage(state, { data: { request: { params } } });
  });
};
