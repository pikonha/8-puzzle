class Node {
  // State = [1,2,3,4,5,6,7,8,null]
  constructor(state) {
    this.state = state;
  }

  isObjective() {
    return (
      this.state ===
      [...this.state].sort(
        (a, b) => (a === null) - (b === null) || +(a > b) || -(a < b)
      )
    );
  }

  /** Return an array of nodes that might come from the instance */
  children() {}

  compare(node) {
    return JSON.stringify(node.state) === JSON.stringify(this.state);
  }

  // display() {
  //   fill(246);
  //   textSize(32);

  //   return this.state.forEach((value) => {
  //     text(String.toString(value));
  //     square(10, 10, 20);
  //   });
  // }
}
