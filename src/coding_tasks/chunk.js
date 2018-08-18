// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив и число, которое задает размер чанка (куска). Функция должна вернуть массив, состоящий из чанков указанной размерности.

// chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]

function chunk(mass = [], chunks) {
  const iter = (arr, acc = []) => {
    if (!arr.length) {
      return acc;
    }
    let newAcc = [...acc, arr.slice(0, chunks)];
    return iter(arr.slice(chunks), newAcc);
  }

  return iter(mass);
}