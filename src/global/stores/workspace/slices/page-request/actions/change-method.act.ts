import { HttpMethod } from '@/global/enums/http-method.enum';

import { State } from '../../../state';

import { updatePage } from '../../page/utils/update-page.utils';

const values = Object.values(HttpMethod);

export const changeRequestMethod = (set: any) => (method: HttpMethod) => {
  if (!values.includes(method)) {
    throw new Error(`Invalid HTTP method: ${method}`);
  }

  set((state: State) => {
    return updatePage(state, { data: { request: { method } } });
  });
};
