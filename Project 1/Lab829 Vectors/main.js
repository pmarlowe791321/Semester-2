window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var balls = [];
var mouseX;
var mouseY;
var canvasX=0;
var canvasY=0;
var mouseLoc;
var canvasLoc = new JSVector(canvasX,canvasY);
var center;
function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas.addEventListener("mousemove",handleMouseClick);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  center = new JSVector(canvas.width/2,canvas.height/2);
  mouseLoc = new JSVector(canvas.width/2,canvas.height/2);
  makeBalls(2000);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  var dLoc=JSVector.subGetNew(mouseLoc,center);
  dLoc.multiply(0.01);
  canvasLoc.add(dLoc);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.save();
  ctx.translate(-canvasLoc.x,-canvasLoc.y);
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
  ctx.restore();
}

function makeBalls(numBalls){

  for(let i = 0; i < numBalls; i++){
    var x = Math.random()*8000-4000;
    var y = Math.random()*6000-3000;
    var loc = new JSVector(x, y);
    var dx = 0;
    var dy = 0;
    var vel = new JSVector(dx, dy);
    //var r = Math.random()*20 + 10;
    var height = 24;
    var base = 16;
    balls.push(new Ball(loc, vel, height, base))
  }
}

function handleMouseClick(event){
  mouseLoc = new JSVector(event.clientX,event.clientY);
  //console.log('Mouse X: '+event.clientX);
  //console.log('Mouse Y: '+event.clientY);
}
