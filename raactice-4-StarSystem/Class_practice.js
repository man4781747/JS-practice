var Stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(RADIUS);
  Stars[0] = new Star(100, 5, 5);
  AddStar(Stars);
  console.log(Stars);
}

function draw() {
  background(0);

}
