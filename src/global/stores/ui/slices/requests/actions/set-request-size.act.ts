export const setRequestSize = (set: any) => (requestSize: number) => {
  set(() => ({ requestSize }));
};
