var I_MazeSize_X = 100;
var I_MazeSize_Y = 100;
var Ay_Maze = new Array((I_MazeSize_X * 2 - 1) * (I_MazeSize_Y * 2 - 1)).fill(50)
var I_MazeLen_X = I_MazeSize_X * 2 - 1
var I_MazeLen_Y = I_MazeSize_Y * 2 - 1
var I_NewPoint = [0, 0];
var I_CanvasX = 800;
var I_CanvasY = 800;

function WallCheck(I_NewPoint_X, I_NewPoint_Y) {
  Ay_Maze[I_NewPoint_X * I_MazeLen_X + I_NewPoint_Y] = 1;
  if (I_NewPoint_X - 1 >= 0) {
    if (Ay_Maze[(I_NewPoint_X - 1) * I_MazeLen_X + I_NewPoint_Y] == 50) {
      Ay_Maze[(I_NewPoint_X - 1) * I_MazeLen_X + I_NewPoint_Y] = 51;
    } else if (Ay_Maze[(I_NewPoint_X - 1) * I_MazeLen_X + I_NewPoint_Y] == 51) {
      Ay_Maze[(I_NewPoint_X - 1) * I_MazeLen_X + I_NewPoint_Y] = 53;
    }
  }
  if (I_NewPoint_Y - 1 >= 0) {
    if (Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + (I_NewPoint_Y - 1)] == 50) {
      Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + (I_NewPoint_Y - 1)] = 51;
    } else if (Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + (I_NewPoint_Y - 1)] == 51) {
      Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + (I_NewPoint_Y - 1)] = 53;
    }
  }
  if (I_NewPoint_X + 1 < I_MazeLen_X) {
    if (Ay_Maze[(I_NewPoint_X + 1) * I_MazeLen_X + (I_NewPoint_Y)] == 50) {
      Ay_Maze[(I_NewPoint_X + 1) * I_MazeLen_X + (I_NewPoint_Y)] = 51;
    } else if (Ay_Maze[(I_NewPoint_X + 1) * I_MazeLen_X + (I_NewPoint_Y)] == 51) {
      Ay_Maze[(I_NewPoint_X + 1) * I_MazeLen_X + (I_NewPoint_Y)] = 53;
    }
  }
  if (I_NewPoint_Y + 1 < I_MazeLen_Y) {
    if (Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + I_NewPoint_Y + 1] == 50) {
      Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + I_NewPoint_Y + 1] = 51;
    } else if (Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + I_NewPoint_Y + 1] == 51) {
      Ay_Maze[(I_NewPoint_X) * I_MazeLen_X + I_NewPoint_Y + 1] = 53;
    }
  }
}

function WallBreak() {
  let Ay_WallPool = [];
  let idx = Ay_Maze.indexOf(51);
  while (idx != -1) {
    Ay_WallPool.push(idx);
    idx = Ay_Maze.indexOf(51, idx + 1);
  }
  let rand = Ay_WallPool[Math.floor(Math.random() * Ay_WallPool.length)];
  Ay_Maze[rand] = 52;
  return [Math.floor(rand / I_MazeLen_X), rand % I_MazeLen_X];
}

function PointUpdate(I_WallBreak_X, I_WallBreak_Y) {
  var I_Point_X, I_Point_Y
  if (I_WallBreak_X - 1 >= 0) {
    if (Ay_Maze[(I_WallBreak_X - 1)* I_MazeLen_X + I_WallBreak_Y] == 0) {
      Ay_Maze[(I_WallBreak_X - 1)* I_MazeLen_X + I_WallBreak_Y] = 1;
      I_Point_X = I_WallBreak_X - 1;
      I_Point_Y = I_WallBreak_Y;
    }
  }
  if (I_WallBreak_Y - 1 >= 0) {
    if (Ay_Maze[(I_WallBreak_X)* I_MazeLen_X + I_WallBreak_Y - 1] == 0) {
      Ay_Maze[(I_WallBreak_X)* I_MazeLen_X + I_WallBreak_Y - 1] = 1;
      I_Point_X = I_WallBreak_X;
      I_Point_Y = I_WallBreak_Y - 1;
    }
  }
  if (I_WallBreak_X + 1 < I_MazeLen_X) {
    if (Ay_Maze[(I_WallBreak_X + 1)* I_MazeLen_X + I_WallBreak_Y] == 0) {
      Ay_Maze[(I_WallBreak_X + 1)* I_MazeLen_X + I_WallBreak_Y] = 1;
      I_Point_X = I_WallBreak_X + 1;
      I_Point_Y = I_WallBreak_Y;
    }
  }
  if (I_WallBreak_Y + 1 < I_MazeLen_Y) {
    if (Ay_Maze[(I_WallBreak_X)* I_MazeLen_X + I_WallBreak_Y + 1] == 0) {
      Ay_Maze[(I_WallBreak_X)* I_MazeLen_X + I_WallBreak_Y + 1] = 1;
      I_Point_X = I_WallBreak_X;
      I_Point_Y = I_WallBreak_Y + 1;
    }
  }
  return [I_Point_X, I_Point_Y];
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(I_CanvasX, I_CanvasY);
  rectMode(CENTER);
  for (let i = 0; i < I_MazeLen_X; i += 2) {
    for (let j = 0; j < I_MazeLen_Y; j += 2) {
      Ay_Maze[i * I_MazeLen_X + j] = 0;
    }
  }
  for (let i=0;i<I_MazeSize_X*I_MazeSize_Y;i++){

    WallCheck(I_NewPoint[0], I_NewPoint[1]);
    var I_WallBreak = WallBreak();
    I_NewPoint = PointUpdate(I_WallBreak[0], I_WallBreak[1]);
  }
}

function draw() {
  background(0);
  for (let i=0;i<I_MazeLen_X;i++){
    for (let j=0;j<I_MazeLen_Y;j++){
      push();
      noStroke();
      if (Ay_Maze[i*I_MazeLen_X+j] == 1 || Ay_Maze[i*I_MazeLen_X+j] == 52) {
        fill(255);
      } else {
        fill(0);
      }
      rect(0.5*(I_CanvasX/(I_MazeLen_X))+i*(I_CanvasX/(I_MazeLen_X)), 0.5*(I_CanvasY/(I_MazeLen_Y))+j*(I_CanvasY/(I_MazeLen_Y)), (I_CanvasX/(I_MazeLen_X)), (I_CanvasY/(I_MazeLen_Y)))
      pop();
    }
  }
  push();
  stroke(0);
  strokeWeight(4);
  line(0,0,I_CanvasX, 0);
  line(I_CanvasX,0,I_CanvasX, I_CanvasY);
  line(0,I_CanvasY,I_CanvasX, I_CanvasY);
  line(0,0,0, I_CanvasY);

  pop();

}
