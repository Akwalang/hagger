import { RequestsPageLang } from "@/global/langs/_/pages/requests.lang";

export const requests: RequestsPageLang = {
  requestMain: {
    urlPlaceholder: () => 'Set URL address',
    sendButton: () => 'Send',
  },
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
