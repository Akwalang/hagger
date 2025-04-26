import { HttpMethod, HttpCode } from '@/global/data/http';

import { KeyValueItem } from '@/views/components';

import { RequestParamsType } from './enums';

export type RequestParameter = KeyValueItem;

export type RequestCookie = {};

export type ResponseParameter = {
  name: string,
  value: string,
};

export type PageRequest = {
  sourceId: string | null,
  request: {
    method: HttpMethod,
    url: string,
    headers: RequestParameter[],
    cookies: RequestCookie[],
    params: Record<RequestParamsType, RequestParameter[]>,
    body: ArrayBuffer | null,
  },
  response: {
    statusCode: HttpCode,
    headers: ResponseParameter[],
    data: ArrayBuffer,
  },
};
