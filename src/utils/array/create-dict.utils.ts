type Item = Record<string, any>;

function createDict<T extends Item, K extends T[keyof T]>(
  array: T[],
  field: keyof T,
): Map<K, T>;

function createDict<T extends Item, K>(
  array: T[],
  getter: (item: T) => K,
): Map<K, T>;

function createDict<T extends Item, K>(
  array: T[],
  fieldOrGetter: keyof T | ((item: T) => any),
): Map<K, T> {
  const result = new Map<any, T>();

  const getter = typeof fieldOrGetter === 'function'
    ? fieldOrGetter
    : (item: T) => item[fieldOrGetter];

  for (const item of array) {
    const key = getter(item);

    key && result.set(key, item);
  }

  return result;
}

export { createDict };
