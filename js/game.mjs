"use strict";
import Snake from "./snake.mjs";
import Treat from "./treat.mjs";

class Game {
    constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.tile = 10;
    this.snake;
    this.treat;
    this.isGameOver = false;
    }

startLoop(){
    this.snake = new Snake(this.canvas);
    this.treat = new Treat(this.canvas);
    /*this.treat.randomLocation();*/

    const loop = () => {
        this.snake.updatePositions();
        this.clearCanvas()
        this.drawCanvas();
        this.snake.draw();
        this.treat.draw();
        this.snake.moveSnake();
        //this.treat.randomLocation();
        // problem : assign a new location really quick
        

        if (!this.isGameOver) {
          window.requestAnimationFrame(loop);
        }
      };
  
      window.requestAnimationFrame(loop);
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