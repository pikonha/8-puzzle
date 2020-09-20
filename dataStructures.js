class Queue {
  constructor() {
    this.values = [];
  }

  getValues() {
    console.log(this.values.map((v) => v.getState()));
  }

  insert(value) {
    if (this.values.some((v) => v.compare(value))) {
      console.log("not inserted", value.getState());
      return;
    }

    this.values = [...this.values, value];
    console.log("inserted", value.getState());
  }

  pop() {
    const node = this.values.shift();

    console.log("removed", node.getState());
    return node;
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
    console.log(
      "open values",
      this.values.map((v) => v.getState())
    );
  }

  insert(value) {
    if (!this.values.some((v) => v.compare(value))) {
      this.values = [...this.values, value];
      this.values.sort((a, b) => (a.getValue() < b.getValue() ? -1 : 1));
      console.log("inserted", value.getState(), " ", value.getValue());
    }
  }

  pop() {
    const node = this.values.shift();

    console.log("removed", node.getState());
    return node;
  }
}
