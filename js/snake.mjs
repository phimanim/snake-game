"use strict";

class Snake {
    constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.positions = [];
    this.size = 10;
    this.direction = 'right';
  }

  createNewPosition() {
    switch (this.direction) {
      case 'right':
        return {
          x: this.x + this.size / 2,
          y: this.y
        };
      case 'down':
        return {
          x: this.x,
          y: this.y + this.size / 2
        };
      case 'left':
        return {
          x: this.x - this.size / 2,
          y: this.y
        };
      case 'up':
        return {
          x: this.x,
          y: this.y - this.size / 2
        };
    }
  }

  updatePositions() {
    this.positions = [...this.positions.slice(1), this.createNewPosition()];
  }

  //update(){
    //this.x = this.x + this.size;
    //this.y = this.y + this.size;
  //}

  draw() {
    this.ctx.fillStyle = "white";
    this.positions.forEach((position) =>
    this.ctx.fillRect(position.x, position.y, this.size, this.size)
    );
  }


  
  moveSnake(){
    let x = this.positions[0].x
    let y = this.positions[0].y

  switch (this.direction) {
    case "down":
      y = 700 % (y + 10)
      break
    case "up":
      y = 700 % (y - 10)
      break
  
    case "left":
      x = 700 % (x - 10)
      break
    case "right":
      x = 700 % (x + 10)
      break
  }
  const newSnake = [{ x, y}]
  const snakeLength = this.positions.length
  for (let i = 1; i < snakeLength; ++i) {
    newSnake.push({ ...this.positions[i - 1] })
  }
  this.positions = newSnake
  }
  
  /*checkScreen() {
     
  }

  eatTreat() {

  }*/
}

export default Snake;