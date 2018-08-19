// Проверка сложных скобочных структур
// Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.

function isBracketStructureBalanced(seq) {
  let stack = [],
      brackets = new Map([["(", ")"], ["[", "]"], ["{", "}"], ["<", ">"]]);

  const getBackwardBrackets = key => brackets.get(key);
  const isOpeningBrackets = key => brackets.has(key);

  for (let i = 0; i < seq.length; i++) {
    if (isOpeningBrackets(seq[i])) {
      stack.push(seq[i]);
    } else if (
      stack.length > 0 &&
      getBackwardBrackets(stack[stack.length - 1]) === seq[i]
    ) {
      stack.pop(seq[i]);
    } else {
      return false;
    }
  }
  if (!stack.length) {
    return true;
  }
  return false;
}
isBracketStructureBalanced("[()]"); // true
isBracketStructureBalanced("{<>}}"); // false
isBracketStructureBalanced(""); // true
