import { Environment } from '../slices/environment/state';
import { State } from '../state';

export const getActiveEnvironment = (state: State): Environment => {
  const { activeEnvironmentId, environments } = state;

  if (!activeEnvironmentId) {
    throw new Error('No active environment ID set');
  }

  const environment = environments[activeEnvironmentId];

  if (!environment) {
    throw new Error(`Environment not found: id=${activeEnvironmentId}`);
  }

  return environment;
};
