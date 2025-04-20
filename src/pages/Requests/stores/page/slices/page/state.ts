import { PageRequest } from "../page-request/types";
import { PageType } from "./enums";
import { createMockPage } from "./mock";

export type Page<T extends PageType, Page extends Record<any, any>> = {
  id: string;
  name: string;
  type: T;
  data: Page;
};

export type PageWithData =
  & Page<PageType.Request, PageRequest>;

export type PageState = {
  pages: Record<string, PageWithData>;
};

export const PageState = (ids: { pages: string[] }): PageState => ({
  pages: {
    [ids.pages[0]]: createMockPage(ids.pages[0], 'Page 1'),
    [ids.pages[1]]: createMockPage(ids.pages[1], 'Page 2'),
    [ids.pages[2]]: createMockPage(ids.pages[2], 'Page 3'),
  },
} as const);
