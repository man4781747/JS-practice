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
var bgcolor;
var button_1, button_2;
var htmlP ;
var slider, input;

function setup() {
  bgcolor = 0;

  htmlP = createP('0w0 TEST!!!!!!!!!')
  htmlP.position(windowWidth/2, windowHeight/4)
  htmlP.size = 100;

  button_1 = createElement('button','test');
  button_1.position(windowWidth/2, windowHeight*3/4);

  button_2 = createElement('button','迷宮');
  button_2.position(windowWidth/2, windowHeight*5/6);

  canvas = createCanvas(windowWidth/3, windowHeight/3);

  canvas.position(windowWidth/3, windowHeight/3)
  rectMode(RADIUS);

  slider = createSlider(0,windowWidth/3,windowWidth/6);
  slider.position(windowWidth/2,10+windowHeight*2/3);
  //slider.width = 500;
  console.log(slider);

  input = createInput('Input HERE!!')
  input.position(windowWidth/3,10+windowHeight*2/3);

  button_1.mousePressed(changeColor);
  button_2.mousePressed(x => location.assign("http://140.116.24.84:3000/Go/practice-8-AStartAndMaze/index.html"));
}

function changeColor() {
  bgcolor = color(random(255));
  location.assign("http://140.116.24.84:3000");
}

function draw() {
  //clear();
  background(bgcolor);
  textFont('Times New Roman', 50);
  fill(0);
  fill(255,0,0)
  ellipse(windowWidth/6, windowHeight/6,slider.value(),slider.value());
  htmlP.html(input.value());
  //button_1.position(windowWidth/2+random(-5,5), windowHeight/2);
  text("HI!!",mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth-3, windowHeight-4);
}
