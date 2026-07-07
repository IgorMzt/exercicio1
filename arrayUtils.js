// Remove valores repetidos do array.
export const unique = arr => [...new Set(arr)];

// Agrupa os objetos pelo valor da chave informada.
export const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    const groupKey = obj[key];
    (acc[groupKey] = acc[groupKey] || []).push(obj);
    return acc;
  }, {});

// Soma os valores da chave informada.
export const sumBy = (arr, key) =>
  arr.reduce((total, obj) => total + (obj[key] ?? 0), 0);
