import { HttpMethod } from '@/global/enums/http-method.enum';
import { HttpCode } from '@/global/enums/http-codes.enum';

import { PageType } from './enums';

export type TabItem = {
  pageId: string,
};

export type RequestParameter = {
  name: string,
  value: string,
  description: string,
};

export type ResponseParameter = {
  name: string,
  value: string,
};

export type CommonPage<T extends PageType, D extends object> = {
  id: string,
  name: string,
  type: T,
  data: D,
};

export type RequestPage = CommonPage<PageType.Request, {
  id: string,
  request: {
    method: HttpMethod,
    url: string,
    headers: RequestParameter[],
    params: {
      path: RequestParameter[],
      query: RequestParameter[],
    },
    body: ArrayBuffer | null,
  },
  response: {
    statusCode: HttpCode,
    headers: ResponseParameter[],
    data: ArrayBuffer,
  },
}>;
