class Graph {
  constructor(value, name, children = []) {
    this._value = value;
    this._name = name;
    this._children = children;
  }

  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
  set children(c) {
    this._children = [...c];
  }
  get children() {
    return this._children;
  }
}

function seachInGraph(graph, fn) {
  let queue = [...graph.children],
    isCheckedList = [];

  while (queue.length) {
    let item = queue.shift();

    if (!isCheckedList.find(item => item.value === item.value)) {
      if (fn(item.value)) {
        return item;
      } else {
        queue = [...queue, ...item.children];
      }
    }
  }
  return null;
}

const graphMe = new Graph(0, "Me");
const graphClar = new Graph(1, "Clar", [
  new Graph(1.1, "Tom"),
  new Graph(1.2, "Jon")
]);
const graphAlice = new Graph(2, "Alice", [new Graph(2.1, "Peggy")]);
const graphBob = new Graph(3, "Bob", [
  new Graph(3.1, "Peggy"),
  new Graph(3.2, "Anudg")
]);

graphMe.children = [graphClar, graphAlice, graphBob];

seachInGraph(graphMe, value => value == 3.2);
