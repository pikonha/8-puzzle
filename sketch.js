/**
 * returns an array randomized with a null value
 * e.g.: [1, 4, 2, 6, 3, null, 8, 5, 7];
 */
function generateInitialState() {
  return Array.from([...Array(8).keys(), null]).sort(() => 0.5 - Math.random());
}

let openNodes,
  game,
  initialState = null;

function setup() {
  createCanvas(400, 400);
  frameRate(2);

  // openNodes = new Queue();
  openNodes = new SortedList();
  initialState = new Node([0, 1, 2, 3, null, 5, 6, 4, 7]);
  // initialState = new Node(generateInitialState());
  openNodes.insert(initialState);
  console.log("===========");

  game = new Game(openNodes);
  // noLoop();
}

let n = 0;
function draw() {
  // if (n++ === 2) return noLoop();
  background(220);

  if (game.isDone()) return noLoop();

  game.nextTurn();

  game.display();

  console.log("===========");
}
