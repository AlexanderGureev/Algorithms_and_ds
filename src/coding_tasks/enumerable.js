class Enumerable {
  constructor(collection, operations = []) {
    this.collection = collection;
    this.operations = operations;
  }

  buildNewEnumerable(collection, operation) {
    return new Enumerable(
      collection.slice(),
      this.operations.concat(operation)
    );
  }
  select(fn) {
    return this.buildNewEnumerable(this.collection, coll => coll.map(fn));
  }

  where(...rest) {
    const res = rest.map(item => {
      if (typeof item === "function") {
        return coll => coll.filter(item);
      }

      let keys = Object.keys(item);
      return coll =>
        coll.filter(elem => {
          return keys.every(key => elem[key] === item[key]);
        });
    });
    return this.buildNewEnumerable(this.collection, res);
  }

  orderBy(fn, direction) {
    const compared = function(a, b) {
      if (direction === "desc") {
        if (fn(a) > fn(b)) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (fn(a) > fn(b)) {
          return 1;
        } else {
          return -1;
        }
      }
    };

    return this.buildNewEnumerable(this.collection, coll =>
      coll.slice().sort(compared)
    );
  }

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce(
        (acc, func) => func(acc),
        this.collection
      );
    }

    return this.memo;
  }
}

let cars = [
  { brand: "bmw", model: "m5", year: 2014 },
  { brand: "bmw", model: "m4", year: 2013 },
  { brand: "kia", model: "sorento", year: 2014 },
  { brand: "kia", model: "rio", year: 2010 },
  { brand: "kia", model: "sportage", year: 2012 }
];
let coll = new Enumerable(cars);

coll.orderBy(car => car.year, "asc").toArray();

const result = coll
  .where({ model: "rio", year: 2010 })
  .where(car => car.year > 2011)
  .select(car => car.model);

result.toArray();
