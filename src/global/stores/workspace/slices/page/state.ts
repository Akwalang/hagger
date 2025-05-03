import { PageRequest } from "../page-request/types";
import { PageType } from "./enums";
import { createMockPage } from "./mock";

export type Page<T extends PageType, Page extends Record<any, any>> = {
  id: string;
  type: T;
  tab: {
    name: string;
    badge: {
      text: string;
    };
  };
  data: Page;
};

export type PageWithData =
  & Page<PageType.Request, PageRequest>;

export type PageState = {
  pages: Record<string, PageWithData>;
};

export const PageState = (ids: { pages: string[] }): PageState => ({
  pages: ids.pages.reduce((result, id, index) => {
    return Object.assign(result, { [id]: createMockPage(id, `Page ${index + 1}: additional text`) });
  }, {}),
} as const);
