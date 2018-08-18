const {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  quickSortPointer,
  heapSort,
  mergeSort
} = require("./sorting");

const testArray = Array.from({ length: 10000 }, (item, i) => (i * Math.random() * 10).toFixed());

const sorting = [bubbleSort, selectionSort, insertionSort, quickSort, quickSortPointer, heapSort, mergeSort];
sorting.forEach(sort => {
  console.log("----------");
  console.log(sort.name);
  console.time("timer");
  sort(testArray);
  console.timeEnd("timer");
});