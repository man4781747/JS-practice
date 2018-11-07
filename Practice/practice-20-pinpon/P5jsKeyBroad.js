var ScreenHeight, ScreenWidth;
var TableClass = [];
var BallClass = [];
var x =500;
var y = 500;

function setup() {
  // frameRate(1);
  ScreenHeight = windowHeight;
  ScreenWidth = windowWidth;
  createCanvas(ScreenWidth, ScreenHeight);
  TableClass[0] = new Table(ScreenHeight, ScreenWidth);
  // BallClass[0] = new Ball(TableClass[0].TableX,
  //                         TableClass[0].TableY - TableClass[0].TableHeight);
  BallClass[0] = new Ball(TableClass[0].TableX,
                          TableClass[0].TableY);
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)) {
    TableClass[0].Move(-1);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    TableClass[0].Move(1);
  }

  if (keyIsDown(UP_ARROW)) {
  }

  if (keyIsDown(DOWN_ARROW)) {
  }


  let test = [];
  test[0] = createVector(mouseX + 20,
                         mouseY - 40);
  test[1] = createVector(mouseX + 56,
                         mouseY + 43);
  test[2] = createVector(mouseX - 40,
                        mouseY + 51);
  test[3] = createVector(mouseX - 20,
                        mouseY - 20);
  quad(test[0].x, test[0].y,
    test[1].x, test[1].y,
    test[2].x, test[2].y,
    test[3].x, test[3].y
         )
  TableV = [];
  TableV[0] = createVector(TableClass[0].TableX + TableClass[0].TableWidth,
                        TableClass[0].TableY - TableClass[0].TableHeight);
  TableV[1] = createVector(TableClass[0].TableX + TableClass[0].TableWidth,
                        TableClass[0].TableY + TableClass[0].TableHeight);
  TableV[2] = createVector(TableClass[0].TableX - TableClass[0].TableWidth,
                        TableClass[0].TableY + TableClass[0].TableHeight);
  TableV[3] = createVector(TableClass[0].TableX - TableClass[0].TableWidth,
                        TableClass[0].TableY - TableClass[0].TableHeight);


  TableClass[0].Show();
  BallClass[0].Move(ScreenHeight, ScreenWidth);
  // BallClass[0].HitBox_Table(TableClass[0]);
  if (CollisionDetectionTable(TableClass[0], BallClass[0]) == 1) {
    BallClass[0].Vy = -BallClass[0].Vy;
  }
  console.log(CollisionDetectionTable(TableClass[0], BallClass[0]));
  // CollisionDetectionTable(TableClass[0], BallClass[0]);
  // console.log(CollisionDetectionBoxBox(TableV, test, 0));
  BallClass[0].Show();
}
