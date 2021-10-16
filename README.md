# snake-game

## Description
​
Snake is a game where a snake moves in a grid area where a treat appear. Each time it eats a treat, he is streching out. The end of the game is when the snake is as long as it takes all the screen.
​
## MVP (DOM - CANVAS)
​
- one player game
- snake has to eat treat
- if snake touches the border of the screen it's game over
- if all treats are eated it means that the snake takes all the screen game and you win
- snake cannot touch himself

​
## Backlog
​
- add scoreboard
- add sound and ability to enable it
- ability to have extra 3 lives to decrease difficulty level
- ability to choose speed of snake to increase difficulty
- add obstacles to avoid
- add best score
​
## Data Structure
​
# main.js
​
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
​
# game.js
​
- Game () {}
- starLoop () {}
- checkEating () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}
​
# snake.js 
​
- Ship () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkIfEat () {}
​
# treat.js 
​
- Treat () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- checkIfEated () {}
​
​
## States y States Transitions

​
## Task

​
## Links
​
### Notion
[Link url](https://www.notion.so/c7900e4b862d49ee9e4a24a81b515225?v=f81cdc3193c24cf0b236a3c341246020)
​
### Git
URls for the project repo and deploy
[Link Repo](https://github.com/phimanim/snake-game.git)
[Link Deploy]()
​
### Slides
URls for the project presentation (slides)
[Link Slides.com]()