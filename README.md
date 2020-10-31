# 8 Puzzle

This is an implementation of a 8 puzzle game being solved through traversal algorithms.

## Roadmap

- [ ] Depth first search
- [ ] Breadth first search
- [x] Uniform cost search
- [x] A\* search

## Data structures

- Depth first search
  - Open nodes: **stack**
- Breadth first search
  - Open nodes: **queue**
- Uniform cost search
  - Open nodes: **sorted list**
- A\* search
  - Open nodes: **sorted list**

> "Half of the starting positions for the n puzzle are impossible to resolve."
>
> <cite>Johnson, Wm. Woolsey; Story, William E. (1879), ["Notes on the "15" Puzzle"](https://www.jstor.org/stable/2369492?origin=crossref&seq=1#metadata_info_tab_contents)</cite>

## Tasks

- Node
  - [x] Structure
  - [x] Is objective
  - [x] Compare
  - [x] Children
- Open nodes
  - [x] Structure
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
  - [x] Prediction heuristic

## Bonus

- [x] Display node
- [x] Display solving process

## References

- [N-Puzzle solvability](https://en.wikipedia.org/wiki/15_puzzle#Solvability)
- [Order array nulls last](https://stackoverflow.com/a/29829370/8500815)
- [Generate initial state](https://stackoverflow.com/a/18650169/8500815)
- [Swap array index](https://stackoverflow.com/questions/872310/javascript-swap-array-elements/14881632)
- [Tree visualization](https://github.com/putuprema/BinarySearchTree-J)
- [Generate random arbitrary](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range)
