import Game from "./Game.js"
import GameView from "./Gameview.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () =>{
reStart();
})

let tiles = document.querySelectorAll(".board-tile")
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
       onTileClick(tile.dataset.index);
    })
})


function onTileClick(i){

    //do something
game.makeMove(i)
    //change turn
gameView.updateBoard(game);

    //updateboard
}

function reStart(){
    game = new Game();
    gameView.updateBoard(game);

}
 gameView.updateBoard(game);



 //////////

