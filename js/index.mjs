"use-strict";

import Game from "./game.mjs";

const canvas = document.getElementById("canvas")
const game = new Game(canvas);

game.startLoop();


const setSnakeDirection = (event) => {
  if (!game.snake.wrongMovement(event.code)) {
    game.snake.setDirection(event.code);
  }
};

document.addEventListener("keydown", setSnakeDirection);