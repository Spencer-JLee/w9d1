const Game = require('./game.js');

function GameView (ctx){
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function(){
  // window.game = this.game;
  let moveInterval = setInterval(this.game.step.bind(this.game), 20);
  let drawInterval = setInterval(() => {
    this.game.draw.bind(this.game)(this.ctx);} ,20);
  this.bindKeyHandlers.bind(this);
};

GameView.prototype.bindKeyHandlers = function(){
  debugger;
  key('up', function () { this.game.ship.power([0, -10]); });
  key('down', function () { this.game.ship.power([0, 10]); });
  key('left', function () { this.game.ship.power([-10, 0]); });
  key('right', function () { this.game.ship.power([10, 0]); });
};

module.exports = GameView;