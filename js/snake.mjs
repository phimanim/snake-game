"use strict";

class Snake {
    constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 10;
    this.y = 10;
    this.positions = [];
    this.size = 20;
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

  draw() {
    this.positions.forEach((position) =>
    /*this.ctx.fillStyle = white,*/
    this.ctx.fillRect(position.x, position.y, this.size, this.size)
    );
  }

  /*checkScreen() {

  }

  eatTreat() {

  }*/
}

export default Snake;