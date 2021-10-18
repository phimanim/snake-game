"use-strict";

import Game from "./game.mjs";

const canvas = document.getElementById("canvas")
const game = new Game(canvas);

game.startLoop();

/*const setSnakeDirection = (event) => {
    if (event.code === "ArrowUp") {
      game.snake.setDirection(-1);
    } else if (event.code === "ArrowLeft") {
      game.snake.setDirection(1);
    } else if(event.code === "ArrowRight") {
        game.snake.setDirection(-1);
      } else if (event.code === "ArrowDown") {
        game.snake.setDirection(1);
      }
  };*/