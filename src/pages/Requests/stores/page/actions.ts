import { EnvironmentActions } from "./slices/environment/actions";
import { GroupActions } from "./slices/group/actions";
import { PageActions } from "./slices/page/actions";

import { PageRequestActions } from "./slices/page-request/actions";

export const Actions = (set: any) => ({
  ...EnvironmentActions(set),
  ...GroupActions(set),
  ...PageActions(set),

  ...PageRequestActions(set),
});

export type Actions = ReturnType<typeof Actions>;
