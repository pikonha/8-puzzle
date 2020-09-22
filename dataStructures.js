class Queue {
  constructor() {
    this.values = [];
  }

  getValues() {}

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
    this.state = new Set();
  }
}

class SortedList {
  constructor() {
    this.values = [];
  }

  getValues() {
    return this.values;
  }

  insert(value) {
    if (!this.values.some((v) => v.compare(value))) {
      this.values = [value, ...this.values];
      this.values.sort((a, b) => (a.getValue() < b.getValue() ? -1 : 1));
    }
  }

  pop() {
    return this.values.shift();
  }
}
