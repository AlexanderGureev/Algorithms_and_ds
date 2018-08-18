function alignment(mass) {
  const iter = (item, innerAcc) => {
    return item.reduce(
      (acc, item) => (item instanceof Array ? iter(item, acc) : [...acc, item]),
      innerAcc
    );
  };
  return iter(mass, []);
}

// const alignment = mass => mass.reduce(
//   (acc, item) => (item instanceof Array ? [...acc, ...alignment(item)] : [...acc, item]), []);

let mass = [1, [], 2, [3, 4], 5, [6, [7, 8]]];
alignment(mass);
