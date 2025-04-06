export type RequestsPageLang = {
  requestSettings: {
    tabs: {
      params: {
        name: () => React.ReactNode;
        queryParamsTitle: () => React.ReactNode;
        pathVariablesTitle: () => React.ReactNode;
      };
      headers: {
        name: () => React.ReactNode;
        headersTitle: () => React.ReactNode;
      };
    };
  };
};
