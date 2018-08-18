function binarySearch(mass = [], element) {
  const findItem = mass => {
    if (!mass.length) {
      return null;
    }
    let low = 0,
    high = mass.length - 1;
    mid = Math.floor(mass.length / 2);

    if (element === mass[mid]) {
      return mass[mid];
    }
    if (element > mass[mid]) {
      return binarySearch(mass.slice(mid), element);
    }
    return mass.length === 1 ? null : binarySearch(mass.slice(0, mid), element);
  };

  return findItem(mass.sort(), element);
}

//binarySearch([1, 2, 1, 3, 1], 2);
