const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

const DIM_X = 600;
const DIM_Y = 800;
const NUM_ASTEROIDS = 4;

function Game(){
  this.asteroids = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(), this);
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

Game.prototype.allObjects = function(){
  return this.asteroids.concat([this.ship]);
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,DIM_X,DIM_Y);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, DIM_X, DIM_Y);
  this.allObjects().forEach(obj => {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function(){
  this.allObjects().forEach(obj => {
    obj.move();
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
  const objs = this.allObjects();
  for(let i = 0; i < objs.length; i++){
    for(let j = i+1; j < objs.length; j++){
      if(objs[i].isCollidedWith(objs[j])){
        // alert("COLLISION");
      }
    }
  }
};

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid){
  const idx = this.asteroids.indexOf(asteroid);
  this.asteroids = this.asteroids.slice(0, idx)
  .concat(this.asteroids.slice(idx+1));
};

module.exports = Game;