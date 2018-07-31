var I_MazeSize_X = 50;
var I_MazeSize_Y = 50;
var Ay_MazeMake, Ay_AStar;

function setup() {
  Ay_MazeMake = new MazeMake(I_MazeSize_X,I_MazeSize_Y);
  Ay_MazeMake.MazeMakeGo();
  Ay_MazeMake.MazeShow();
  Ay_AStar = new AStarMake(I_MazeSize_Y*2-1, I_MazeSize_X*2-1);
  //console.log(Ay_AStar.Ay_Maze);
  let WhereWall = Ay_MazeMake.WhereWall()
  for (let i=0;i<WhereWall.length;i++){
    Ay_AStar.SetWallPoint(floor(WhereWall[i]/(I_MazeSize_X*2-1)),
                                WhereWall[i]%(I_MazeSize_X*2-1));
  }

  Ay_AStar.SetStartPoint(floor(random(I_MazeSize_Y))*2, floor(random(I_MazeSize_X))*2);
  Ay_AStar.SetEndPoint(floor(random(I_MazeSize_Y)*2),floor(random(I_MazeSize_X))*2);
  Ay_AStar.AStarGo();
  Ay_AStar.AStarShow();
  //console.log(Ay_MazeMake.WhereWall());

}

function draw() {

}
