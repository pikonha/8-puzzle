# 8 Puzzle

This is an implementation of a 8 puzzle game being solved through traversal algorithms.

## Roadmap

- [ ] Depth first search
- [ ] Breadth first search
- [x] Uniform cost search
- [ ] A\* search simple heuristic
- [ ] A\* search better heuristic

## Data structures

- Depth first search
  - Open nodes: **stack**
- Breadth first search
  - Open nodes: **queue**
- Uniform cost search
  - Open nodes: **sorted list**
- A\* search
  - Open nodes: **sorted list**

## Tasks

- Node
  - [x] Structure
  - [x] Is objective
  - [x] Compare
  - [x] Children
- Open nodes
  - [ ] Structure
    - [ ] Stack
      - [ ] Find
      - [ ] Pop
    - [x] Queue
      - [x] Find
      - [x] Pop
    - [x] SortedList
      - [x] Sort
      - [x] Find
      - [x] Pop
- Runtime
  - [x] Interval
  - [x] Generate random inital state
- Search
  - [x] Weights
  - [ ] Prediction heuristic

## Bonus

- [ ] Display node
- [ ] Display solving process
- [ ] Typescript

## References

- [Order array nulls last](https://stackoverflow.com/a/29829370/8500815)
- [Generate initial state](https://stackoverflow.com/a/18650169/8500815)
- [Swap array index](https://stackoverflow.com/questions/872310/javascript-swap-array-elements/14881632)
- [Tree visualization](https://github.com/Schnurber/treevis)
