"use-strict";

import Game from "./game.mjs";

const canvas = document.getElementById("canvas")
const game = new Game(canvas);

game.startLoop();


window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch(event.code) {
    case "KeyS":
    case "ArrowDown":
      // Handle "back"
      updatePosition(-moveRate);
      break;
    case "KeyW":
    case "ArrowUp":
      // Handle "forward"
      updatePosition(moveRate);
      break;
    case "KeyA":
    case "ArrowLeft":
      // Handle "turn left"
      angle -= turnRate;
      break;
    case "KeyD":
    case "ArrowRight":
      // Handle "turn right"
      angle += turnRate;
      break;
  }



  refresh();

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);
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