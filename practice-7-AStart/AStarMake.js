function AStarMake(YLen, XLen){
  this.XLen = XLen;
  this.YLen = YLen;
  var Ay_Maze = new Array(YLen);
  for (let i=0;i<YLen;i++){
    Ay_Maze[i] = new Array(XLen);
    for (let j=0;j<XLen;j++){
      Ay_Maze[i][j] = new Ceil(j, i)
    }
  }

  this.Ay_Maze = Ay_Maze;
  this.Ay_Close = new Array(0);
  this.Ay_Open = new Array(0);
  this.I_END = 0;
  this.minLoc;

  this.SetMag = function (y, x, Mag) {
    this.Ay_Maze[y][x].Magnification = Mag;
  }

  this.SetStartPoint = function (y, x) {
    this.Ay_Maze[y][x].Type = 'START';
    this.START_X = x;
    this.START_Y = y;
    this.Ay_Close.push(y*this.XLen+x);
    this.AddClose(y, x);
  }
  this.SetEndPoint = function (y, x) {
    this.END_x = x;
    this.END_y = y;
    this.Ay_Maze[y][x].Type = 'END';
    for (let i=0;i<this.YLen;i++){
      for (let j=0;j<this.XLen;j++){
        this.Ay_Maze[i][j].h = abs(this.Ay_Maze[i][j].y-y)*10 + abs(this.Ay_Maze[i][j].x-x)*10;
      }
    }
  }
  this.SetWallPoint = function (y, x) {
    this.Ay_Maze[y][x].Type = 'Wall';
  }

  this.AddClose = function (y ,x) {
    if (this.Ay_Maze[y][x].Type == 'END') {
      this.I_END = 1;
    }

    if ( y-1>=0 &&
         this.Ay_Maze[y-1][x].Type != 'Wall' &&
         this.Ay_Maze[y-1][x].Type != 'START' &&
         this.Ay_Open.indexOf((y-1)*this.XLen+x) == -1 &&
         this.Ay_Close.indexOf((y-1)*this.XLen+x) == -1) {
      this.Ay_Open.push((y-1)*this.XLen+x);
      this.Ay_Maze[y-1][x].g = 10*(this.Ay_Maze[y][x].Magnification) + this.Ay_Maze[y][x].g;
      this.Ay_Maze[y-1][x].f = this.Ay_Maze[y-1][x].h+this.Ay_Maze[y-1][x].g;
      this.Ay_Maze[y-1][x].parent = this.Ay_Maze[y][x];
    } else if (y-1>=0 && this.Ay_Open.indexOf((y-1)*this.XLen+x) != -1) {
      if (this.Ay_Maze[y-1][x].f>(this.Ay_Maze[y][x].f+10*(this.Ay_Maze[y][x].Magnification))) {
        this.Ay_Maze[y-1][x].parent = this.Ay_Maze[y][x];
      }
    }
    if ( x-1>=0 &&
         this.Ay_Maze[y][x-1].Type != 'Wall' &&
         this.Ay_Maze[y][x-1].Type != 'START' &&
         this.Ay_Open.indexOf(y*this.XLen+x-1) == -1 &&
         this.Ay_Close.indexOf(y*this.XLen+x-1) == -1) {
      this.Ay_Open.push(y*this.XLen+x-1);
      this.Ay_Maze[y][x-1].g = 10*(this.Ay_Maze[y][x].Magnification) + this.Ay_Maze[y][x].g;
      this.Ay_Maze[y][x-1].f = this.Ay_Maze[y][x-1].h+this.Ay_Maze[y][x-1].g;
      this.Ay_Maze[y][x-1].parent = this.Ay_Maze[y][x];
    } else if (x-1>=0 && this.Ay_Open.indexOf((y)*this.XLen+x-1) != -1) {
      if (this.Ay_Maze[y][x-1].f>this.Ay_Maze[y][x].f+10*(this.Ay_Maze[y][x].Magnification)) {
        this.Ay_Maze[y][x-1].parent = this.Ay_Maze[y][x];
      }
    }
    if ( y+1<this.YLen &&
         this.Ay_Maze[y+1][x].Type != 'Wall' &&
         this.Ay_Maze[y+1][x].Type != 'START' &&
         this.Ay_Open.indexOf((y+1)*this.XLen+x) == -1 &&
         this.Ay_Close.indexOf((y+1)*this.XLen+x) == -1) {
      this.Ay_Open.push((y+1)*this.XLen+x);
      this.Ay_Maze[y+1][x].g = 10*(this.Ay_Maze[y][x].Magnification) + this.Ay_Maze[y][x].g;
      this.Ay_Maze[y+1][x].f = this.Ay_Maze[y+1][x].h+this.Ay_Maze[y+1][x].g;
      this.Ay_Maze[y+1][x].parent = this.Ay_Maze[y][x];
    } else if (y+1<this.YLen && this.Ay_Open.indexOf((y+1)*this.XLen+x) != -1) {
      if (this.Ay_Maze[y+1][x].f>this.Ay_Maze[y][x].f+10*(this.Ay_Maze[y][x].Magnification)) {
        this.Ay_Maze[y+1][x].parent = this.Ay_Maze[y][x];
      }
    }
    if ( x+1<this.XLen &&
         this.Ay_Maze[y][x+1].Type != 'Wall' &&
         this.Ay_Maze[y][x+1].Type != 'START' &&
         this.Ay_Open.indexOf(y*this.XLen+x+1) == -1 &&
         this.Ay_Close.indexOf(y*this.XLen+x+1) == -1) {
      this.Ay_Open.push(y*this.XLen+x+1);
      this.Ay_Maze[y][x+1].g = 10*(this.Ay_Maze[y][x].Magnification) + this.Ay_Maze[y][x].g;
      this.Ay_Maze[y][x+1].f = this.Ay_Maze[y][x+1].h+this.Ay_Maze[y][x+1].g;
      this.Ay_Maze[y][x+1].parent = this.Ay_Maze[y][x];
    } else if (x+1<this.XLen && this.Ay_Open.indexOf((y)*this.XLen+x+1) != -1) {
      if (this.Ay_Maze[y][x+1].f>this.Ay_Maze[y][x].f+10*(this.Ay_Maze[y][x].Magnification)) {
        this.Ay_Maze[y][x+1].parent = this.Ay_Maze[y][x];
      }
    }
  }

  this.AddOpen = function () {
    let min = 9999999;
    for (let i=0;i<this.Ay_Open.length;i++) {
      if (this.Ay_Maze[floor(this.Ay_Open[i]/this.XLen)][this.Ay_Open[i]%this.XLen].f < min) {
        min = this.Ay_Maze[floor(this.Ay_Open[i]/this.XLen)][this.Ay_Open[i]%this.XLen].f;
        this.minLoc = this.Ay_Open[i];
      }
    }
    this.Ay_Close.push(this.minLoc);
    this.Ay_Open.splice(this.Ay_Open.indexOf(this.minLoc), 1);
  }

  this.AStarGo = function() {

    while (this.I_END == 0) {
      this.AddOpen();
      this.AddClose(floor(this.minLoc/this.XLen), this.minLoc%this.XLen)
    }

/*
    this.AddOpen();
    this.AddClose(floor(this.minLoc/this.XLen), this.minLoc%this.XLen)
*/
  }

  this.AStarShow = function() {
    let F_L = 800./this.XLen;
    let F_H = 800./this.YLen;

    background(0);
    fill(255);
    for (let i=0;i<this.YLen;i++){
      for (let j=0;j<this.XLen;j++){
        push();
        if (this.Ay_Maze[i][j].Type == 'START') {
          fill(255,0,0);

        } else if (this.Ay_Maze[i][j].Type == 'END') {
          fill(0,255,0);
        } else if (this.Ay_Maze[i][j].Type == 'Wall') {
          fill(0,0,255)
        }
        rect((j+0.5)*F_L, (i+0.5)*F_H, F_L ,F_H);
        fill(0);
        text(this.Ay_Maze[i][j].h, 5+j*F_L, (F_H-5)+i*F_H);
        text(this.Ay_Maze[i][j].g, (F_L-15)+j*F_L, 15+i*F_H);
        text(this.Ay_Maze[i][j].f, (F_L-15)+j*F_L, (F_H-5)+i*F_H);
        text(i*this.XLen+j, 5+j*F_L, 15+i*F_H);
        pop();

        push();
        fill(255,255,0);
        for (let i=0;i<this.Ay_Close.length;i++){
          ellipse(((this.Ay_Close[i]%this.XLen)+0.5)*F_L,
                  (floor(this.Ay_Close[i]/this.XLen)+0.5)*F_H, 10 ,10);
        }
        pop();

        push();
        fill(0,255,255);

        for (let i=0;i<this.Ay_Open.length;i++){
          ellipse(((this.Ay_Open[i]%this.XLen)+0.5)*F_L,
                  (floor(this.Ay_Open[i]/this.XLen)+0.5)*F_H, 10 ,10);
        }
        pop();
      }
    }
/*
    push();
    fill(0,0,255);
    rect((this.START_Y+0.5)*F_L, (this.START_X+0.5)*F_H, F_L ,F_H);
    fill(0,255,0);
    rect((this.END_y+0.5)*F_L, (this.END_x+0.5)*F_H, F_L ,F_H);
    pop();
*/
    LineObj = this.Ay_Maze[this.END_y][this.END_x]

    push();
    stroke(255,0,0);
    strokeWeight(3);
    while (LineObj.parent != null){
      line((LineObj.x+0.5)*F_L,
           (LineObj.y+0.5)*F_H ,
           (LineObj.parent.x+0.5)*F_L,
           (LineObj.parent.y+0.5)*F_H);
      LineObj = LineObj.parent;
    }

    pop();

  }

}
