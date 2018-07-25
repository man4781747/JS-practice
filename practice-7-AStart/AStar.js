var Ay_AStar;
var AStarDiv, AStarInputLen;
var MouseType = 'START';
var START_X, START_Y, END_X, END_Y;
var WallPositionX = new Array(0);
var WallPositionY = new Array(0);

function CreatAStarDiv(){
  noCanvas();
  AStarDiv = createDiv('')
  AStarDiv.size(1000, 800);
  AStarDiv.style('background-color', 'rgb(100, 100, 100)')
  AStarDiv.id('AStarDiv');

  AStarP = createP('地圖大小');
  AStarP.position(810,0);
  AStarP.style('background-color', 'rgb(250, 250, 250)')
  AStarP.style('textAlign', 'center')
  AStarP.size(180,30);

  AStarInputLen = createInput('10')
  AStarInputLen.position(810, 50);
  AStarInputLen.size(180, 15);
  AStarInputLen.changed(AStarReflash);

  AStarSTARTPointButton = createButton('決定起點');
  AStarSTARTPointButton.position(810, 80);
  AStarSTARTPointButton.mousePressed(x => MouseType = 'START');

  AStarSTARTPointButton = createButton('決定終點');
  AStarSTARTPointButton.position(810, 120);
  AStarSTARTPointButton.mousePressed(x => MouseType = 'END');

  AStarSTARTPointButton = createButton('增加牆壁');
  AStarSTARTPointButton.position(810, 160);
  AStarSTARTPointButton.mousePressed(x => MouseType = 'Wall');
}

function AStarReflash() {
  let AStartDivChose = select('#AStartCanvas');
  AStartDivChose.remove();
  AStarGoGo();
  Ay_AStar.AStarShow();
}

function AStarGoGo() {
  let Len = AStarInputLen.value();
  Ay_AStar = new AStarMake(Len, Len, AStarDiv);

  for (let i=0;i<WallPositionX.length;i++) {
    Ay_AStar.SetWallPoint(WallPositionY[i],WallPositionX[i]);
  }

  Ay_AStar.SetStartPoint(START_Y, START_X);
  Ay_AStar.SetEndPoint(END_Y, END_X);
  //console.log(WallPositionX.lenght);

  Ay_AStar.AStarGo();
  //Ay_AStar.AStarShow();
}

function setup() {
  START_Y = 0;
  START_X = 0;
  END_X = 1;
  END_Y = 1;
  CreatAStarDiv();
  AStarGoGo();
  Ay_AStar.AStarShow();
}

function mouseMoved(){
  Ay_AStar.AStarShow();
}

function draw() {
  //console.log('test')
  //Ay_AStar.AStarShow();
}
