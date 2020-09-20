class Game {
  constructor(openNodes) {
    this.openNodes = openNodes;
    this.visitedNodes = [];
    this.currentNode = null;
    this.turns = 0;
  }

  display() {
    text(this.turns, 20, 20);
  }

  isDone() {
    return this.currentNode && this.currentNode.isObjective();
  }

  isNodeVisited(node) {
    return this.visitedNodes.some((n) => n.compare(node));
  }

  nextTurn() {
    ++this.turns;

    this.openNodes.getValues();
    console.log(
      "visited nodes",
      this.visitedNodes.map((v) => v.getState())
    );

    this.currentNode = openNodes.pop();
    this.visitedNodes.push(this.currentNode);

    this.currentNode.children().forEach((node) => {
      if (this.isNodeVisited(node)) {
        // console.log("node visited ", node.getState());
      } else {
        // console.log("node not visited ", node.getState());
        this.openNodes.insert(node);
      }
    });

    if (this.isDone()) {
      console.log("FINAL", this.currentNode.getState());
      return true;
    }
  }
}
