class MinHeap {
  constructor() {
    this.arrayHeap = [];
    this._heapSize = 0;
  }

  get heapSize() {
    return this._heapSize;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return (2 * i) + 1;
  }

  right(i) {
    return (2 * i) + 2;
  }

  add(...elements) {
    elements.forEach(item => {
      this.arrayHeap.push(item);
      this._heapSize++; 
      this.siftUp(this._heapSize - 1);
    });
  }

  swap(indexA, indexB) {
    [ this.arrayHeap[indexA], this.arrayHeap[indexB] ] = [ this.arrayHeap[indexB], this.arrayHeap[indexA] ];
  }

  siftUp(i) {
    while(this.arrayHeap[i] < this.arrayHeap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }
  siftDown(i) {
    while(2 * i + 1 < this._heapSize) {
      let left = this.left(i),
          right = this.right(i),
          curr = left;

      if(this.arrayHeap[right] < this.arrayHeap[left]) {
        curr = right;
      }

      if(this.arrayHeap[i] > this.arrayHeap[curr]) {
        this.swap(i, curr);
      }
      i = curr;
    }
  }

  getMin() {
    let min = this.arrayHeap[0];
    this.arrayHeap[0] = this.arrayHeap.pop();
    this.siftDown(0);
    this._heapSize--;
    return min;
  }

  buildHeap(mass) {
    this.arrayHeap = [ ...mass ];
    this._heapSize = mass.length;
    let size = Math.floor((mass.length / 2) - 1);
    for(let i = size; i >= 0; i-- ) {
      this.siftDown(i);
    }
  }

  remove(i) {
    this.arrayHeap[i] = -1;
    this.siftUp(i);
    this.getMin(0);
  }

  showHeap() {
    return this.arrayHeap;
  }
}

module.exports = {
  MinHeap
};