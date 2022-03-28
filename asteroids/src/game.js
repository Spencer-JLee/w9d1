const Asteroid = require("./asteroid.js");

const DIM_X = 600;
const DIM_Y = 800;
const NUM_ASTEROIDS = 2;

function Game(){
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  while (this.asteroids.length < NUM_ASTEROIDS){
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
};

Game.prototype.randomPosition = function(){
  let x = Math.floor(Math.random() * DIM_X);
  let y = Math.floor(Math.random() * DIM_Y);

  return [x, y];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,DIM_X,DIM_Y);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, DIM_X, DIM_Y);
  this.asteroids.forEach(asteroid => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(asteroid => {
    asteroid.move();
  });
};

Game.prototype.wrap = function(pos){
  let x = pos[0];
  let y = pos[1];
  if (pos[0] < 0){
    x = DIM_X + x; // 600 + -5 
  }
  if (pos[1] < 0){
    y = DIM_Y + y;
  }
  if (pos[0] > DIM_X){
    x = x - DIM_X;
  }
  if (pos[1] > DIM_Y){
    y = y - DIM_Y;
  }
  return [x,y];
};

Game.prototype.checkCollisions = function(){
  const allAsteroids = this.asteroids;
  for(let i = 0; i < allAsteroids.length; i++){
    for(let j = i+1; j < allAsteroids.length; j++){
      if(allAsteroids[i].isCollidedWith(allAsteroids[j])){
        alert("COLLISION");
      }
    }
  }
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
  this.asteroids.delete(this.asteroids.indexOf(asteroid));
};

module.exports = Game;