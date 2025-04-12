import { RequestsPageLang } from "../../_/pages/requests.lang";

export const requests: RequestsPageLang = {
  requestMain: {
    urlPlaceholder: () => 'Увядзіце URL',
    sendButton: () => 'Адправіць',
  },
  requestSettings: {
    tabs: {
      params: {
        name: () => 'Параметры',
        queryParamsTitle: () => 'Параметры запыту',
        pathVariablesTitle: () => 'Пераменныя шляха',
      },
      headers: {
        name: () => 'Загалоўкі',
        headersTitle: () => 'Загалоўкі',
      },
    },
  },
};
