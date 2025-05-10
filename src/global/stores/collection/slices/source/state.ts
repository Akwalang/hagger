import { OpenAPIV3_1 } from "openapi-types";

export type Source = {
  id: string;
  name: string;
  type: 'custom' | 'swagger';

  isEditable: boolean;
  isSyncing: boolean;
  isSyncError: boolean;

  lastSync: number | null;

  src: string | null;
  schema: OpenAPIV3_1.Document;
};

export type SourceState = {
  sources: Record<string, Source>;
};

export const SourceState = (ids: {}): SourceState => ({
  sources: {},
});
