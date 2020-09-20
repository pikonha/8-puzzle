class Node {
  // State = [1,2,3,4,5,6,7,8,null]
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  getValue() {
    return this.state.reduce((value, element, index, source) => {
      if (element === null && index !== source.length - 1) return value + 1;
      if (element !== index) return value + 1;
      return value;
    }, 0);
  }

  isObjective() {
    return (
      JSON.stringify(this.state) ===
      JSON.stringify(
        [...this.state].sort(
          (a, b) => (a === null) - (b === null) || +(a > b) || -(a < b)
        )
      )
    );
  }

  /** Return an array of nodes that might come after the instance */
  children() {
    const emptyIndex = this.state.indexOf(null);

    const edgePossibilities = [-3, -1, 1, 3];

    return edgePossibilities.reduce((edges, variant) => {
      const resultantIndex = emptyIndex + variant;

      switch (true) {
        case resultantIndex < 0:
        case resultantIndex > 8:
        case (emptyIndex == 2 || emptyIndex == 6) && variant === 1:
        case (emptyIndex == 3 || emptyIndex == 5) && variant === -1:
          return edges;
        default: {
          return [
            ...edges,
            new Node(swapArrayIndex(this.state, resultantIndex, emptyIndex)),
          ];
        }
      }
    }, []);
  }

  compare(node) {
    return JSON.stringify(node.getState()) === JSON.stringify(this.state);
  }

  //   display() {
  //     fill(246);
  //     textSize(32);

  //     this.state.forEach((value) => {
  //       text(String.toString(value));
  //       square(10, 10, 20);
  //     });
  //   }
}

function swapArrayIndex(array, indexA, indexB) {
  const resultantArray = [...array];
  [resultantArray[indexA], resultantArray[indexB]] = [
    resultantArray[indexB],
    resultantArray[indexA],
  ];

  return resultantArray;
}
