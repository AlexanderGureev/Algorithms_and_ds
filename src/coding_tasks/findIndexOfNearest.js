// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.
// Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел.

const findIndexOfNearest = (mass = [], target) => {
  let acc = { i: 0, min: mass[0] };

  const isMinDiff = (acc, curr, i) => {
    let diff = Math.abs(curr - target);
    return diff < acc.min ? { i, min: diff } : acc;
  }

  return !mass.length ? null 
                      : mass.reduce(isMinDiff, acc)["i"];
}


//findIndexOfNearest([], 2);              // null
//findIndexOfNearest([15, 10, 3, 4], 0);  // 2
//findIndexOfNearest([7, 5, 3, 2], 4);    // 1
//findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
