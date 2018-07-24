function MazeMake(MazeYSize, MazeXSize, ParentDiv) {
  this.I_CanvasX = 800;
  this.I_CanvasY = 800;
  this.Maze = createCanvas(this.I_CanvasX, this.I_CanvasY);
  this.Maze.id('Maze');

  this.Maze.parent(ParentDiv);

  rectMode(CENTER);
  this.MazeXLen = MazeXSize*2-1;
  this.MazeYLen = MazeYSize*2-1;
  this.MazeXSize = MazeXSize;
  this.MazeYSize = MazeYSize;

  this.Ay_Maze = new Array(this.MazeYLen * this.MazeXLen).fill(50)
  for (let i = 0; i < this.MazeYLen; i += 2) {
    for (let j = 0; j < this.MazeXLen; j += 2) {
      this.Ay_Maze[i * this.MazeYLen + j] = 0;
    }
  }

  this.NewPoint = [0,0];

  this.MazeShow = function () {
    background(0);
    for (let i=0;i<this.MazeXLen;i++){
      for (let j=0;j<this.MazeYLen;j++){
        push();
        noStroke();
        //if (this.Ay_Maze[i*this.MazeXLen+j] == 0 || this.Ay_Maze[i*this.MazeXLen+j] == 52) {
        if (this.Ay_Maze[i*this.MazeXLen+j] == 1 || this.Ay_Maze[i*this.MazeXLen+j] == 0 || this.Ay_Maze[i*this.MazeXLen+j] == 52) {
          fill(255);
        } else {
          fill(0);
        }
        rect(0.5*(this.I_CanvasX/(this.MazeXLen))+i*(this.I_CanvasX/(this.MazeXLen)), 0.5*(this.I_CanvasY/(this.MazeYLen))+j*(this.I_CanvasY/(this.MazeYLen)), (this.I_CanvasX/(this.MazeXLen)), (this.I_CanvasY/(this.MazeYLen)))
        pop();
      }
    }

    push();
    stroke(0);
    strokeWeight(4);
    line(0,0,this.I_CanvasX, 0);
    line(this.I_CanvasX,0,this.I_CanvasX, this.I_CanvasY);
    line(0,this.I_CanvasY,this.I_CanvasX, this.I_CanvasY);
    line(0,0,0, this.I_CanvasY);

    pop();

  }

  this.WallCheck = function (x, y) {
    this.Ay_Maze[x * this.MazeXLen + y] = 1;
    if (x - 1 >= 0) {
      if (this.Ay_Maze[(x - 1) * this.MazeXLen + y] == 50) {
        this.Ay_Maze[(x - 1) * this.MazeXLen + y] = 51;
      } else if (this.Ay_Maze[(x - 1) * this.MazeXLen + y] == 51) {
        this.Ay_Maze[(x - 1) * this.MazeXLen + y] = 53;
      }
    }
    if (y - 1 >= 0) {
      if (this.Ay_Maze[(x) * this.MazeXLen + (y - 1)] == 50) {
        this.Ay_Maze[(x) * this.MazeXLen + (y - 1)] = 51;
      } else if (this.Ay_Maze[(x) * this.MazeXLen + (y - 1)] == 51) {
        this.Ay_Maze[(x) * this.MazeXLen + (y - 1)] = 53;
      }
    }
    if (x + 1 < this.MazeXLen) {
      if (this.Ay_Maze[(x + 1) * this.MazeXLen + (y)] == 50) {
        this.Ay_Maze[(x + 1) * this.MazeXLen + (y)] = 51;
      } else if (this.Ay_Maze[(x + 1) * this.MazeXLen + (y)] == 51) {
        this.Ay_Maze[(x + 1) * this.MazeXLen + (y)] = 53;
      }
    }
    if (y + 1 < this.MazeYLen) {
      if (this.Ay_Maze[(x) * this.MazeXLen + y + 1] == 50) {
        this.Ay_Maze[(x) * this.MazeXLen + y + 1] = 51;
      } else if (this.Ay_Maze[(x) * this.MazeXLen + y + 1] == 51) {
        this.Ay_Maze[(x) * this.MazeXLen + y + 1] = 53;
      }
    }
  }

  this.WallBreak = function() {
    let Ay_WallPool = [];
    let idx = this.Ay_Maze.indexOf(51);
    while (idx != -1) {
      Ay_WallPool.push(idx);
      idx = this.Ay_Maze.indexOf(51, idx + 1);
    }
    let rand = Ay_WallPool[Math.floor(Math.random() * Ay_WallPool.length)];
    this.Ay_Maze[rand] = 52;
    return [Math.floor(rand / this.MazeXLen), rand % this.MazeXLen];
  }

  this.PointUpdate = function(I_WallBreak_X, I_WallBreak_Y) {
    var I_Point_X, I_Point_Y
    if (I_WallBreak_X - 1 >= 0) {
      if (this.Ay_Maze[(I_WallBreak_X - 1)* this.MazeXLen + I_WallBreak_Y] == 0) {
        this.Ay_Maze[(I_WallBreak_X - 1)* this.MazeXLen + I_WallBreak_Y] = 1;
        I_Point_X = I_WallBreak_X - 1;
        I_Point_Y = I_WallBreak_Y;
      }
    }
    if (I_WallBreak_Y - 1 >= 0) {
      if (this.Ay_Maze[(I_WallBreak_X)* this.MazeXLen + I_WallBreak_Y - 1] == 0) {
        this.Ay_Maze[(I_WallBreak_X)* this.MazeXLen + I_WallBreak_Y - 1] = 1;
        I_Point_X = I_WallBreak_X;
        I_Point_Y = I_WallBreak_Y - 1;
      }
    }
    if (I_WallBreak_X + 1 < this.MazeXLen) {
      if (this.Ay_Maze[(I_WallBreak_X + 1)* this.MazeXLen + I_WallBreak_Y] == 0) {
        this.Ay_Maze[(I_WallBreak_X + 1)* this.MazeXLen + I_WallBreak_Y] = 1;
        I_Point_X = I_WallBreak_X + 1;
        I_Point_Y = I_WallBreak_Y;
      }
    }
    if (I_WallBreak_Y + 1 < this.MazeYLen) {
      if (this.Ay_Maze[(I_WallBreak_X)* this.MazeXLen + I_WallBreak_Y + 1] == 0) {
        this.Ay_Maze[(I_WallBreak_X)* this.MazeXLen + I_WallBreak_Y + 1] = 1;
        I_Point_X = I_WallBreak_X;
        I_Point_Y = I_WallBreak_Y + 1;
      }
    }
    return [I_Point_X, I_Point_Y];
  }

  this.MazeMakeGo = function () {
    for (let i=0;i<this.MazeXSize*this.MazeYSize;i++){
    this.WallCheck(this.NewPoint[0], this.NewPoint[1]);
    var WallBreak  = this.WallBreak();
    this.NewPoint = this.PointUpdate(WallBreak[0], WallBreak[1]);
    }
  }

}
