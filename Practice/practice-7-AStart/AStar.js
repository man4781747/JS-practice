var Ay_AStar;
var AStarDiv, AStarInputLen, AStarInputMag, AStarInputDOOR;
var MouseType = 'START';
var START_X, START_Y, END_X, END_Y;
var WallPosition = new Array(0);
var RoadMagSavePosition = new Array(0);
var RoadMagSave = new Array(0);

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

  AStarENDPointButton = createButton('決定終點');
  AStarENDPointButton.position(810, 120);
  AStarENDPointButton.mousePressed(x => MouseType = 'END');

  AStarWallPointButton = createButton('設為牆壁');
  AStarWallPointButton.position(810, 160);
  AStarWallPointButton.mousePressed(x => MouseType = 'Wall');

  AStarRoadPointButton = createButton('設為道路');
  AStarRoadPointButton.position(810, 200);
  AStarRoadPointButton.mousePressed(x => MouseType = 'Road');

  AStarInputMag = createInput('1');
  AStarInputMag.position(880, 200);
  AStarInputMag.size(80,15);

  AStarDOORPointButton = createButton('設為傳送門(X)');
  AStarDOORPointButton.position(810, 240);
  AStarDOORPointButton.mousePressed(x => MouseType = 'DOOR');
  AStarInputDOOR = createInput('還不能用拉!!');
  AStarInputDOOR.position(810+AStarDOORPointButton.width, 240);
  AStarInputDOOR.size(80,15);
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

  for (let i=0;i<RoadMagSavePosition.length;i++) {
    Ay_AStar.SetMag(floor(RoadMagSavePosition[i]/Len),RoadMagSavePosition[i]%Len,RoadMagSave[i]);
  }

  for (let i=0;i<WallPosition.length;i++) {
    Ay_AStar.SetWallPoint(floor(WallPosition[i]/AStarInputLen.value()),WallPosition[i]%AStarInputLen.value());
  }

  Ay_AStar.SetStartPoint(START_Y, START_X);
  Ay_AStar.SetEndPoint(END_Y, END_X);

  Ay_AStar.SetDOOR(9,0,8,8,'test')
  //console.log(Ay_AStar);
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
