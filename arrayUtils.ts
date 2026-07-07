type NumericKeys<T> = {
  [K in keyof T]-?: NonNullable<T[K]> extends number ? K : never;
}[keyof T];

export const unique = <T>(arr: readonly T[]): T[] => [...new Set(arr)];

export const groupBy = <
  T extends Record<K, PropertyKey>,
  K extends keyof T
>(
  arr: readonly T[],
  key: K
): Partial<Record<T[K], T[]>> =>
  arr.reduce<Partial<Record<T[K], T[]>>>((acc, obj) => {
    const groupKey = obj[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(obj);
    return acc;
  }, {});

export const sumBy = <T, K extends NumericKeys<T>>(
  arr: readonly T[],
  key: K
): number =>
  arr.reduce((total, obj) => {
    const value = obj[key];
    return total + (typeof value === "number" ? value : 0);
  }, 0);
