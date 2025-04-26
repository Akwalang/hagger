import { HttpMethod } from '@/global/data/http';

import { State } from '../../../state';

import { updateActivePage } from '../../page/utils';

const values = Object.values(HttpMethod);

export const changeRequestMethod = (set: any) => (method: HttpMethod) => {
  if (!values.includes(method)) {
    throw new Error(`Invalid HTTP method: ${method}`);
  }

  set((state: State) => {
    return updateActivePage(state, { data: { request: { method } } });
  });
};
