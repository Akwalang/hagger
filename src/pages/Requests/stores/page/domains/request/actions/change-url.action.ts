import { State } from '../../../interfaces';

import { updatePage } from '../../../utils/update-page.utils';

export const changeRequestUrl = (set: any) => (url: string) => {
  set((state: State) => {
    return updatePage(state, { data: { request: { url } } });
  })
};
