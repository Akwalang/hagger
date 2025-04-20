import { setCollectionSize } from "./actions/set-collection-size.act";
import { setRequestSize } from "./actions/set-request-size.act";

export const RequestsActions = (set: any) => ({
  setCollectionSize: setCollectionSize(set),
  setRequestSize: setRequestSize(set),
}) as const;

export type RequestsActions = ReturnType<typeof RequestsActions>;
