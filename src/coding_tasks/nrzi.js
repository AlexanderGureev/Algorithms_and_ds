// Реализуйте и экспортируйте по умолчанию функцию принимающую в качестве параметра строку в виде линейного сигнала и возвращающую строку с бинарным кодом.
// Пример использования:
// "|" (решение - двойной пропуск при встрече "|")

const signal1 = "_|¯|____|¯|__|¯¯¯";
const signal2 = "";
const signal3 = "|";  
const signal4 = "_|¯|___";  

function nrzi(signal) {
  if(signal.length === 1 && signal[0] === "|") {
    return "";
  }
  const iter = (sig, acc = []) => {
    const [f, ...r] = sig;
    if(!f) {
      return [...acc].join("") ;
    }
    if(f === "|") {
      return iter(r.slice(1), [...acc, "1"]); 
    }
    return iter(r, [...acc, "0"]);
  }
  return iter([...signal]);
}