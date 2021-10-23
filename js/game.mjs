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
    this.speed = 100;
    }

  setSpeed(){
    const chooseSpeed = document.getElementsByName("spd");
      for(let i = 0; i < chooseSpeed.length; i++){
        if (chooseSpeed[0].checked){
          this.speed = chooseSpeed[0].value
        }
        else if (chooseSpeed[1].checked){
          this.speed = chooseSpeed[1].value
        }
        else if (chooseSpeed[2].checked){
          this.speed = chooseSpeed[2].value
        }
        else if (chooseSpeed[3].checked){
          this.speed = chooseSpeed[3].value
        }
      }
  }

startLoop() {
    this.snake = new Snake(this.canvas);
    this.setSpeed();

    this.invervalId = setInterval(() => {
      this.clearCanvas();
      this.drawCanvas();
      this.snake.draw();
      this.snake.drawFood();
      this.snake.gameOver();
      this.snake.eatFood();
      this.snake.updatePositions();
      if (this.snake.isGameOver) {
        clearInterval(this.invervalId);
        this.onGameOver();
      }
    }, this.speed);
}

clearCanvas(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}


drawCanvas(){
    
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0,0, canvas.width, canvas.height);

}

gameOverCallback(callback) {
  this.onGameOver = callback;
}

}

export default Game;