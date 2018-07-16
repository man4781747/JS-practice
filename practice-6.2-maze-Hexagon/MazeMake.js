function MazeMake(MazeYSize, MazeXSize) {
  this.I_CanvasX = 1000;
  this.I_CanvasY = 1000;
  this.r = floor(this.I_CanvasX/(1.742*(0.5+2*MazeXSize)));
  createCanvas(this.I_CanvasX, this.I_CanvasY);
  background(0);
  rectMode(CENTER);
  this.MazeXLen = MazeXSize*2-1;
  this.MazeYLen = MazeYSize*2-1;
  this.MazeXSize = MazeXSize;
  this.MazeYSize = MazeYSize;
  this.Ay_Maze = new Array(this.MazeYLen * this.MazeXLen);

  fill(255, 255, 0);
  polygon(400, 400, 10, 6);

  this.NewPoint = [0, 0];

  this.WallOpenPool = new Array(0);
  this.WallClosePool = new Array(0);
  this.RoadOpenPool = new Array(0);
  this.RoadClosePool = new Array(0);
  this.RoadClosePool.push(0);

  for (let i = 0; i < this.MazeYLen; i += 1) {
    for (let j = 0; j < this.MazeXLen; j += 1) {
      let I_No = i * this.MazeXLen + j;
      this.Ay_Maze[I_No] = new MazeCeil(i, j);
      this.Ay_Maze[I_No].No = I_No;
    }
  }
/*

Bug!!!
1. 牆跟房間的相鄰不一樣
2. 房間位置錯誤

*/

  for (let i = 0; i < this.MazeYLen; i += 1) {
    for (let j = 0; j < this.MazeXLen; j += 1) {
      let I_No = i * this.MazeXLen + j;
      /*
      fill(255,0,0)
      ellipse((this.Ay_Maze[I_No].x+0.5)*this.r,
              (this.Ay_Maze[I_No].y+0.5)*this.r, 10, 10);
*/
      if (j%2==0) {
        if (i-1>=0) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i-1)*this.MazeXLen+j]);
        }
        if (i+1<this.MazeYLen) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i+1)*this.MazeXLen+j]);
          if (j-1>=0) {
            this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i+1)*this.MazeXLen+j-1]);
          }
          if (j+1<this.MazeXLen) {
            this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i+1)*this.MazeXLen+j+1]);
          }
        }
        if (j-1>=0) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i)*this.MazeXLen+j-1]);
        }
        if (j+1<this.MazeXLen) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i)*this.MazeXLen+j+1]);
        }
      } else if (j%2==1) {
        if (i-1>=0) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i-1)*this.MazeXLen+j]);
          if (j-1>=0) {
            this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i-1)*this.MazeXLen+j-1]);
          }
          if (j+1<this.MazeXLen) {
            this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i-1)*this.MazeXLen+j+1]);
          }
        }
        if (i+1<this.MazeYLen) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i+1)*this.MazeXLen+j]);
        }
        if (j-1>=0) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i)*this.MazeXLen+j-1]);
        }
        if (j+1<this.MazeXLen) {
          this.Ay_Maze[I_No].neighbor.push(this.Ay_Maze[(i)*this.MazeXLen+j+1]);
        }
      }
    }
  }

  this.WallTotal = this.MazeXLen*this.MazeYLen;
  for (let i = 0; i < this.MazeYLen; i += 1) {
    if (i%3 == 0) {
      for (let j = 0; j < this.MazeXLen ;j += 2) {
        this.Ay_Maze[i * this.MazeXLen + j].type='road-N';
        this.WallTotal -= 1;
        /*
        fill(0,255,0)
        ellipse((this.Ay_Maze[i * this.MazeXLen + j].x+0.5)*this.r,
                (this.Ay_Maze[i * this.MazeXLen + j].y+0.5)*this.r, 10, 10);
                */
      }
    } else if (i%3 == 2) {
      for (let j = 1; j < this.MazeXLen ;j += 2) {
        this.Ay_Maze[i * this.MazeXLen + j].type='road-N';
        this.WallTotal -= 1;
        /*
        fill(0,255,0)
        ellipse((this.Ay_Maze[i * this.MazeXLen + j].x+0.5)*this.r,
                (this.Ay_Maze[i * this.MazeXLen + j].y+0.5)*this.r, 10, 10);
                */
      }
    }
  }

  for (let i=0;i<this.MazeXLen;i+=2) {
    this.Ay_Maze[(this.MazeYLen-1)*this.MazeXLen+i].type = 'Wall-UNBREAK';
    this.WallClosePool.push((this.MazeYLen-1)*this.MazeXLen+i)
  }
/*
  this.Ay_Maze[20].type = 'Wall-UNBREAK';
  this.Ay_Maze[22].type = 'Wall-UNBREAK';
  this.Ay_Maze[24].type = 'Wall-UNBREAK';
  this.WallClosePool.push(20);
  this.WallClosePool.push(22);
  this.WallClosePool.push(24);

*/


  this.MazeShow = function () {
    background(125);
    for (let j=0;j<this.MazeXLen;j+=2){
      for (let i=0;i<this.MazeYLen;i++){
        if (this.Ay_Maze[i*this.MazeXLen+j].type == 'Wall-UNBREAK'){
          push();
          fill(0);
          polygon(this.r+j*(this.r*1.5), (0.871*this.r)+(0.871*this.r)+0.871*2*this.r*i, this.r, 6);
          pop();
        } else {
          push();
          fill(255);
          polygon(this.r+j*(this.r*1.5), (0.871*this.r)+(0.871*this.r)+0.871*2*this.r*i, this.r, 6);
          pop();
        }
      }
    }

    for (let j=1;j<this.MazeXLen;j+=2){
      for (let i=0;i<this.MazeYLen;i++){
        if (this.Ay_Maze[i*this.MazeXLen+j].type == 'Wall-UNBREAK'){
          push();
          fill(0);
          polygon(this.r+j*(this.r*1.5), (0.871*this.r)+0.871*2*this.r*i, this.r, 6);
          pop();
        } else {
          push();
          fill(255);
          polygon(this.r+j*(this.r*1.5), (0.871*this.r)+0.871*2*this.r*i, this.r, 6);
          pop();
        }
      }
    }

  }

  this.WallCheck = function (y, x) {
    let I_No = y * this.MazeXLen + x;
    console.log('檢查點',I_No,'附近的牆壁');
    this.Ay_Maze[I_No].type='road-Y';
    for (let i=0;i<this.Ay_Maze[I_No].neighbor.length;i++){
      if (this.WallOpenPool.indexOf(this.Ay_Maze[I_No].neighbor[i].No)!=-1){
        console.log('牆壁',this.Ay_Maze[I_No].neighbor[i].No,'變更為不可破壞');
        this.Ay_Maze[I_No].neighbor[i].type = 'Wall-UNBREAK'
        console.log('牆壁',this.Ay_Maze[I_No].neighbor[i].No,'加入WallClose');
        this.WallClosePool.push(this.Ay_Maze[I_No].neighbor[i].No);
        console.log('牆壁',this.Ay_Maze[I_No].neighbor[i].No,'從WallOpen刪除');
        this.WallOpenPool.splice(this.WallOpenPool.indexOf(this.Ay_Maze[I_No].neighbor[i].No), 1)
      } else if (this.WallClosePool.indexOf(this.Ay_Maze[I_No].neighbor[i].No)==-1) {
        console.log('牆壁',this.Ay_Maze[I_No].neighbor[i].No,'加入WallOpen');
        this.WallOpenPool.push(this.Ay_Maze[I_No].neighbor[i].No)
      }
    }

  }

  this.WallBreak = function() {
    let rand = this.WallOpenPool[Math.floor(Math.random() * this.WallOpenPool.length)];
    this.Ay_Maze[rand].type = 'Wall-Open';
    this.WallOpenPool.splice(this.WallOpenPool.indexOf(this.Ay_Maze[rand].No), 1)
    this.WallClosePool.push(this.Ay_Maze[rand].No);
    console.log('打破牆壁',rand);
    console.log('牆壁',rand,'從WallOpen刪除');
    console.log('牆壁',rand,'加入WallClose');

    return [Math.floor(rand / this.MazeXLen), rand % this.MazeXLen];
  }

  this.PointUpdate = function(y, x) {
    let I_Point_X, I_Point_Y;
    let I_No = y * this.MazeXLen + x;
    for (let i=0;i<this.Ay_Maze[I_No].neighbor.length;i++){
      if (this.Ay_Maze[I_No].neighbor[i].type=="road-N") {
        console.log('檢查牆壁',I_No,'附近的點',this.Ay_Maze[I_No].neighbor[i].No);
        this.RoadOpenPool.push(this.Ay_Maze[I_No].neighbor[i].No);
        console.log('點',this.Ay_Maze[I_No].neighbor[i].No,'加入RoadOpen');
        this.Ay_Maze[I_No].neighbor[i].type = 'road-Y';

        this.WallCheck(Math.floor(this.Ay_Maze[I_No].neighbor[i].No / this.MazeXLen),
                                  this.Ay_Maze[I_No].neighbor[i].No % this.MazeXLen);
      }
    }

    let rand = this.RoadOpenPool[Math.floor(Math.random() * this.RoadOpenPool.length)];
    //console.log(this.Ay_Maze[I_No].No);
    this.RoadOpenPool.splice(this.RoadOpenPool.indexOf(this.Ay_Maze[rand].No), 1)
    this.RoadClosePool.push(rand);
    return [Math.floor(rand / this.MazeXLen), rand % this.MazeXLen];
  }

  this.MazeMakeGo = function () {
    let WallBreak
    console.log('已鎖定的牆壁為',this.WallClosePool);
    console.log('可選擇的點為',this.RoadOpenPool);
    console.log('已鎖定的點為',this.RoadClosePool);
    this.WallCheck(this.NewPoint[0], this.NewPoint[1]);
    console.log('可破牆壁有',this.WallOpenPool)

    //while (this.WallClosePool.length<this.WallTotal) {
    //for (let i=0;i<this.MazeXSize*this.MazeYSize-2;i++){
    try {
      let k = 0
      while (k==0) {
        console.log('已鎖定的牆壁為',this.WallClosePool);
        console.log('可選擇的點為',this.RoadOpenPool);
        console.log('已鎖定的點為',this.RoadClosePool);
        console.log(this.WallOpenPool);
        WallBreak  = this.WallBreak();
        this.NewPoint = this.PointUpdate(WallBreak[0], WallBreak[1]);
        console.log('新選擇的點為',this.NewPoint[0]*this.MazeXLen+this.NewPoint[1])
        console.log('END!!');
      }
    } catch {
      console.log();
    }
    console.log('最後可選擇的牆壁為',this.WallOpenPool);
    console.log('最後已鎖定的牆壁為',this.WallClosePool);
    console.log('最後可選擇的點為',this.RoadOpenPool);
    console.log('最後已鎖定的點為',this.RoadClosePool);

  }

}
