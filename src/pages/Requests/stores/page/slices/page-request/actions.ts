import { changeRequestMethod } from  "./actions/change-method.act";
import { changeRequestParams } from  "./actions/change-params.act";
import { changeRequestUrl } from  "./actions/change-url.act";

export const PageRequestActions = (set: any) => ({
  changeRequestMethod: changeRequestMethod(set),
  changeRequestParams: changeRequestParams(set),
  changeRequestUrl: changeRequestUrl(set),
});

export type PageRequestActions = ReturnType<typeof PageRequestActions>;
