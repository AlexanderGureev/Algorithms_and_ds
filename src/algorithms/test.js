const {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  quickSortPointer,
  heapSort,
  mergeSort
} = require("./sorting");

test("test 1 bubble sort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(bubbleSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 bubble sort", () => {
  const massB = [];
  expect(bubbleSort(massB)).toEqual([]);
});

test("test 3 bubble sort", () => {
  const massC = [1, 3, 5, 7];
  expect(bubbleSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 bubble sort (immutable)", () => {
  const massD = [1, 5, 0, 1, 3, 2, 1, 12, 55];
  const sortedMass = bubbleSort(massD);
  expect(massD).not.toEqual(sortedMass);
});

test("test 1 selectionSort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(selectionSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 selectionSort", () => {
  const massB = [];
  expect(selectionSort(massB)).toEqual([]);
});

test("test 3 selectionSort", () => {
  const massC = [1, 3, 5, 7];
  expect(selectionSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 selectionSort (immutable)", () => {
  const massD = [1, 5, 0, 1, 3, 2, 1, 12, 55];
  const sortedMass = selectionSort(massD);
  expect(massD).not.toEqual(sortedMass);
});

test("test 1 insertionSort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(insertionSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 insertionSort", () => {
  const massB = [];
  expect(insertionSort(massB)).toEqual([]);
});

test("test 3 insertionSort", () => {
  const massC = [1, 3, 5, 7];
  expect(insertionSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 insertionSort (immutable)", () => {
  const massD = [1, 5, 0, 1, 3, 2, 1, 12, 55];
  const sortedMass = insertionSort(massD);
  expect(massD).not.toEqual(sortedMass);
});

test("test 1 quickSort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(quickSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 quickSort", () => {
  const massB = [];
  expect(quickSort(massB)).toEqual([]);
});

test("test 3 quickSort", () => {
  const massC = [1, 3, 5, 7];
  expect(quickSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 quickSort (immutable)", () => {
  const massD = [1, 5, 0, 1, 3, 2, 1, 12, 55];
  const sortedMass = quickSort(massD);
  expect(massD).not.toEqual(sortedMass);
});

test("test 5 quickSort", () => {
  const massD = [0, 0, 0, 1, 1, 1, -1];
  const sortedMass = quickSort(massD);
  expect(sortedMass).toEqual([-1, 0, 0, 0, 1, 1, 1]);
});

test("test 1 quickSortPointer", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(quickSortPointer(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 quickSortPointer", () => {
  const massB = [];
  expect(quickSortPointer(massB)).toEqual([]);
});

test("test 3 quickSortPointer", () => {
  const massC = [1, 3, 5, 7];
  expect(quickSortPointer(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 quickSortPointer", () => {
  const massD = [0, 0, 0, 1, 1, 1, -1];
  const sortedMass = quickSortPointer(massD);
  expect(sortedMass).toEqual([-1, 0, 0, 0, 1, 1, 1]);
});

test("test 1 heapSort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(heapSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 heapSort", () => {
  const massB = [];
  expect(heapSort(massB)).toEqual([]);
});

test("test 3 heapSort", () => {
  const massC = [1, 3, 5, 7];
  expect(heapSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 heapSort", () => {
  const massD = [0, 0, 0, 1, 1, 1, -1];
  const sortedMass = heapSort(massD);
  expect(sortedMass).toEqual([-1, 0, 0, 0, 1, 1, 1]);
});

test("test 1 mergeSort", () => {
  const massA = [5, 2, 3, 0, 1];
  expect(mergeSort(massA)).toEqual([0, 1, 2, 3, 5]);
});

test("test 2 mergeSort", () => {
  const massB = [];
  expect(mergeSort(massB)).toEqual([]);
});

test("test 3 mergeSort", () => {
  const massC = [1, 3, 5, 7];
  expect(mergeSort(massC)).toEqual([1, 3, 5, 7]);
});

test("test 4 mergeSort", () => {
  const massD = [0, 0, 0, 1, 1, 1, -1];
  const sortedMass = mergeSort(massD);
  expect(sortedMass).toEqual([-1, 0, 0, 0, 1, 1, 1]);
});
