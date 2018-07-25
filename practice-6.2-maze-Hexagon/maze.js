var HexMazeDiv, MazeInputLen;
function CreatHexMazeDiv(){
  noCanvas();
  HexMazeDiv = createDiv('')
  HexMazeDiv.size(1000, 800);
  HexMazeDiv.style('background-color', 'rgb(100, 100, 100)')
  HexMazeDiv.id('MazeDiv');

  HexMazeP = createP('迷宮大小');
  HexMazeP.position(810,0);
  HexMazeP.style('background-color', 'rgb(250, 250, 250)')
  HexMazeP.style('textAlign', 'center')
  HexMazeP.size(180,30);

  HexMazeInputLen = createInput('10')
  HexMazeInputLen.position(810, 50);
  HexMazeInputLen.size(180, 15);
  //console.log(HexMazeInputLen.value());
  //HexMazeInputLen.changed(MazeReflash);
}


function setup() {
  CreatHexMazeDiv()
  Ay_MazeMake = new MazeMake(HexMazeInputLen.value(), HexMazeInputLen.value(), HexMazeDiv);
  Ay_MazeMake.MazeMakeGo();
  console.log(Ay_MazeMake.Ay_Maze);
  Ay_MazeMake.MazeShow();
}

function draw() {

}
