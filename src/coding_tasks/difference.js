function difference(setA, setB) {
  return Array.from(setA).reduce((acc, curr) => {
    return setB.has(curr) ? acc : acc.add(curr);
  }, new Set());
}

difference(new Set([2, 1, 3, 4]), new Set([2, 3]));
