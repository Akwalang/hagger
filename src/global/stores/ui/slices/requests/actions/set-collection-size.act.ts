export const setCollectionSize = (set: any) => (collectionSize: number) => {
  set(() => ({ collectionSize }));
};
