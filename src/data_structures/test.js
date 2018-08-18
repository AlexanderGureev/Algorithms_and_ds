const { MinHeap } = require("./heap");

const minHeap = new MinHeap();
const mass = [5,1,3,4,7,0,1,2,5,8,6,5,3];
minHeap.add(...mass);

test("test 1 left(i)", () => {
  const left = minHeap.left(3);
  expect(left).toEqual(7);
});
test("test 2 right(i)", () => {
  const right = minHeap.right(3);
  expect(right).toEqual(8);
});
test("test 3 parent(i)", () => {
  const parent = minHeap.parent(3);
  expect(parent).toEqual(1);
});
test("test 4 showHeap", () => {
  const resMass = [ 0, 2, 1, 4, 6, 3, 1, 5, 5, 8, 7, 5, 3 ];
  expect(minHeap.showHeap()).toEqual(resMass);
});
test("test 5 heapSize", () => {
  const length = mass.length;
  expect(minHeap.heapSize).toEqual(length);
});
test("test 6-1 add elements", () => {
  const elements = [3, 2];
  minHeap.add(...elements);
  expect(minHeap.showHeap()).toEqual([ 0, 2, 1, 4, 6, 3, 1, 5, 5, 8, 7, 5, 3, 3, 2 ]);
});
test("test 6-2 add empty item", () => {
  minHeap.add();
  expect(minHeap.showHeap()).toEqual([ 0, 2, 1, 4, 6, 3, 1, 5, 5, 8, 7, 5, 3, 3, 2 ]);
});
test("test 7 getMin", () => {
  minHeap.getMin();
  expect(minHeap.showHeap()).toEqual([ 1, 2, 1, 4, 6, 3, 2, 5, 5, 8, 7, 5, 3, 3 ]);
});
test("test 8 remove item", () => {
  minHeap.remove(3);
  expect(minHeap.showHeap()).toEqual([ 1, 2, 1, 3, 6, 3, 2, 5, 5, 8, 7, 5, 3 ]);
});
