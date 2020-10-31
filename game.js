class Game {
  constructor(openNodes) {
    this.openNodes = openNodes;
    this.visitedNodes = [];
    this.currentNode = null;
    this.turns = 0;
    this.maximumFrontierLength = 1;
  }

  display() {
    fill(255);

    // this.openNodes.getValues().forEach((node, i) => {
    //   const g = this.turns;
    //   const h = node.getValue();

    //   text(`g=${g} h=${h} f=${g + h}`, i * 100 + 50, this.turns * 80 + 20);
    //   node.display(i * 120 + 50, this.turns * 80 + 40);
    // });

    if (this.visitedNodes.length)
      this.visitedNodes[0].display(width / 2, height / 2 - 90);
    text(`Visited nodes: ${this.turns}`, width / 2, height / 2 - 20);
    text(
      `Expaned nodes: ${this.openNodes.getLength() + this.visitedNodes.length}`,
      width / 2,
      height / 2
    );
    if (this.currentNode)
      text(`Path: ${this.currentNode.getDepth()}`, width / 2, height / 2 + 20);

    text(
      `Maximum frontier length: ${this.maximumFrontierLength}`,
      width / 2,
      height / 2 + 40
    );
  }

  isDone() {
    return this.currentNode && this.currentNode.isObjective();
  }

  isNodeVisited(node) {
    return this.visitedNodes.some((n) => n.compare(node));
  }

  nextTurn() {
    ++this.turns;

    this.currentNode = this.openNodes.pop();
    this.visitedNodes.push(this.currentNode);

    if (this.isDone()) return true;

    this.currentNode.children().forEach((node) => {
      if (!this.isNodeVisited(node)) {
        this.openNodes.insert(node, this.visitedNodes.length);
      }
    });

    this.setFrontierMaxLength();
  }

  setFrontierMaxLength() {
    if (this.openNodes.getLength() > this.maximumFrontierLength)
      this.maximumFrontierLength = this.openNodes.getLength();
  }
}
