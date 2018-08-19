const compose = (fn1, fn2) => arg => fn1(fn2(arg));

// const f = compose(Math.sqrt, Math.abs);
// f(-4); // => 2

//compose(v => v, v => v)(10); // => 10
//compose(v => v + 2, v => v)(10); // => 12
//compose(v => v, v => v - 2)(10); // => 8
//compose(v => v ** 2, v => v - 2)(2); // => 0
//compose(v => v - 2, v => v ** 2)(2); // => 2
