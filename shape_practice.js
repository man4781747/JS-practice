function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(windowWidth-3, windowHeight-4);
  rectMode(RADIUS);
  createElement('button','test');
}

function draw() {
  background(0);
  fill(255);
  textFont('Times New Roman', 50);
  text("HI!!",mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth-3, windowHeight-4);
}
