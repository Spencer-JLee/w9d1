window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');

  canvasEl.width = 600;
  canvasEl.height = 800;
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,600, 800);

  // movingObject.draw(ctx);
  // movingObject.move();
  // movingObject.draw(ctx);

  // asteroid1.draw(ctx);

  const gameView = new GameView(ctx);
  gameView.start();

});


console.log("Webpack is working");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

const movingObject = new MovingObject(
  [300, 400],
  [10, 10],
  30,
  "#00FF00"
);

const asteroid1 = new Asteroid([60, 500]);



window.MovingObject = movingObject;