export type RequestState = {
  collectionSize: number;
  requestSize: number;
};

export const RequestState = (): RequestState => ({
  collectionSize: 25,
  requestSize: 50,
}) as const;
