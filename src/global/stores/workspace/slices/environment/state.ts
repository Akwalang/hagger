import { DEFAULT_ENVIRONMENT_NAME } from "../../constants";

export type Environment = {
  id: string;
  name: string;
  activeGroupId: string;
  groupIds: string[];
  variables: {
    key: string;
    value: string;
  }[];
};

export type EnvironmentState = {
  activeEnvironmentId: string;
  environments: Record<string, Environment>;
};

export const EnvironmentState = (ids: {
  environment: string,
  group: string,
}): EnvironmentState => ({
  activeEnvironmentId: ids.environment,
  environments: {
    [ids.environment]: {
      id: ids.environment,
      name: DEFAULT_ENVIRONMENT_NAME,
      activeGroupId: ids.group,
      groupIds: [ids.group, 'random-1', 'random-2', 'random-3'],
      variables: [],
    },
  },
} as const);
