import { changeRequestMethod } from './change-method.action';
import { changeRequestParams } from './change-params.action';
import { changeRequestUrl } from './change-url.action';

export const RequestActions = (set: any) => ({
  changeRequestMethod: changeRequestMethod(set),
  changeRequestParams: changeRequestParams(set),
  changeRequestUrl: changeRequestUrl(set),
});
