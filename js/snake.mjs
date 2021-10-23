"use strict";

class Snake {
    constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.positions = [
      { x: 10, y: 10},
      { x: 10, y: 20},
      { x: 10, y: 30}
    ];
    this.size = 10;
    this.direction = 'ArrowRight';
    this.food = { x: 80, y: 50 }
    this.isGameOver = false;
    this.score = 0;
  }

  createNewPosition() {
    switch (this.direction) {
      case 'ArrowRight': 
        this.x = this.x + this.size;
        this.y = this.y;
        return {
          x: this.x,
          y: this.y,
        };
      case 'ArrowDown': 
        this.x = this.x;
        this.y = this.y + this.size;
        return {
          x: this.x,
          y: this.y,
        };
      case "ArrowLeft": 
        this.x = this.x - this.size;
        this.y = this.y;
          return {
            x: this.x,
            y: this.y,
          };
      case "ArrowUp": 
        this.x = this.x;
        this.y = this.y - this.size;
          return {
            x: this.x,
            y: this.y,
          };
    }
  }

  wrongMovement(eventCode) {
    if (eventCode === "ArrowUp" && this.direction === "ArrowDown") {
      return true;
    }
    if (eventCode === "ArrowDown" && this.direction === "ArrowUp") {
      return true;
    }
    if (eventCode === "ArrowLeft" && this.direction === "ArrowRight") {
      return true;
    }

    if (eventCode === "ArrowRight" && this.direction === "ArrowLeft") {
      return true;
    }
  }
  updatePositions() {
    this.positions = [...this.positions.slice(1), this.createNewPosition()];
  }

  setDirection(direction) {
    this.direction = direction;
  }

  draw() {
    this.ctx.fillStyle = "white";
    this.positions.forEach((position) =>
    this.ctx.fillRect(position.x, position.y, this.size, this.size)
    );
  }

  gameOver(){
    this.checkBorderCollision();
    this.checkTailCollision();
  }
  
  checkBorderCollision(){
    if (this.positions[this.positions.length - 1].x >= this.canvas.width 
      || this.positions[this.positions.length - 1].x < 0 
      || this.positions[this.positions.length - 1].y < 0 
      || this.positions[this.positions.length - 1].y >= this.canvas.height ) {
      return this.isGameOver = true;
    }
  }

  checkTailCollision(){
    for (let i = 1; i < this.positions.length; i++) {
      if (this.positions[0].x == this.positions[i].x && this.positions[0].y == this.positions[i].y) {
        return this.isGameOver = true;
      }
    }
  }

  generateFood() {
  let x = Math.floor(Math.random() * 40) * 10;
  let y = Math.floor(Math.random() * 40) * 10;

  this.food = { x, y };
}

drawFood(){
  this.ctx.beginPath();
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.food.x, this.food.y, this.size, this.size);
}


eatFood(){
  const addScore = document.getElementById("score")
  let beat = new Audio('./sound/chew.wav')
  if (this.positions[this.positions.length - 1].x == this.food.x && this.positions[this.positions.length - 1].y == this.food.y){
    this.generateFood();
    this.addPart();
    this.score ++;
    addScore.innerHTML = "Score: " + this.score;
    beat.play();
  }
}

addPart(){
  let newPart = this.positions.slice(-1);

  let x = newPart.x;
  let y = newPart.y;
  
  this.positions.push({x, y});
}
}

export default Snake;