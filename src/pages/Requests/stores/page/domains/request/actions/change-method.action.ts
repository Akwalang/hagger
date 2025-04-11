import { HttpMethod } from '@/global/enums/http-method.enum';

import { State } from '../../../interfaces';

import { updatePage } from '../../../utils/update-page.utils';

const values = Object.values(HttpMethod);

export const changeRequestMethod = (set: any) => (method: string) => {
  if (!values.includes(method as HttpMethod)) {
    throw new Error(`Invalid HTTP method: ${method}`);
  }

  set((state: State) => updatePage(state, { data: { request: { method } } }));
};
