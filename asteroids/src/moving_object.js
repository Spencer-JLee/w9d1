function MovingObject(pos, vel, radius, color){
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
    );
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'gray';
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
};

MovingObject.prototype.move = function(){
  let x = this.pos[0] + this.vel[0];
  let y = this.pos[1] + this.vel[1];

  this.pos = [x, y];
};

module.exports = MovingObject;