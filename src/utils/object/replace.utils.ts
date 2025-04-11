import { DeepPartial } from '../types';

import { clone } from './clone.utils';
import { merge } from './merge.utils';

export const replace = <T extends Record<any, any>>(obj: T, update: DeepPartial<T>): T => {
  return merge(clone(obj), update);
};
