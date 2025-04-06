import { RequestsPageLang } from "../../_/pages/requests.lang";

export const requests: RequestsPageLang = {
  requestSettings: {
    tabs: {
      params: {
        name: () => 'Параметры',
        queryParamsTitle: () => 'Параметры запроса',
        pathVariablesTitle: () => 'Переменные пути',
      },
      headers: {
        name: () => 'Заголовки',
        headersTitle: () => 'Заголовки',
      },
    },
  },
};
