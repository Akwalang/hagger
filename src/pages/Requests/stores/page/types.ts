import { Request } from './domains/request/types';
import { TabItem } from './domains/tabs/types';

import { PageType } from './enums';

export type Group = {
  id: string;
  icon: string;
  name: string;
  tabs: TabItem[];
  pages: CommonPage[];
  activePageId: string | null;
};

type GenericPage<T extends PageType, D extends object> = {
  id: string,
  name: string,
  type: T,
  data: D,
};

export type RequestPage = GenericPage<PageType.Request, Request>;

export type CommonPage = RequestPage;
