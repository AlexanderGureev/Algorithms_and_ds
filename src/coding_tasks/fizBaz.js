function getFizBaz(count) {
  const fizbaz = num => {
    let str = `${num % 2 ? "" : "fiz"} ${num % 5 ? "" : "baz"}`;
    return str.trim().length ? str : num;
  };

  for (let i = 1; i < count + 1; i++) {
    console.log(`${i}: -> ${fizbaz(i)}`);
  }
}

getFizBaz(10);
