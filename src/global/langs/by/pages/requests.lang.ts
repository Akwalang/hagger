import { RequestsPageLang } from "../../_/pages/requests.lang";

export const requests: RequestsPageLang = {
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
