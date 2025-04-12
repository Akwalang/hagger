import { Plc, Url } from '@/utils/common';
import { deduplicate, createDict } from '@/utils/array';

import { State } from '../../../interfaces';

import { updatePage } from '../../../utils/update-page.utils';
import { RequestParameter } from '../types';
import { getActivePage } from '../../../selectors';

const createParameter = (key: string, value: string, isRequired: boolean): RequestParameter => ({
  active: true,
  key,
  value,
  description: '',
  isRequired,
});

const mergePathParams = (
  params: RequestParameter[],
  update: string[],
): RequestParameter[] => {
  const dict = createDict(params, 'key');

  update = deduplicate(update);

  const current = [...dict.keys()];
  const unpaired = current.filter((item) => !update.includes(item));

  const result: RequestParameter[] = [];

  for (const key of update) {
    let cur = dict.get(key);

    if (!cur && unpaired.length === 1) {
      cur = { ...dict.get(unpaired[0]), key } as RequestParameter;
    }

    cur ||= createParameter(key, '', true);

    result.push(cur);
  }

  return result;
};

const mergeQueryParams = (current: RequestParameter[], update: Record<string, string>) => {
  return current;
};

export const changeRequestUrl = (set: any) => (url: string) => {
  set((state: State) => {
    const page = getActivePage(state);

    if (!page) return state;

    const components = Url.parse(url);

    const path = Plc.extract(url, Plc.Types.Colon).map((item) => item.value);
    const query = Url.parseSearch(components.search);

    const params = {
      path: mergePathParams(page.data.request.params.path, path),
      search: mergeQueryParams(page.data.request.params.query, query),
    };

    return updatePage(state, { data: { request: { url, params } } });
  })
};
