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
  createCanvas(1000, 1000);
  rectMode(RADIUS);
}

function draw() {
  background(0);
//  rotate(frameCount / 50.0);
  stroke(255);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);

  fill(255, 30, 0);
  arc(200, 100, 20, 50, 0, PI, OPEN);

  fill(255, 60, 0);
  arc(300, 100, 20, 50, 0, PI * 1.5, CHORD);

  fill(255, 90, 0);
  arc(400, 100, 20, 50, 0, PI / 1.5, PIE);

  fill(255, 120, 0);
  arc(500, 100, 20, 50, 0, PI * 0.25);

  fill(255, 150, 0);
  ellipse(600, 100, 30, 60);

  line(700, 0, 700, 200);

  point(800, 100);

  fill(255, 180, 0);
  quad(900 - 50, 100 - 20,
    900 - 40, 100 + 30,
    900 + 30, 100 + 40,
    900 + 20, 100 - 50);

  fill(255, 210, 0);
  polygon(100, 300, 82, 3);

  fill(255, 240, 0);
  polygon(300, 300, 41, 4);

  fill(255, 255, 0);
  polygon(mouseX, mouseY, 100, 7);
}
