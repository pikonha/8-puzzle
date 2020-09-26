class Queue {
  constructor() {
    this.values = [];
  }

  getValues() {
    return this.values;
  }

  getLength() {
    return this.values.length;
  }

  insert(value) {
    if (!this.values.some((v) => v.compare(value))) {
      this.values = [...this.values, value];
    }
  }

  pop() {
    return this.values.shift();
  }
}

class List {
  constructor() {
    this.state = [];
  }
}

class SortedList {
  constructor(sortFunction) {
    this.values = [];
    this.sortFunction = sortFunction;
  }

  getValues() {
    return this.values;
  }

  getLength() {
    return this.values.length;
  }

  insert(value, heuristicValue = 0) {
    if (!this.values.some((v) => v.compare(value))) {
      this.values = [value, ...this.values];
      this.values.sort(this.sortFunction(heuristicValue));
    }
  }

  pop() {
    return this.values.shift();
  }
}
