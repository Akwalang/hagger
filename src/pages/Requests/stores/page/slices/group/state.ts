import { DEFAULT_GROUP_NAME } from "../../constants";

export type Group = {
  id: string;
  icon: string;
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
      icon: "house",
      name: DEFAULT_GROUP_NAME,
      activePageId: ids.pages[1],
      pageIds: [...ids.pages],
    },
  },
});
