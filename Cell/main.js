window.onload = init;
var canvas;
var ctx;
var cells = [];
var rows;
var columns;
var size=50;
var mouseX;
var mouseY;
function init(){
  canvas = document.getElementById('cnv');
  rows = 10;
  columns = 10;
  canvas.width = rows*size;
  canvas.height = columns*size;
  canvas.style.border = 'solid black 0px';
  canvas.style.backgroundColor = 'rgba(12,15,25, .9)';
  canvas.addEventListener('click',mouseClickHandler);
  ctx = canvas.getContext('2d');
  makeCells();
  animate();
}

function animate(){
requestAnimationFrame(animate);
  // for(var i=0;i<columns;i++){
  //   for(var j=0;j<rows;j++){
  //     cells[i][j].render();
  //   }
  // }
  // if(mouseX>0){
  //   var locateX = mouseX/size;
  //   var locateY = mouseY/size;
  //   locateX=Math.trunc(locateX);
  //   locateY=Math.trunc(locateY);
  //   var locateCellX = cells[locateX][locateY].x;
  //   var locateCellY = cells[locateX][locateY].y;
  //   ctx.fillStyle = "rgb(0,0,0)";
  //   ctx.fillRect(locateCellX,locateCellY,size,size);
  //
  // }
}

function makeCells(){
  for(var i=0;i<columns;i++){
    cells[i]=[];
    for(var j=0;j<rows;j++){
      cells[i][j]=new Cell(i*size,j*size,size,size);
    }
  }
  for(var i=0;i<columns;i++){
    for(var j=0;j<rows;j++){
      cells[i][j].render();
    }
  }
  for(var i=0;i<columns;i++){
    for(var j=0;j<rows;j++){
      cells[i][j].getNeighbors();
    }
  }
}

function mouseClickHandler(event){
  mouseX=event.clientX;
  mouseY=event.clientY;
  console.log('X: '+mouseX+' Y: '+mouseY);
  // for(var i=0;i<columns;i++){
  //   for(var j=0;j<rows;j++){
  //     cells[i][j].render();
  //   }
  // }
  var locateX = mouseX/size;
  var locateY = mouseY/size;
  locateX=Math.trunc(locateX);
  locateY=Math.trunc(locateY);
  //center cell
  var locateCellX = cells[locateX][locateY].x;
  var locateCellY = cells[locateX][locateY].y;
  if(cells[locateX][locateY].color=="rgb(0,0,0)"){
    cells[locateX][locateY].color = "rgb(255,162,12)";
    for(var i=0;i<cells[locateX][locateY].neighbors.length;i++){cells[locateX][locateY].neighbors[i].color = 'rgb(255,162,12)';}
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "rgb(255,162,12)";
    ctx.fillRect(locateCellX,locateCellY,size,size);
    for(var i=0;i<cells[locateX][locateY].neighbors.length;i++){ctx.fillRect(cells[locateX][locateY].neighbors[i].x,cells[locateX][locateY].neighbors[i].y,size,size);}
    ctx.stroke();
  } else if(cells[locateX][locateY].color=="rgb(255,162,12)"){
      cells[locateX][locateY].color = "rgb(0,0,0)";
      for(var i=0;i<cells[locateX][locateY].neighbors.length;i++){cells[locateX][locateY].neighbors[i].color = 'rgb(255,162,12)';}
      ctx.strokeStyle = 'black';
      ctx.fillStyle = "rgb(0,0,0)";
      //ctx.fillRect(locateCellX,locateCellY,size,size);
      for(var i=0;i<cells[locateX][locateY].neighbors.length;i++){ctx.fillRect(cells[locateX][locateY].neighbors[i].x,cells[locateX][locateY].neighbors[i].y,size,size);}
      ctx.stroke();
  }
}





// for(var i = 0;i < columns;i++){
  //   var tempArray = [];
  //   arrays.push(tempArray);
  // }
  // var tempStartCell = new Cell(0,0,50,50);
  // arrays[0].push(tempStartCell);
  // for(var i = 1;i < arrays.length;i++){
  //     arrays[i].push(new Cell(arrays[i-1][0].x+50,arrays[i-1][0].y+50,50,50));
  //   }
  //
  //   for(var i = 0;i < arrays.length;i++){
  //     for(var j = 1;j<numCells;j++){
  //       var tempCell = new Cell(arrays[i][j-1].x+50,arrays[i][j-1].y+50,50,50);
  //       arrays[i].push(tempCell);
  //     }
  //   }
  //   for(var i = 0;i < arrays.length;i++){
  //     for(var j = 0;j<numCells;j++){
  //       arrays[i][j].render();
  //     }
  //   }

    //cells[locateX][locateY-1].color = "rgb(255,162,12)";
    //cells[locateX+1][locate].color = "rgb(255,162,12)";
    //cells[locateX][locateY+1].color = "rgb(255,162,12)";
    //cells[locateX-1][locateY].color = "rgb(255,162,12)";

    //ctx.fillRect(locateCellX2,locateCellY2,size,size);
    // ctx.fillRect(locateCellX3,locateCellY3,size,size);
    // ctx.fillRect(locateCellX4,locateCellY4,size,size);
    // ctx.fillRect(locateCellX5,locateCellY5,size,size);
