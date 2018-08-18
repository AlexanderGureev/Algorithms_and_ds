function co(generator) {
  const iterator = generator();

  const next = result => {
    const { value } = result;
    console.log(value);
    if (result.done) {
      return value;
    }

    return value
      .then(res => next(iterator.next(res)))
      .catch(err => next(iterator.throw(err)));
  };

  return next(iterator.next());
}

co(function*() {
  yield getPromise(5);
  throw new Error("boom");
}).catch(e => console.log(e));

co(function*() {
  const result = yield getPromise(1, new Error("boom"));
  return result;
}).catch(e => console.log(e));
