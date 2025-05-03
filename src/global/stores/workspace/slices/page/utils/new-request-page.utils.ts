import { HttpMethod } from "@/global/data/http";

import { PageRequest } from "../../page-request/types";

import { PageType } from "../enums";
import { Page } from "../state";

export const createNewRequest = (name: string): Page<PageType.Request, PageRequest> => {
  const id = crypto.randomUUID();
  const method = HttpMethod.Get;

  return {
    id: id,
    type: PageType.Request,
    tab: {
      name: name,
      badge: {
        text: method,
      },
    },
    data: {
      sourceId: null,
      request: {
        method: method,
        url: "",
        headers: [],
        cookies: [],
        params: {
          path: [],
          query: [],
        },
        body: null,
      },
      response: {
        statusCode: '100',
        headers: [],
        data: new ArrayBuffer(0),
      }
    }
  };
};
