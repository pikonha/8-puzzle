function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * returns an array randomized with a null value
 * e.g.: [1, 4, 2, 6, 3, null, 0, 5, 7];
 */
function generateInitialState() {
  const finalNode = new Node(GOAL_STATE);
  const shuffleLimit = getRandomArbitrary(1, 20);

  let node = finalNode;
  for (let i = 0; i < shuffleLimit; ++i) {
    const children = node.children();
    const sample = children.sample();
    node = sample;
  }

  return node;
}

function getOpenNodesStructure(aglorithmOption) {
  switch (aglorithmOption) {
    case "uniform-cost":
      return new SortedList(() => (a, b) =>
        a.getValue() < b.getValue() ? -1 : 1
      );
    case "a*":
      return new SortedList((heuristicValue) => (a, b) =>
        a.getValue() + heuristicValue < b.getValue() + heuristicValue ? -1 : 1
      );
  }
}

let game = null;
const GOAL_STATE = [0, 1, 2, 3, 4, 5, 6, 7, null];

function preload() {
  const startButton = document.querySelector("button");
  startButton.addEventListener("click", setupGame);
}

function setupGame() {
  const algorithmSelector = document.querySelector("#algorithm-selector");
  const algorithmOption = algorithmSelector.value;

  const openNodes = getOpenNodesStructure(algorithmOption);
  const initialState = generateInitialState();
  openNodes.insert(initialState);

  game = new Game(openNodes);

  loop();
}

function setup() {
  createCanvas(300, 300);
  textAlign(CENTER);

  noLoop();
}

function draw() {
  background(51);

  if (!game) return;

  game.display();

  if (game.isDone()) return noLoop();

  game.nextTurn();
}
