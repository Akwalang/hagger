export const SourceActions = (set: any) => ({
  // action: action(set),
}) as const;

export type SourceActions = ReturnType<typeof SourceActions>;
