import { create } from 'zustand';

import { state } from './state';
import { actions } from './actions';

export const usePageStore = create<typeof state & ReturnType<typeof actions>>((set) => ({
  ...state,
  ...actions(set),
}));
