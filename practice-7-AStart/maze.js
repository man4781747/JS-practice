var Ay_AStar;

function setup() {
  Ay_AStar = new AStarMake(6, 8);
  Ay_AStar.SetStartPoint(2, 2);
  Ay_AStar.SetEndPoint(2, 6);
  Ay_AStar.SetWallPoint(1, 4);
  Ay_AStar.SetWallPoint(2, 4);
  Ay_AStar.SetWallPoint(3, 3);
  Ay_AStar.SetWallPoint(4, 3);
  Ay_AStar.SetWallPoint(0, 3);

  Ay_AStar.AStarGo();
  console.log(Ay_AStar);
  noLoop();
  createCanvas(8 * 100, 6 * 100);
  rectMode(CENTER);
}

function draw() {
  Ay_AStar.AStarShow();

}
