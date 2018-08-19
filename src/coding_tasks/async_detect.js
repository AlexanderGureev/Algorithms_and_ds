// Реализуйте и экспортируйте по умолчанию функцию detect, которая возвращает первый результат, который не был ошибкой.
// Функция detect должна запускать колбек на выполнение сразу для всех входящих параметров, а не последовательно. 
// Это значительно увеличивает скорость ее выполнения.

// async.detect(["file1", "file2", "file3"], (filePath, callback) => {
//     fs.access(filePath, err => {
//       callback(null, !err);
//     });
//   }, (err, result) => {
    // result now equals the first file in the list that exists
//   }
// );

const coll = [4, 2, 3];
detect(coll, (item, callback) => {
    setTimeout(() => callback(null, item), item);
  }, (err, result) => {
    console.log(err);
    console.log(result);
  }
);

//const coll = [1, 2];
detect(coll, (item, callback) => {
    callback("error");
  }, err => {
    console.log(err);
  }
);

function once(fn) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      fn(...args);
    }
  };
}

function detect(coll, callback, callbackResult) {
  const onceCallbackResult = once(callbackResult);

  if (!coll.length) {
    return onceCallbackResult(null);
  }

  let currentIndex = 0,
      errors = [],
      queue = [];

  const cb = i => (err, item) => {
    currentIndex++;

    if (i === 0 && !err) {
      onceCallbackResult(null, item);
    } else if (err) {
      errors.push(err);
    } else {
      queue.push(item);
    }

    if (currentIndex === coll.length) {
      const element = queue.shift();
      if (element) {
        onceCallbackResult(null, element);
      } else {
        onceCallbackResult(errors.pop());
      }
    }
  };

  coll.forEach((item, i) => callback(item, cb(i)));
}
