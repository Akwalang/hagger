import { State } from "../../../state";

export const renamePage = (set: any) => (pageId: string, name: string) => {
  set((state: State) => {
    const page = state.pages[pageId];

    if (!page) {
      throw new Error(`Page not found: pageId=${pageId}`);
    }

    const tab = { ...page.tab };

    tab.name = name;

    return {
      pages: { ...state.pages, [pageId]: { ...page, tab } },
    };
  });
};
