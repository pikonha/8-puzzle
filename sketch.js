/**
 * returns an array randomized with a null value
 * e.g.: [1, 4, 2, 6, 3, null, 8, 5, 7];
 */
function generateInitialState() {
  return Array.from([...Array(8).keys(), null]).sort(() => 0.5 - Math.random());
}

let openNodes,
  game = null;

function setup() {
  createCanvas(400, 400);

  // openNodes = new Queue();
  openNodes = new SortedList();
  const initialState = new Node(generateInitialState());
  openNodes.insert(initialState);

  game = new Game(openNodes);
}

function draw() {
  background(51);

  game.display();

  if (game.isDone()) {
    // background("green");
    return noLoop();
  }

  game.nextTurn();
}
