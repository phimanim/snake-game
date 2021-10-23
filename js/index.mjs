"use-strict";

import Game from "./game.mjs";

function buildDom(html) {
  const main = document.querySelector("main");
  main.innerHTML = html;
}

function buildSplashScreen() {
  buildDom(`
      <section class="splash-screen">
        <h1>Snake</h1>
        <button id="play">Play</button>
      </section>
    `);
  const startButton = document .querySelector("button");
  startButton.addEventListener("click", buildGameScreen);
}

function buildGameScreen() {
  buildDom(`
      <div id="game-board">
      <canvas id="canvas" width="400" height="400"></canvas>
      <div id="score">Score: 0</div>
      </div>
    `);

    const canvas = document.getElementById("canvas")
    const game = new Game(canvas);

    game.startLoop();
    game.gameOverCallback(buildGameOver);


    const setSnakeDirection = (event) => {
    if (!game.snake.wrongMovement(event.code)) {
    game.snake.setDirection(event.code);
   }
   };

  document.addEventListener("keydown", setSnakeDirection);

}

function buildGameOver() {
  buildDom(`
      <section class="game-over">
        <div class="center">
          <h1>Game Over</h1>
          <button id="restart">Restart</button>
        </div>
      </section>
    `);

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", buildGameScreen);
}

const main = () => {
  buildSplashScreen();
};

window.addEventListener("load", main);
