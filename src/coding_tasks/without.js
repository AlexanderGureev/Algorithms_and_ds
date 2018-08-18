//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и элементы, которые должны отсутствовать в возвращаемом массиве.

//without([2, 1, 2, 3], 1, 2, 5);
// → [3]

function without(mass = [], ...exclusion) {
  const innerSet = new Set(exclusion);
  return mass.reduce((acc, item) => {
    return innerSet.has(item) ? acc : [...acc, item];
  }, []);
}