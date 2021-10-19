"use strict";

class Snake {
    constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.positions = [];
    this.size = 10;
    this.direction = 'ArrowRight';
    this.isGameOver = false;
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
            y: this.y - this.size,
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


  checkScreen() {
    if (this.x >= this.canvas.width || this.x < 0 || this.y < 0 || this.y >= this.canvas.height ) {
      this.isGameOver = true;   
    }
  }

  /*eatTreat() {

  }*/
}

export default Snake;