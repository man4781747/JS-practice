var MazeDiv, MazeInputLen;
function CreatMazeDiv(){
  noCanvas();
  MazeDiv = createDiv('')
  MazeDiv.size(1000, 800);
  MazeDiv.style('background-color', 'rgb(100, 100, 100)')
  MazeDiv.id('MazeDiv');

  MazeP = createP('迷宮大小');
  MazeP.position(810,0);
  MazeP.style('background-color', 'rgb(250, 250, 250)')
  MazeP.style('textAlign', 'center')
  MazeP.size(180,30);

  MazeInputLen = createInput('3')
  MazeInputLen.position(810, 50);
  MazeInputLen.size(180, 15);
  console.log(MazeInputLen.value());
  MazeInputLen.changed(MazeReflash);
}

function MazeReflash() {
  let MazeChose = select('#Maze');
  MazeChose.remove();
  Ay_MazeMake = new MazeMake(MazeInputLen.value(),
                             MazeInputLen.value(),
                             select('#MazeDiv'));
  Ay_MazeMake.MazeMakeGo();
  Ay_MazeMake.MazeShow();
}

function setup() {
  CreatMazeDiv();
  Ay_MazeMake = new MazeMake(MazeInputLen.value(),
                             MazeInputLen.value(),
                             select('#MazeDiv'));
  Ay_MazeMake.MazeMakeGo();
  Ay_MazeMake.MazeShow();
}


function draw() {

}
