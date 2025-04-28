import { HttpMethod } from '@/global/data/http';

import { State } from '../../../state';

import { updateActivePage } from '../../page/utils';

const values = Object.values(HttpMethod);

const getBadgeColor = (method: HttpMethod) => {
  switch (method) {
    case HttpMethod.Get:
      return 'green';
    case HttpMethod.Post:
      return 'blue';
    case HttpMethod.Put:
      return 'orange';
    case HttpMethod.Delete:
      return 'red';
    default:
      return 'gray';
  }
};

export const changeRequestMethod = (set: any) => (method: HttpMethod) => {
  if (!values.includes(method)) {
    throw new Error(`Invalid HTTP method: ${method}`);
  }

  set((state: State) => {
    return updateActivePage(state, {
      tab: {
        badge: {
          text: method,
          color: getBadgeColor(method),
        },
      },
      badge: method,
      badgeColor: getBadgeColor(method),
      data: { request: { method } },
    });
  });
};
