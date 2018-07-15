var Ay_AStar;

function setup() {
  Ay_AStar = new AStarMake(10, 10);

  for (let i=4;i<10;i++) {
    for (let j=0;j<10;j++) {
      Ay_AStar.SetMag(j,i,0.1);
    }
  }
/*
  Ay_AStar.SetWallPoint(1, 4);
  Ay_AStar.SetWallPoint(2, 4);
  Ay_AStar.SetWallPoint(3, 3);
  Ay_AStar.SetWallPoint(4, 3);
  Ay_AStar.SetWallPoint(0, 3);
*/
  Ay_AStar.SetStartPoint(0, 0);
  Ay_AStar.SetEndPoint(9, 9);



  Ay_AStar.AStarGo();
  console.log(Ay_AStar);
  noLoop();
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  Ay_AStar.AStarShow();

}
