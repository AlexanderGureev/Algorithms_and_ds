// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.

// fromPairs([['fred', 30], ['barney', 40]]);
// → { 'fred': 30, 'barney': 40 }

function fromPairs(arrays) {
  return arrays.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}