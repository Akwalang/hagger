import { IconType } from '@/global/data/icons';

import { DEFAULT_GROUP_NAME } from "../../constants";

export type Group = {
  id: string;
  icon: IconType;
  name: string;
  activePageId: string | null;
  pageIds: string[];
};

export type GroupState = {
  groups: Record<string, Group>;
};

export const GroupState = (ids: {
  environment: string,
  group: string,
  pages: string[],
}): GroupState => ({
  groups: {
    [ids.group]: {
      id: ids.group,
      icon: IconType.House,
      name: DEFAULT_GROUP_NAME,
      activePageId: ids.pages[1],
      pageIds: [...ids.pages],
    },
    'random-1': {
      id: ids.group,
      icon: IconType.Rocket,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
    'random-2': {
      id: ids.group,
      icon: IconType.Bug,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
    'random-3': {
      id: ids.group,
      icon: IconType.Alert,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
  },
});
