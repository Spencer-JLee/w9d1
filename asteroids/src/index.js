console.log("Webpack is working");
const MovingObject = require("./moving_object.js");

const movingObject = new MovingObject(
  [30, 30],
  [10, 10],
  5,
  "#00FF00"
);

window.MovingObject = movingObject;