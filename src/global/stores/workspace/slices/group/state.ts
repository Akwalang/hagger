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
  groups: string[],
  pages: string[],
}): GroupState => ({
  groups: {
    [ids.groups[0]]: {
      id: ids.groups[0],
      icon: IconType.House,
      name: DEFAULT_GROUP_NAME,
      activePageId: ids.pages[1],
      pageIds: [...ids.pages],
    },
    [ids.groups[1]]: {
      id: ids.groups[1],
      icon: IconType.Rocket,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
    [ids.groups[2]]: {
      id: ids.groups[2],
      icon: IconType.Bug,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
    [ids.groups[3]]: {
      id: ids.groups[3],
      icon: IconType.Alert,
      name: DEFAULT_GROUP_NAME,
      activePageId: null,
      pageIds: [],
    },
  },
});
