/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nUtil.inherits(Asteroid, MovingObject);\n\nconst RADIUS = 20;\nconst COLOR = \"gray\";\n\nfunction Asteroid(pos, game){\n  MovingObject.call(this, \n    pos, \n    Util.randomVec(Math.floor(Math.random() * 10) + 1),\n    RADIUS,\n    COLOR,\n    game\n  );\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nconst DIM_X = 600;\nconst DIM_Y = 800;\nconst NUM_ASTEROIDS = 2;\n\nfunction Game(){\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function(){\n  while (this.asteroids.length < NUM_ASTEROIDS){\n    this.asteroids.push(new Asteroid(this.randomPosition(), this));\n  }\n};\n\nGame.prototype.randomPosition = function(){\n  let x = Math.floor(Math.random() * DIM_X);\n  let y = Math.floor(Math.random() * DIM_Y);\n\n  return [x, y];\n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0,0,DIM_X,DIM_Y);\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0, 0, DIM_X, DIM_Y);\n  this.asteroids.forEach(asteroid => {\n    asteroid.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function(){\n  this.asteroids.forEach(asteroid => {\n    asteroid.move();\n  });\n};\n\nGame.prototype.wrap = function(pos){\n  let x = pos[0];\n  let y = pos[1];\n  if (pos[0] < 0){\n    x = DIM_X + x; // 600 + -5 \n  }\n  if (pos[1] < 0){\n    y = DIM_Y + y;\n  }\n  if (pos[0] > DIM_X){\n    x = x - DIM_X;\n  }\n  if (pos[1] > DIM_Y){\n    y = y - DIM_Y;\n  }\n  return [x,y];\n};\n\nGame.prototype.checkCollisions = function(){\n  const allAsteroids = this.asteroids;\n  for(let i = 0; i < allAsteroids.length; i++){\n    for(let j = i+1; j < allAsteroids.length; j++){\n      if(allAsteroids[i].isCollidedWith(allAsteroids[j])){\n        alert(\"COLLISION\");\n      }\n    }\n  }\n};\n\nGame.prototype.step = function(){\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid){\n  this.asteroids.delete(this.asteroids.indexOf(asteroid));\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (ctx){\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  // window.game = this.game;\n  let moveInterval = setInterval(this.game.step.bind(this.game), 20);\n  let drawInterval = setInterval(() => {\n    this.game.draw.bind(this.game)(this.ctx);} ,20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', (event) => {\n  console.log('DOM fully loaded and parsed');\n  const canvasEl = document.getElementById('game-canvas');\n  const ctx = canvasEl.getContext('2d');\n\n  canvasEl.width = 600;\n  canvasEl.height = 800;\n  ctx.fillStyle = 'black';\n  ctx.fillRect(0,0,600, 800);\n\n  // movingObject.draw(ctx);\n  // movingObject.move();\n  // movingObject.draw(ctx);\n\n  // asteroid1.draw(ctx);\n\n  const gameView = new GameView(ctx);\n  gameView.start();\n\n});\n\n\nconsole.log(\"Webpack is working\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nconst movingObject = new MovingObject(\n  [300, 400],\n  [10, 10],\n  30,\n  \"#00FF00\"\n);\n\nconst asteroid1 = new Asteroid([60, 500]);\n\n\n\nwindow.MovingObject = movingObject;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(pos, vel, radius, color, game){\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI\n    );\n  ctx.strokeStyle = 'white';\n  ctx.fillStyle = 'gray';\n  ctx.lineWidth = 1;\n  ctx.fill();\n  ctx.stroke();\n};\n\nMovingObject.prototype.move = function(){\n  let x = this.pos[0] + this.vel[0];\n  let y = this.pos[1] + this.vel[1];\n\n  this.pos = this.game.wrap([x, y]);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n  let x_diff = otherObject.pos[0] - this.pos[0];\n  let y_diff = otherObject.pos[1] - this.pos[1];\n  \n  let dist = Math.sqrt(Math.pow(x_diff, 2) + Math.pow(y_diff, 2));\n  let radiiSum = this.radius + otherObject.radius;\n\n  return dist <= radiiSum;\n\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;