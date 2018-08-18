// Дан массив чисел. Каждое число в массиве встречается четное количество раз, кроме одного.
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает массив чисел и возвращает число, которое встречается нечетное количество раз.

const numbers = [1, 2, 4, 2, 4, 1, 5, 3, 3];
// 5
//findOdd(numbers);

function findOdd(numbers) {
  const mass = numbers.reduce((acc, curr) =>
    acc.set(curr, acc.has(curr) ? acc.get(curr) + 1 : 1),
    new Map());

  return [...mass].reduce((acc, [key, value]) => value % 2 ? key : acc);
}

const fOdd = arr => arr.reduce((acc, num) => {
  //console.log(`${acc} ^ ${num} = ${acc^num}`);
  return acc ^ num;
}, 0);