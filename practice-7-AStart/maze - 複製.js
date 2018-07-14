var I_MazeXLen = 8;
var I_MazeYLen = 6;
var Ay_Maze = new Array(I_MazeYLen);

for (let i=0;i<I_MazeYLen;i++){
  Ay_Maze[i] = new Array(I_MazeXLen);
  for (let j=0;j<I_MazeXLen;j++){
    Ay_Maze[i][j] = new Ceil(j, i)
  }
}

var I_ENDPoint_Y = 2;
var I_ENDPoint_X = 6;
var I_STARTPoint_Y = 0;
var I_STARTPoint_X = 2;
var I_minLoc;
var I_END = 0;
var LineObj;


var Ay_Close, Ay_Open;
Ay_Close = new Array(0);
Ay_Close.push(I_STARTPoint_Y*I_MazeXLen+I_STARTPoint_X);
Ay_Open = new Array(0);

Ay_Maze[I_STARTPoint_Y][I_STARTPoint_X].Type = 'START';
Ay_Maze[I_ENDPoint_Y][I_ENDPoint_X].Type = 'END';
Ay_Maze[2][4].Type = 'Moun';
Ay_Maze[1][4].Type = 'Moun';
Ay_Maze[3][4].Type = 'Moun';
Ay_Maze[0][4].Type = 'Moun';

function AddClose(y ,x) {
  if (Ay_Maze[y][x].Type == 'END') {
    I_END = 1;
  }

  if ( y-1>=0 &&
       Ay_Maze[y-1][x].Type != 'Moun' &&
       Ay_Maze[y-1][x].Type != 'START' &&
       Ay_Open.indexOf((y-1)*I_MazeXLen+x) == -1 &&
       Ay_Close.indexOf((y-1)*I_MazeXLen+x) == -1) {
    Ay_Open.push((y-1)*I_MazeXLen+x);
    Ay_Maze[y-1][x].g = 10 + Ay_Maze[y][x].g;
    Ay_Maze[y-1][x].f = Ay_Maze[y-1][x].h+Ay_Maze[y-1][x].g;
    Ay_Maze[y-1][x].parent = Ay_Maze[y][x];
  } else if (Ay_Open.indexOf((y-1)*I_MazeXLen+x) != -1) {
    if (Ay_Maze[y-1][x].f>(Ay_Maze[y][x].f+10)) {
      //Ay_Maze[y-1][x].parent = Ay_Maze[y][x];
    }
  }
  if ( x-1>=0 &&
       Ay_Maze[y][x-1].Type != 'Moun' &&
       Ay_Maze[y][x-1].Type != 'START' &&
       Ay_Open.indexOf(y*I_MazeXLen+x-1) == -1 &&
       Ay_Close.indexOf(y*I_MazeXLen+x-1) == -1) {
    Ay_Open.push(y*I_MazeXLen+x-1);
    Ay_Maze[y][x-1].g = 10 + Ay_Maze[y][x].g;
    Ay_Maze[y][x-1].f = Ay_Maze[y][x-1].h+Ay_Maze[y][x-1].g;
    Ay_Maze[y][x-1].parent = Ay_Maze[y][x];
  } else if (Ay_Open.indexOf((y)*I_MazeXLen+x-1) != -1) {
    if (Ay_Maze[y][x-1].f>Ay_Maze[y][x].f+10) {
      //Ay_Maze[y][x-1].parent = Ay_Maze[y][x];
    }
  }
  if ( y+1<I_MazeYLen &&
       Ay_Maze[y+1][x].Type != 'Moun' &&
       Ay_Maze[y+1][x].Type != 'START' &&
       Ay_Open.indexOf((y+1)*I_MazeXLen+x) == -1 &&
       Ay_Close.indexOf((y+1)*I_MazeXLen+x) == -1) {
    Ay_Open.push((y+1)*I_MazeXLen+x);
    Ay_Maze[y+1][x].g = 10 + Ay_Maze[y][x].g;
    Ay_Maze[y+1][x].f = Ay_Maze[y+1][x].h+Ay_Maze[y+1][x].g;
    Ay_Maze[y+1][x].parent = Ay_Maze[y][x];
  } else if (Ay_Open.indexOf((y+1)*I_MazeXLen+x) != -1) {
    if (Ay_Maze[y+1][x].f>Ay_Maze[y][x].f+10) {
      //Ay_Maze[y+1][x].parent = Ay_Maze[y][x];
    }
  }
  if ( x+1<I_MazeXLen &&
       Ay_Maze[y][x+1].Type != 'Moun' &&
       Ay_Maze[y][x+1].Type != 'START' &&
       Ay_Open.indexOf(y*I_MazeXLen+x+1) == -1 &&
       Ay_Close.indexOf(y*I_MazeXLen+x+1) == -1) {
    Ay_Open.push(y*I_MazeXLen+x+1);
    Ay_Maze[y][x+1].g = 10 + Ay_Maze[y][x].g;
    Ay_Maze[y][x+1].f = Ay_Maze[y][x+1].h+Ay_Maze[y][x+1].g;
    Ay_Maze[y][x+1].parent = Ay_Maze[y][x];
  } else if (Ay_Open.indexOf((y)*I_MazeXLen+x+1) != -1) {
    if (Ay_Maze[y][x+1].f>Ay_Maze[y][x].f+10) {
      //Ay_Maze[y][x+1].parent = Ay_Maze[y][x];
    }
  }

}

function AddOpen() {
  var I_min = 9999999;
  for (let i=0;i<Ay_Open.length;i++) {
    if (Ay_Maze[floor(Ay_Open[i]/I_MazeXLen)][Ay_Open[i]%I_MazeXLen].f < I_min) {
      I_min = Ay_Maze[floor(Ay_Open[i]/I_MazeXLen)][Ay_Open[i]%I_MazeXLen].f;
      I_minLoc = Ay_Open[i];
    }
  }
  Ay_Close.push(I_minLoc);
  Ay_Open.splice(Ay_Open.indexOf(I_minLoc), 1);

}

function Ceil(x, y) {
  // F = G + H
  this.x = x;
  this.y = y;
  this.g = 0; // G 移動價值
  this.h = 0; // H 預估移動價值
  this.f = 0; // 總價值
  this.Type = 'Road';
  this.Magnification = 1;
  this.parent = null;
}

function setup() {
  noLoop();
  createCanvas(I_MazeXLen*100, I_MazeYLen*100);
  rectMode(CENTER);

  for (let i=0;i<I_MazeYLen;i++){
    for (let j=0;j<I_MazeXLen;j++){
      Ay_Maze[i][j].h = abs(Ay_Maze[i][j].y-I_ENDPoint_Y)*10 + abs(Ay_Maze[i][j].x-I_ENDPoint_X)*10
    }
  }

  AddClose(I_STARTPoint_Y ,I_STARTPoint_X);

  while (I_END == 0) {
    AddOpen();
    AddClose(floor(I_minLoc/I_MazeXLen), I_minLoc%I_MazeXLen)
  }


/*
  for (let i=0;i<8;i++) {
    AddOpen();
    AddClose(floor(I_minLoc/I_MazeXLen), I_minLoc%I_MazeXLen)
  }
*/
  console.log(Ay_Open);
  console.log(Ay_Close);
  console.log(Ay_Maze);

}

function draw() {
  background(0);
  fill(255);
  for (let i=0;i<I_MazeYLen;i++){
    for (let j=0;j<I_MazeXLen;j++){
      push();
      if (Ay_Maze[i][j].Type == 'START') {
        fill(255,0,0);

      } else if (Ay_Maze[i][j].Type == 'END') {
        fill(0,255,0);
      } else if (Ay_Maze[i][j].Type == 'Moun') {
        fill(0,0,255)
      }
      rect(50+j*100, 50+i*100, 100-1 ,100-1);
      fill(0);
      text(Ay_Maze[i][j].h, 5+j*100, 15+i*100);
      text(Ay_Maze[i][j].g, 85+j*100, 15+i*100);
      text(Ay_Maze[i][j].f, 85+j*100, 75+i*100);
      text(i*I_MazeXLen+j, 5+j*100, 75+i*100);
      pop();

      push();
      fill(255,255,0);
      for (let i=0;i<Ay_Close.length;i++){
        ellipse(50+(Ay_Close[i]%I_MazeXLen)*100,
                50+floor(Ay_Close[i]/I_MazeXLen)*100, 10 ,10);
      }
      pop();

      push();
      fill(0,255,255);
      for (let i=0;i<Ay_Open.length;i++){
        ellipse(50+(Ay_Open[i]%I_MazeXLen)*100,
                50+floor(Ay_Open[i]/I_MazeXLen)*100, 10 ,10);
      }
      pop();
    }
  }

  LineObj = Ay_Maze[I_ENDPoint_Y][I_ENDPoint_X]
  push();
  fill(0);

  while (LineObj.parent != null){
    line(50+LineObj.x*100,
         50+LineObj.y*100 ,
         50+LineObj.parent.x*100,
         50+LineObj.parent.y*100);
    LineObj = LineObj.parent;
  }

  pop();
}
