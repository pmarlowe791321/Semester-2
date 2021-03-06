

function Ball(loc, vel, height, base){
  this.loc = loc;
  this.vel = vel;
  //this.rad = rad;
  this.height = height;
  this.base = base;
}

Ball.prototype.run = function(){
  //this.checkEdges();
  this.update();
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x > window.innerWidth || this.loc.x < 0)  this.vel.x = -this.vel.x;
  if(this.loc.y > window.innerHeight || this.loc.y < 0)  this.vel.y = -this.vel.y;
}

Ball.prototype.update = function(){
  this.loc.x += this.vel.x;
  this.loc.y += this.vel.y;
  this.render();
}

Ball.prototype.render = function(){
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.fillStyle = "rgba(255,162,12)";
  ctx.save();
  ctx.translate(this.loc.x,this.loc.y);
  var temp = JSVector.addGetNew(center,canvasLoc);
  var dir = JSVector.subGetNew(temp,this.loc);
  var angle = dir.getDirection();
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(-this.height/2,-this.base/2);
  ctx.lineTo(this.height/2,0);
  ctx.lineTo(-this.height/2,this.base/2);
  ctx.fill();
  ctx.restore();
}
