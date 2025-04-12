import { HttpMethod } from '@/global/enums/http-method.enum';
import { HttpCode } from '@/global/enums/http-codes.enum';

export type RequestParameter = {
  active: boolean,
  key: string,
  value: string,
  description: string,
  isRequired: boolean,
};

export type RequestCookie = {};

export type ResponseParameter = {
  name: string,
  value: string,
};

export type Request = {
  sourceId: string | null,
  request: {
    method: HttpMethod,
    url: string,
    headers: RequestParameter[],
    cookies: RequestCookie[],
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
};
