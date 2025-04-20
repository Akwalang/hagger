import { changeEnvironment } from './actions/change-environment.act';
import { createEnvironment } from './actions/create-environment.act';

export const EnvironmentActions = (set: any) => ({
  changeEnvironment: changeEnvironment(set),
  createEnvironment: createEnvironment(set),
}) as const;

export type EnvironmentActions = ReturnType<typeof EnvironmentActions>;
