function MazeMake(MazeYSize, MazeXSize, ParentDiv) {
  this.I_CanvasX = 800;
  this.I_CanvasY = 800;
  this.Maze = createCanvas(this.I_CanvasX, this.I_CanvasY);
  rectMode(CENTER);
  this.Maze.id('Maze');
  this.Maze.parent(ParentDiv);
  this.MazeXLen = MazeXSize*2-1;
  this.MazeYLen = MazeYSize*2-1;
  this.MazeXSize = MazeXSize;
  this.MazeYSize = MazeYSize;

  this.WallOpen = Array(0);
  this.WallClose = Array(0);
  this.RoadOpen = Array(0);
  this.RoadClose = Array(0);

  this.NewPoint = [0, 0];
  this.RoadClose.push(0);

  this.FindYourNeighbor = function(y, x) {
    //尋找所在格的鄰居
    //找頭頂的 y-1, x
    if (y-1>=0) {
      this.Ay_Maze[y][x].neighbor.push(this.Ay_Maze[y-1][x]);
    }
    //找下方的 y+1, x
    if (y+1<this.MazeYLen) {
      this.Ay_Maze[y][x].neighbor.push(this.Ay_Maze[y+1][x]);
    }
    //找左方的 y, x+1
    if (x-1>=0) {
      this.Ay_Maze[y][x].neighbor.push(this.Ay_Maze[y][x-1]);
    }
    //找右方的 y, x+1
    if (x+1<this.MazeXLen) {
      this.Ay_Maze[y][x].neighbor.push(this.Ay_Maze[y][x+1]);
    }
  }
  //創造迷宮基底
  this.Ay_Maze = new Array(this.MazeYLen);
  for (let i=0;i<this.MazeYLen;i++) {
    this.Ay_Maze[i] = new Array(this.MazeXLen);
    for (let j=0;j<this.MazeXLen;j++) {
      this.Ay_Maze[i][j] = new MazeCell(i, j);
    }
  }
  //找鄰居
  for (let i=0;i<this.MazeYLen;i++) {
    for (let j=0;j<this.MazeXLen;j++) {
      this.FindYourNeighbor(i, j);
    }
  }
  //地圖挖洞
  for (let i=0;i<this.MazeYSize;i++) {
    for (let j=0;j<this.MazeXSize;j++) {
      this.Ay_Maze[i*2][j*2].Type = 'Road'
    }
  }
  this.WallCheck = function (y, x) {
    //console.log('將 '+(this.Ay_Maze[y][x].y*this.MazeXLen + this.Ay_Maze[y][x].x)+' 加入RoadClose');
    this.RoadClose.push(this.Ay_Maze[y][x].y*this.MazeXLen + this.Ay_Maze[y][x].x);
    //輸入新點後找新點周圍(neighbor)的牆壁
    for (let i=0;i<this.Ay_Maze[y][x].neighbor.length;i++){
      if (this.WallOpen.indexOf(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) != -1) {
        this.WallClose.push(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x);

        //console.log('將 '+(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x)+' 加入WallClose');

        this.Ay_Maze[y][x].neighbor.Type = 'Wall-Close';
        this.WallOpen.splice(this.WallOpen.indexOf(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x), 1);

        //console.log('將 '+ (this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) +' 移出WallOpen');

      } else if (this.WallOpen.indexOf(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) == -1 &&
                 this.WallClose.indexOf(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) == -1) {
        this.WallOpen.push(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x);
        //console.log('將 '+ (this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) +' 加入WallOpen');

      }
    }

  }

  this.WallBreak = function() {
    let rand = this.WallOpen[Math.floor(Math.random() * this.WallOpen.length)];

    this.Ay_Maze[floor(rand/this.MazeXLen)][rand%this.MazeXLen].Type = 'Wall-Open';

    this.WallOpen.splice(this.WallOpen.indexOf(rand), 1);
    this.WallClose.push(rand);
    //console.log('打破牆壁',rand);
    //console.log('牆壁',rand,'從WallOpen刪除');
    //console.log('牆壁',rand,'加入WallClose');
    return [Math.floor(rand / this.MazeXLen), rand % this.MazeXLen];
  }

  this.PointUpdate = function(y, x) {
    //console.log('檢查被打破的牆壁 ',y,x);
    for (let i=0;i<this.Ay_Maze[y][x].neighbor.length;i++){
      if (this.Ay_Maze[y][x].neighbor[i].Type=="Road") {
        if (this.RoadClose.indexOf(this.Ay_Maze[y][x].neighbor[i].y*this.MazeXLen + this.Ay_Maze[y][x].neighbor[i].x) == -1) {
          this.WallCheck(this.Ay_Maze[y][x].neighbor[i].y, this.Ay_Maze[y][x].neighbor[i].x);
        }


      }
    }
  }

  this.MazeShow = function () {
    background(0);
    for (let i=0;i<this.MazeYLen;i++){
      for (let j=0;j<this.MazeXLen;j++){
        push();
        noStroke();
        //if (this.Ay_Maze[i*this.MazeXLen+j] == 0 || this.Ay_Maze[i*this.MazeXLen+j] == 52) {
        if (this.Ay_Maze[i][j].Type == "Road" || this.Ay_Maze[i][j].Type == "Wall-Open") {
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

  this.MazeMakeGo = function () {
    /*
    整體流程
    1. 從PointOpen中決定新的點
    2. 檢查新點的牆壁
    3. 隨機打破WallOpen的牆壁
    4. 增加破牆後增加的點加入PointOpen
    */
    this.WallCheck(this.NewPoint[0], this.NewPoint[1]);
    try {
      while (1==1) {
        var WallBreak  = this.WallBreak();
        this.PointUpdate(WallBreak[0], WallBreak[1]);
        //console.log(this.Ay_Maze);
        //console.log(  this.WallOpen, this.WallClose, this.RoadOpen, this.RoadClose)
      }
    } catch {
      //console.log('地圖完成');
    }

  }

}
