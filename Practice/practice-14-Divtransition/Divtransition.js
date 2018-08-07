var Div_1;

function setup() {
  frameRate(1)
  noCanvas();
  for (let i=0;i<250;i++){
    console.log(i);
    Div_1 = createDiv('');
    Div_1.size(0, 0);
    Div_1.style('background-color', 'rgb(' + (i) + ', 200, 200)');
    Div_1.style('transition-property', 'width');
    Div_1.style('transition-duration', '3s');
    Div_1.style('transitionDelay', ((0.05)) + 's');
    //Div_1.size(windowWidth,windowHeight);
    Div_1.size(100,1);
    //Div_1.style('transition', 'all 1s');
    //Div_1.size(0, 0);
    //Div_1.mouseOver(x => Div_1.size(400,400));
    //Div_1.mouseOut(x => Div_1.size(windowWidth,windowHeight));
  }

}


function draw() {
}
