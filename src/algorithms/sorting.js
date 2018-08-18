const { MinHeap } = require("../data_structures/heap");

function bubbleSort(mass) {
  const sortedMass = [ ...mass ];

  for(let i = 1; i < mass.length; i++) {
    stop = false;
    for(let j = 0; j < mass.length - i; j++) {
      if(sortedMass[j] > sortedMass[j+1]) {
        [ sortedMass[j], sortedMass[j+1] ] =  [ sortedMass[j+1], sortedMass[j] ];
        stop = true;
      }
    }
    if(!stop) {
      return sortedMass;
    }
  }
  return sortedMass;
}

function selectionSort(mass) {
  const sortedMass = [ ...mass ];

  for(let i = 0; i < mass.length - 1; i++) {
    let min = i;
    for(let j = i + 1; j < mass.length; j++) {
      if(sortedMass[j] < sortedMass[min]) {
        [ sortedMass[min], sortedMass[j] ] = [ sortedMass[j], sortedMass[min] ];
      }
    }
  }
  return sortedMass;
}

function insertionSort(mass) {
  const sortedMass = [ ...mass ];

  for(let i = 1; i < mass.length; i++) {
    let j = i;

    while(j > 0 && sortedMass[j-1] > sortedMass[j]) {
      [ sortedMass[j], sortedMass[j-1] ] = [ sortedMass[j-1], sortedMass[j] ];
      j--;
    }
  }
  return sortedMass;
}

function quickSort(mass) {
  const sortedMass = [ ...mass ];

  if(sortedMass.length <= 1) {
    return sortedMass;
  }

  const randomIndex = Math.floor(Math.random() * sortedMass.length);
  const middle = sortedMass[randomIndex];
  const withoutMiddle = sortedMass.filter((item, i) => i !== randomIndex);

  const less = withoutMiddle.filter(item => item < middle);
  const greater = withoutMiddle.filter(item => item >= middle);

  return quickSort(less).concat(middle, quickSort(greater));
}

function quickSortPointer(mass) {

  const partition = (array, left, right) => {
    const middle = array[Math.floor((left + right) / 2)];
    let leftPointer = left;
    let rightPointer = right;

    while(leftPointer <= rightPointer) {

      while(array[leftPointer] < middle) {
        leftPointer++;
      }
      while(array[rightPointer] > middle) {
        rightPointer--;
      }

      if(leftPointer <= rightPointer) {
        [ array[leftPointer], array[rightPointer] ] = [ array[rightPointer], array[leftPointer] ];
        leftPointer++;
        rightPointer--;
      }
    }

    return leftPointer;
  }

  const sort = (array, left, right) => {
    let index;
    if(array.length > 1) {
      index = partition(array, left, right);

      if(left < index - 1) {
        sort(array, left, index - 1);
      }
      if(index < right) {
        sort(array, index, right);
      }
    }
    return array;
  }

  return sort(mass, 0, mass.length - 1);
}

function heapSort(mass) {
  const sortedMass = [ ...mass ];

  const heap = new MinHeap();
  heap.buildHeap(sortedMass);

  for(let i = 0; i < sortedMass.length; i++) {
    sortedMass[i] = heap.getMin();
  }
  return sortedMass;

}

function mergeSort(mass) {
  const sortedMass = [...mass];

  const merge = (left, right) => {
    let leftPointer = 0;
    let rightPointer = 0;
    let resultMass = [];
    
    while(leftPointer < left.length && rightPointer < right.length) {
      if(left[leftPointer] < right[rightPointer]) {
        resultMass.push(left[leftPointer]);
        leftPointer++;
      } else {
        resultMass.push(right[rightPointer]);
        rightPointer++;
      }
    }

    return resultMass.concat(left.slice(leftPointer), right.slice(rightPointer));

  }

  const sort = mass => {
    if(mass.length < 2) {
      return mass;
    }
    const middle = Math.floor(mass.length / 2);

    const left = mass.slice(0, middle);
    const right = mass.slice(middle);

    return merge(sort(left), sort(right));
  }

  return sort(sortedMass);
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  quickSortPointer,
  heapSort,
  mergeSort
};