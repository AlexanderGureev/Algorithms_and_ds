class Seq {
  constructor(start = 0, fn, elements = Infinity) {
    this.start = start;
    this.fn = fn;
    this.elements = elements;
    this.current = start;
  }

  skip(n) {
    let newStart = this.start;
    for(let i = 0; i < n; i++) {
      newStart = this.fn(newStart);
    }
    return new Seq(newStart, this.fn, this.elements);
  }
  take(n) {
    return new Seq(this.start, this.fn, n);
  }

  *[Symbol.iterator]() {
    for(let i = 0; i < this.elements; i++) {
      yield this.current;
      this.current = this.fn(this.current);
    }
  }
}