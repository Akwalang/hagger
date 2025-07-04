import { Plc, Url } from '@/utils/common';
import { deduplicate, createDict, difference } from '@/utils/array';

import { State } from '../../../state';

import { RequestParamsType } from '../enums';
import { RequestParameter } from '../types';

import { getActivePageRequest } from '../../../selectors';

import { updateActivePage } from '../../page/utils';

const createParameter = (key: string, value: string, type: RequestParamsType): RequestParameter => ({
  isPinned: true,
  isRemovable: false,
  isRequired: type === RequestParamsType.Path,
  isNullable: false,
  isValid: true,

  active: [true, type === RequestParamsType.Query],
  key: [key, type === RequestParamsType.Query],
  value: [value, true],
  description: ['', true],

  example: '',
});

const mergePathParams = (
  params: RequestParameter[],
  update: string[],
): RequestParameter[] => {
  const dict = createDict(params, (item) => item.key[0]);

  update = deduplicate(update);

  const current = [...dict.keys()];
  const unpaired = current.filter((item) => !update.includes(item));

  const result: RequestParameter[] = [];

  for (const key of update) {
    let cur = dict.get(key);

    if (!cur && unpaired.length === 1) {
      cur = { ...dict.get(unpaired.pop()!), key: [key, true] } as RequestParameter;
    }

    cur ||= createParameter(key, '', RequestParamsType.Path);

    result.push(cur);
  }

  return result;
};

const mergeQueryParams = (
  params: RequestParameter[],
  update: [string, string][],
): RequestParameter[] => {
  const oldKeys = params.filter((item) => item.active[0]).map((item) => item.key[0]);
  const curKeys = update.map((item) => item[0]);

  const active = params.filter((item) => item.active[0]);
  const inactive = params.filter((item) => !item.active[0]);

  const changed = [...difference(oldKeys, curKeys), ...difference(curKeys, oldKeys)];

  const result: RequestParameter[] = [];

  for (const [key, value] of update) {
    let old = key;

    if (changed.length === 2 && changed[1] === key) {
      old = changed[0];
    }

    let idx = active.findIndex((item) => item.key[0] === old);

    let item: RequestParameter | null = null;

    if (idx !== -1) {
      item = {
        ...active.splice(idx, 1)[0],
        key: [key, true],
        value: [value, true],
      };
    }

    if (!item && changed.length === 2 && key === changed[1]) {
      const [old, cur] = changed.splice(0, 2);

      let idx = active.findIndex((item) => item.key[0] === old);

      item = {
        ...active.splice(idx, 1)[0],
        key: [cur, true],
        value: [value, true],
      };
    }

    if (!item) {
      item = createParameter(key, value, RequestParamsType.Query);
    }

      result.push(item);
  }

  result.push(...inactive);

  return result;
};

export const changeRequestUrl = (set: any) => (url: string) => {
  set((state: State) => {
    const page = getActivePageRequest(state);

    const components = Url.parseUrl(url);

    const path = Plc.extract(components.path || '', Plc.Types.Colon).map((item) => item.value);
    const query = Url.parseSearch(components.search);

    const params = {
      path: mergePathParams(page.data.request.params.path, path),
      query: mergeQueryParams(page.data.request.params.query, query),
    };

    return updateActivePage(state, { data: { request: { url, params } } });
  });
};
