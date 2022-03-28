const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
Util.inherits(Asteroid, MovingObject);

const RADIUS = 20;
const COLOR = "gray";

function Asteroid(pos, game){
  MovingObject.call(this, 
    pos, 
    Util.randomVec(Math.floor(Math.random() * 10) + 1),
    RADIUS,
    COLOR,
    game
  );
}

module.exports = Asteroid;