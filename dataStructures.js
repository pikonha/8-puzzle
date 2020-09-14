class Queue {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
  }
}

class List {
  constructor() {
    this.state = new Set();
  }
}

class SortedList {
  constructor() {
    this.state = new Set();
  }
}
