export default class Game {

  constructor() {
    // console.log("init game")
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    if (this.turn == "X") {
      this.turn = "0";
    } else {
      this.turn = "X"
    }
  }

  makeMove(i) {
    if (this.endofGame()) {
      return;
    }

    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn; //x or o
    let winCombo = this.findWinner();
    if (!winCombo) {
      this.nextTurn();
    }
  }

  findWinner() {
    const winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]

    for (const combos of winCombo) {
      const [a, b, c] = combos;

      if (this.board[a] &&
        (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        return combos;
      }
    }
    return null;
  }

  endofGame() {
    let winCombo = this.findWinner();
    if (winCombo) {
      return true;
    } else {
      return false;
    }
  }
}
