import { Url } from "@/utils/common";

import { State } from "../../../state";

import { RequestParameter } from "../types";
import { RequestParamsType } from "../enums";

import { getActivePageRequest } from "../../../selectors";
import { updateActivePage } from "../../page/utils";

import { createEmptyParam } from "../utils/create-empty-param.utils";

export const changeRequestQueryParams = (set: any) => (
  idx: number,
  update: Partial<RequestParameter>,
): void => {
  set((state: State) => {
    const page = getActivePageRequest(state);

    const list = page.data.request.params[RequestParamsType.Query].map((item, i) => {
      return idx === i ? { ...item, ...update } : item;
    });

    if (idx > list.length - 1) {
      list.push({ ...createEmptyParam(), ...update } as RequestParameter);
    }

    const params = { [RequestParamsType.Query]: list };

    const urlAnatomy = Url.parseUrl(page.data.request.url);

    urlAnatomy.search = list
      .filter((item) => item.active[0])
      .map((item) => (
        `${item.key[0]}=${encodeURIComponent(item.value[0])}`
      ))
      .join("&");

    const url = Url.joinUrl(urlAnatomy);

    return updateActivePage(state, { data: { request: { url, params } } });
  });
};
