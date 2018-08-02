
var x = 500;
var y = 500;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }



  ellipse(x, y, 10, 10);
}
