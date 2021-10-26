"use-strict";

import Game from "./game.mjs";

//game screens
const splashScreen = document.getElementById("splash-screen");
const playingScreen = document.getElementById("game-board");
const gameoverScreen = document.getElementById("game-over");

function showScreen(screen){
  switch(screen){
          
      case 0:  splashScreen.style.display = "flex";
               playingScreen.style.display = "none";
               gameoverScreen.style.display = "none";
               break;
          
      case 1:  splashScreen.style.display = "none";
               playingScreen.style.display = "flex";
               gameoverScreen.style.display = "none";
               break;
          
      case 2:  splashScreen.style.display = "none";
               playingScreen.style.display = "none";
               gameoverScreen.style.display = "flex";
               break;
          
  }
}

function buildSplashScreen(){
  showScreen(0);
  const startButton = document.querySelector("button");
  startButton.addEventListener("click", buildPlayingScreen);
}

buildSplashScreen();

function buildPlayingScreen(){
  showScreen(1)
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(canvas);
  game.startLoop();
  game.gameOverCallback(buildGameoverScreen);
  
  function hasUserClickRightKey(code){
    return code === "ArrowUp" || code === "ArrowDown" || code === "ArrowLeft" || code === "ArrowRight"
  }
      
  const setSnakeDirection = (event) => {
    if(!hasUserClickRightKey(event.code)){
      return
    }
  
    if (!game.snake.wrongMovement(event.code)) {
      game.snake.setDirection(event.code);
    }
  };
  document.addEventListener("keydown", setSnakeDirection);
}

function buildGameoverScreen(){
  showScreen(2)
  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", buildPlayingScreen);

  const reloadButton = document.getElementById("reload");
  reloadButton.addEventListener("click", buildSplashScreen);
}

