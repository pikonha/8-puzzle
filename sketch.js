/**
 * returns an array randomized with a null value
 * e.g.: [1, 4, 2, 6, 3, null, 8, 5, 7];
 */
function generateInitialState() {
  return Array.from([...Array(8).keys(), null]).sort(() => 0.5 - Math.random());
}

let visitedNodes,
  game,
  initialState = null;

function setup() {
  createCanvas(400, 400);

  visitedNodes = new Queue();
  initialState = new Node(generateInitialState());

  game = new Game(initialState, visitedNodes);
  game.start();
}

function draw() {
  background(220);
}
