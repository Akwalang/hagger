export type RequestsPageLang = {
  requestMain: {
    urlPlaceholder: () => string;
    sendButton: () => React.ReactNode;
  };
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
