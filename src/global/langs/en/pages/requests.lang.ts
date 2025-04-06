import { RequestsPageLang } from "@/global/langs/_/pages/requests.lang";

export const requests: RequestsPageLang = {
  requestSettings: {
    tabs: {
      params: {
        name: () => 'Params',
        queryParamsTitle: () => 'Query params',
        pathVariablesTitle: () => 'Path variables',
      },
      headers: {
        name: () => 'Headers',
        headersTitle: () => 'Headers',
      },
    },
  },
};
