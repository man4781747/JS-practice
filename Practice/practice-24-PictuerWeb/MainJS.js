var SliderTest;
var DirTest;
var PictureNum = 10;
var MainImg;
var Testimg;
var PicCanvas;
var OldSliderNum;

function setup() {
  PicCanvas = createCanvas(windowHeight/2, windowHeight/2);
  PicCanvas.position(windowWidth/2-PicCanvas.size().width/2, windowHeight/12);

  SliderTest = createSlider(0, (PictureNum-1)*20, 1);
  SliderTest.position(windowWidth/2-SliderTest.size().width/2, windowHeight-100);
  SliderTest.value(0);
  for (let i=0;i<PictureNum;i++) {
    let DirTest = createDiv();
    DirTest.id('Test'+i);
    DirTest.class('TestClass');
    DirTest.style(
      'background-color',
      'rgba('+Math.floor(Math.random()*255)+','+
              Math.floor(Math.random()*255)+','+
              Math.floor(Math.random()*255)+',1)');
  }
  OldSliderNum = -1;
  // Testimg = loadImage('http://140.116.24.83:8000/static/Boss.png');
  // Testimg = loadImage('./test.jpg');
  // console.log(Testimg);
  // MainImg = createImg(Testimg);
}


function draw() {
  background(125);
  // image(Testimg,0,0);
  var SliderTestValue = SliderTest.value();
  var GetValue = Math.round(SliderTestValue/20);
  var testtest = selectAll('.TestClass');
  for (let i=0;i<testtest.length;i++) {
    let testsize = 200*pow(1-abs(SliderTestValue-i*20)/(PictureNum*20), 2)
    testtest[i].size(testsize, testsize);
    testtest[i].position(
      windowWidth/2-testtest[i].size().width/2-(SliderTestValue-i*20)*abs((SliderTestValue-(i)*20))/2,
      windowHeight*3/4-testtest[i].size().width/2-pow(SliderTestValue-i*20,2)/20)
  }
  // console.log(MainImg.elt);
  // // MainImg.elt =
  // console.log(createImg('http://140.116.24.83:8000/static/Boss.png'))
  // noLoop();
  if (OldSliderNum != GetValue){
    MainImg = createImg('http://140.116.24.83:8000/static/2018/11/25/11/TAEA_20181125_110555_EMPTY.png').hide();
  }
  image(MainImg,0,0,windowHeight/2, windowHeight/2)

  OldSliderNum = GetValue;
  // console.log(GetValue);
  // console.log(testtest.length);
  // DirTest.size(200*(1-abs(20-SliderTestValue)/(PictureNum*20)), 200*(1-abs(20-SliderTestValue)/(PictureNum*20)));
  // // console.log(DirTest.size().width);
  // DirTest.position(windowWidth/2+(SliderTestValue-20)*10-DirTest.size().width/2,50+DirTest.size().height/2);

}
