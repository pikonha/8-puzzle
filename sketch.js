/**
 * returns an array randomized with a null value
 * e.g.: [1, 4, 2, 6, 3, null, 8, 5, 7];
 */
function generateInitialState() {
  return Array.from([...Array(8).keys(), null]).sort(() => 0.5 - Math.random());
}

function getOpenNodesStructure(aglorithmOption) {
  switch (aglorithmOption) {
    case "depth":
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

function preload() {
  const startButton = document.querySelector("button");
  startButton.addEventListener("click", setupGame);
}

function setupGame() {
  const aglorithmSelector = document.querySelector("#algorithm-selector");
  const aglorithmOption = aglorithmSelector.value;

  const openNodes = getOpenNodesStructure(aglorithmOption);
  const initialState = new Node(generateInitialState());
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
