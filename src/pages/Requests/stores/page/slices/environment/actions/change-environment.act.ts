import { State } from "../../../state";

export const changeEnvironment = (set: any) => (activeEnvironmentId: string) => {
  set((state: State) => {
    if (!state.environments[activeEnvironmentId]) {
      throw new Error(`Environment does not exist: id=${activeEnvironmentId}`);
    }

    return { activeEnvironmentId };
  })
};
