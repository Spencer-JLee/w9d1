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
};

module.exports = GameView;