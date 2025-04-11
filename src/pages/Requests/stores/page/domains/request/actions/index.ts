import { changeRequestMethod } from './change-method.action';
import { changeRequestUrl } from './change-url.action';

export const RequestActions = (set: any) => ({
  changeRequestMethod: changeRequestMethod(set),
  changeRequestUrl: changeRequestUrl(set),
});
