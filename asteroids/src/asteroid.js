const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
Util.inherits(Asteroid, MovingObject);

const RADIUS = 20;
const COLOR = "gray";

function Asteroid(pos){
  MovingObject.call(this, pos, Util.randomVec(Math.random()) );
}