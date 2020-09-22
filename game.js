class Game {
  constructor(openNodes) {
    this.openNodes = openNodes;
    this.visitedNodes = [];
    this.currentNode = null;
    this.turns = 0;
  }

  display() {
    fill(255);
    text(this.turns, width / 2, height / 2);

    // this.openNodes.getValues().forEach((node, i) => {
    //   text(node.getValue(), i * 120 + 50, this.turns * 80 + 20);
    //   node.display(i * 120 + 50, this.turns * 80 + 40);
    // });
  }

  isDone() {
    return this.currentNode && this.currentNode.isObjective();
  }

  isNodeVisited(node) {
    return this.visitedNodes.some((n) => n.compare(node));
  }

  nextTurn() {
    ++this.turns;

    this.currentNode = openNodes.pop();
    this.visitedNodes.push(this.currentNode);

    this.currentNode.children().forEach((node) => {
      if (!this.isNodeVisited(node)) {
        this.openNodes.insert(node);
      }
    });

    if (this.isDone()) {
      console.log("FINAL", this.currentNode.getState());
      return true;
    }
  }
}
