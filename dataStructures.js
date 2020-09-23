class Queue {
  constructor() {
    this.values = [];
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
  constructor() {
    this.values = [];
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
