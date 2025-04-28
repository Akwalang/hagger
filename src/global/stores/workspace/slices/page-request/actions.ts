import { changeRequestHeaders } from  "./actions/change-headers.act";
import { changeRequestMethod } from  "./actions/change-method.act";
import { changeRequestPathParams } from  "./actions/change-path-params.act";
import { changeRequestQueryParams } from  "./actions/change-query-params.act";
import { changeRequestUrl } from  "./actions/change-url.act";

export const PageRequestActions = (set: any) => ({
  changeRequestHeaders: changeRequestHeaders(set),
  changeRequestMethod: changeRequestMethod(set),
  changeRequestPathParams: changeRequestPathParams(set),
  changeRequestQueryParams: changeRequestQueryParams(set),
  changeRequestUrl: changeRequestUrl(set),
});

export type PageRequestActions = ReturnType<typeof PageRequestActions>;
