var Div_1;

function setup() {
  frameRate(1)
  noCanvas();
  Div_1 = createDiv('test');
  Div_1.size(windowWidth,windowHeight);
  Div_1.style('background-color', 'rgb(200, 200, 200)');
  Div_1.style('transition', 'all 3s');
  Div_1.mousePressed(x => Div_1.size(400,400));

}


function draw() {
  Div_1.size(800,400)
}
