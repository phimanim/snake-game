"use strict";
import Snake from "./snake.mjs";
//import Treat from "./treat.mjs";

class Game {
    constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.tile = 10;
    this.snake;
    this.treat;
    this.invervalId = null;
    }


startLoop() {
    this.snake = new Snake(this.canvas);

    this.invervalId = setInterval(() => {
      this.clearCanvas();
      this.drawCanvas();
      this.snake.draw();
      this.snake.drawFood();
      this.snake.gameOver();
      //this.snake.generateFood();
      this.snake.eatFood();
      this.snake.updatePositions();
      if (this.snake.isGameOver) {
        clearInterval(this.invervalId);
      }
    }, 100);
  }


clearCanvas(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}


drawCanvas(){
    
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0,0, canvas.width, canvas.height);

}

/*clearCanvas(){

}

checkAllCollisions(){
 this.snake.checkScreen();

}

*/

}

export default Game;