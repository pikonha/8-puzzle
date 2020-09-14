class Game {
  constructor(initialState, visitedNodes) {
    this.state = initialState;
    this.visitedNodes = visitedNodes;
  }

  #run() {
    if (initialState.isObjective()) return true;
  }

  start() {
    const gameInterval = setInterval(() => {
      if (this.#run()) clearInterval(gameInterval);
    }, 2000);
  }
}
