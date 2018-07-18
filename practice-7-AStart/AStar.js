var Ay_AStar;

function setup() {
  let Len = 20;
  Ay_AStar = new AStarMake(Len, Len);

  for (let i=int(Len/2);i<Len;i++) {
    for (let j=Len/2;j<Len;j++) {
      Ay_AStar.SetMag(j,i,1.2);
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
  Ay_AStar.SetEndPoint(Len-1, Len-1);



  Ay_AStar.AStarGo();
  console.log(Ay_AStar);
  noLoop();
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  Ay_AStar.AStarShow();

}
