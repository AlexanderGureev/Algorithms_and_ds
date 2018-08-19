const hash = ([...key]) =>
  key.reduce((hashAccumulator, keySymbol) =>
      31 * hashAccumulator + keySymbol.charCodeAt(0),0);

console.log(hash("abcc"));
