var MousePositionY, MousePositionX;

function WhenMouseDraggedOrPressed() {
  if (mouseX>=0&&mouseX<798&&mouseY>=0&&mouseY<798){
    if (MouseType == 'START') {
      START_X = MousePositionX;
      START_Y = MousePositionY;
    } else if (MouseType == 'END') {
      END_X = MousePositionX;
      END_Y = MousePositionY;
    } else if (MouseType == 'Wall') {
      if (WallPosition.indexOf(MousePositionY*AStarInputLen.value() + MousePositionX)==-1){
        WallPosition.push(MousePositionY*AStarInputLen.value() + MousePositionX);
      }
    } else if (MouseType == 'Road') {
      if (WallPosition.indexOf(MousePositionY*AStarInputLen.value() + MousePositionX)!=-1){
        WallPosition.splice(WallPosition.indexOf(MousePositionY*AStarInputLen.value() + MousePositionX), 1);
      }

      if (RoadMagSavePosition.indexOf(MousePositionY*AStarInputLen.value() + MousePositionX)==-1){
        RoadMagSavePosition.push(MousePositionY*AStarInputLen.value() + MousePositionX);
        RoadMagSave.push(AStarInputMag.value());
      } else {
        RoadMagSave[RoadMagSavePosition.indexOf(MousePositionY*AStarInputLen.value() + MousePositionX)] = AStarInputMag.value();
      }
    }
    AStarReflash();
  }
}

function mouseDragged() {
  WhenMouseDraggedOrPressed()
}

function mousePressed() {
  WhenMouseDraggedOrPressed()
}

function AStarMake(YLen, XLen, ParentDiv){
  this.XLen = XLen;
  this.YLen = YLen;
  this.ParentDiv = ParentDiv;
  this.START_X = null;
  this.START_Y = null;


  let F_L = 800./this.XLen;
  let F_H = 800./this.YLen;
  this.AStartCanvas = createCanvas(801, 801);
  rectMode(CENTER);
  this.AStartCanvas.parent(this.ParentDiv);
  this.AStartCanvas.id('AStartCanvas');

  //this.AStartCanvas.mousePressed(x => console.log(this.MousePositionX, this.MousePositionY))
  //this.AStartCanvas.mouseDragged(WhenMouseDragged)

  var Ay_AStar = new Array(YLen);
  for (let i=0;i<YLen;i++){
    Ay_AStar[i] = new Array(XLen);
    for (let j=0;j<XLen;j++){
      Ay_AStar[i][j] = new AStarCell(j, i)
    }
  }
  this.Ay_AStar = Ay_AStar;
  this.Ay_Close = new Array(0);
  this.Ay_Open = new Array(0);
  this.I_END = 0;
  this.minLoc;

  this.FindYourNeighbor = function(y, x) {
    //尋找所在格的鄰居
    //找頭頂的 y-1, x
    if (y-1>=0) {
      this.Ay_AStar[y][x].neighbor.push(this.Ay_AStar[y-1][x]);
    }
    //找下方的 y+1, x
    if (y+1<this.YLen) {
      this.Ay_AStar[y][x].neighbor.push(this.Ay_AStar[y+1][x]);
    }
    //找左方的 y, x+1
    if (x-1>=0) {
      this.Ay_AStar[y][x].neighbor.push(this.Ay_AStar[y][x-1]);
    }
    //找右方的 y, x+1
    if (x+1<this.XLen) {
      this.Ay_AStar[y][x].neighbor.push(this.Ay_AStar[y][x+1]);
    }
  }

  for (let i=0;i<this.YLen;i++) {
    for (let j=0;j<this.XLen;j++) {
      this.FindYourNeighbor(i, j);
    }
  }

  //console.log(Ay_AStar);

  this.SetMag = function (y, x, Mag) {
    this.Ay_AStar[y][x].Magnification = Mag;
  }

  this.SetDOOR = function (y1, x1, y2, x2, Par) {
    this.Ay_AStar[y1][x1].neighbor.push(this.Ay_AStar[y2][x2]);
    this.Ay_AStar[y1][x1].Type = 'DOOR';
    this.Ay_AStar[y2][x2].neighbor.push(this.Ay_AStar[y1][x1]);
    this.Ay_AStar[y2][x2].Type = 'DOOR';
  }


  this.SetStartPoint = function (y, x) {
    if (this.START_X == null) {
      this.Ay_AStar[y][x].Type = 'START';
      this.START_X = x;
      this.START_Y = y;
      this.Ay_Close.push(y*this.XLen+x);
      this.AddClose(y, x);
    } else {
      this.Ay_AStar[this.START_Y][this.START_X].Type = 'Road';
      this.START_X = x;
      this.START_Y = y;
      this.Ay_Close.push(y*this.XLen+x);
      this.AddClose(y, x);
    }



  }
  this.SetEndPoint = function (y, x) {
    this.END_x = x;
    this.END_y = y;
    this.Ay_AStar[y][x].Type = 'END';
    for (let i=0;i<this.YLen;i++){
      for (let j=0;j<this.XLen;j++){
        this.Ay_AStar[i][j].h = abs(this.Ay_AStar[i][j].y-y)*10 + abs(this.Ay_AStar[i][j].x-x)*10;
        //this.Ay_AStar[i][j].h = floor(Math.sqrt(Math.pow((this.Ay_AStar[i][j].y-y)*10,2) + Math.pow((this.Ay_AStar[i][j].x-x)*10,2)));
      }
    }
  }
  this.SetWallPoint = function (y, x) {
    //console.log('將 '+(y*this.XLen+x) + ' 設為Wall')
    this.Ay_AStar[y][x].Type = 'Wall';
  }

  this.AddClose = function (y ,x) {
    if (this.Ay_AStar[y][x].Type == 'END') {
      this.I_END = 1;
    }

    for (let i=0;i<this.Ay_AStar[y][x].neighbor.length;i++) {
      let NeighborChose = this.Ay_AStar[y][x].neighbor[i];
      //console.log( NeighborChose.Type);
      if (NeighborChose.Type != 'Wall' && NeighborChose.Type != 'START' &&
          this.Ay_Open.indexOf(NeighborChose.y*this.XLen+NeighborChose.x) == -1 &&
          this.Ay_Close.indexOf(NeighborChose.y*this.XLen+NeighborChose.x) == -1 ) {
            //console.log('將 '+(NeighborChose.y*this.XLen+NeighborChose.x) + ' 加入Ay_Open')
            this.Ay_Open.push(NeighborChose.y*this.XLen+NeighborChose.x);
            NeighborChose.g = 10*(this.Ay_AStar[y][x].Magnification) + this.Ay_AStar[y][x].g;
            NeighborChose.f = NeighborChose.h+NeighborChose.g;
            NeighborChose.parent = this.Ay_AStar[y][x];

          } else if (this.Ay_Open.indexOf(NeighborChose.y*this.XLen+NeighborChose.x) == 1){
            if (NeighborChose.f>(this.Ay_AStar[y][x].f+10*(this.Ay_AStar[y][x].Magnification))) {
              NeighborChose.parent = this.Ay_AStar[y][x];
            }
          }
        ////console.log(i)
    }

  }

  this.AddOpen = function () {
    let min = 9999999;
    for (let i=0;i<this.Ay_Open.length;i++) {
      if (this.Ay_AStar[floor(this.Ay_Open[i]/this.XLen)][this.Ay_Open[i]%this.XLen].f < min) {
        min = this.Ay_AStar[floor(this.Ay_Open[i]/this.XLen)][this.Ay_Open[i]%this.XLen].f;
        this.minLoc = this.Ay_Open[i];
      }
    }
    ////console.log(this.minLoc);
    this.Ay_Close.push(this.minLoc);
    this.Ay_Open.splice(this.Ay_Open.indexOf(this.minLoc), 1);
  }

  this.AStarGo = function() {
    try {
      while (this.I_END == 0 && this.Ay_Open.length>0) {
        this.AddOpen();
        this.AddClose(floor(this.minLoc/this.XLen), this.minLoc%this.XLen)
      }

      console.log('計算完成');
      if (this.Ay_Open.length==0) {
        console.log('沒解答???');
      }
      //console.log('最低步數 : '+);
    } catch {
      console.log('沒解答???');
    }


/*
    this.AddOpen();
    this.AddClose(floor(this.minLoc/this.XLen), this.minLoc%this.XLen)
*/
  }

  this.AStarShow = function() {
    //console.log('Show');
    background(255);
    push();
    stroke(0);
    line(0, 0, 0, 800);
    line(0, 0, 800, 0);
    line(800, 0, 800, 800);
    line(0, 800, 800, 800);
    pop();

    fill(255);
    for (let i=0;i<this.YLen;i++){
      for (let j=0;j<this.XLen;j++){
        push();
        if (this.Ay_AStar[i][j].Type == 'START') {
          fill(255,0,0);
          rect((j+0.5)*F_L, (i+0.5)*F_H, F_L ,F_H);
        } else if (this.Ay_AStar[i][j].Type == 'END') {
          fill(0,255,0);
          rect((j+0.5)*F_L, (i+0.5)*F_H, F_L ,F_H);
        } else if (this.Ay_AStar[i][j].Type == 'Wall') {
          fill(0,0,255);
          rect((j+0.5)*F_L, (i+0.5)*F_H, F_L ,F_H);
        } else if (this.Ay_AStar[i][j].Type == 'Road') {
          fill(0);
          textSize(15);
          text(this.Ay_AStar[i][j].Magnification,(j)*F_H+5, (i+1)*F_L-5);
        } else if (this.Ay_AStar[i][j].Type == 'DOOR') {
          fill(44,44,125);
          rect((j+0.5)*F_L, (i+0.5)*F_H, F_L ,F_H);
        }


        pop();
/*
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
*/


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
    LineObj = this.Ay_AStar[this.END_y][this.END_x]

    push();
    stroke(0);
    for (let i=1;i<this.YLen;i++){
      line(0, F_H*i, 800, F_H*i);
    }
    for (let j=1;j<this.XLen;j++){
      line(F_L*j, 0, F_L*j, 800);
    }


    pop();
    push();


    stroke(255,0,0);
    strokeWeight(3);
    stroke(0);
    while (LineObj.parent != null){
      line((LineObj.x+0.5)*F_L,
           (LineObj.y+0.5)*F_H ,
           (LineObj.parent.x+0.5)*F_L,
           (LineObj.parent.y+0.5)*F_H);
      LineObj = LineObj.parent;
    }


    pop();

    push();
    if (MouseType == 'START') {
      fill(255,0,0,50);
    } else if (MouseType == 'END') {
      fill(0,255,0,50);
    } else if (MouseType == 'Wall') {
      fill(0,0,255,50);
    } else if (MouseType == 'Road') {
      fill(0,255,255,50);
    }
    MousePositionY =  floor(mouseY/F_H);
    MousePositionX =  floor(mouseX/F_L);
    //ellipse(MousePositionX*F_L +F_L/2, MousePositionY*F_H +F_H/2, 30 ,30);
    rect(MousePositionX*F_L +F_L/2, MousePositionY*F_H +F_H/2 , F_L ,F_H);
    pop();

  }

}
