const MovingObject = require("./moving_object.js");
const Util = require("./util");
Util.inherits(Ship, MovingObject);

const RADIUS = 100;
const COLOR = "red";

function Ship(pos, game){
  MovingObject.call(this,
    pos,
    [0,0],
    RADIUS,
    COLOR,
    game
    );
}

Ship.prototype.relocate = function(){
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
};

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

module.exports = Ship;