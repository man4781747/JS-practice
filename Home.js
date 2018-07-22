//var MakeTitle_ = new p5(MakeTitle, 'test');
//var HomeButton = new p5(MakeHomeButton, 'HomeButton');
//var PageLeft = new p5(MakePageLeft, 'HomeButton');
//console.log(MakeTitle_);
//MakeTitle_ = MakeTitle();
//function windowResized() {}
var AllElement = ['test1' ,'test2' ,'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];


function setup() {
  noCanvas();
  MakeTitle();
  //MakeLeftWindow();
  MakeMainWindow(AllElement);
  /*
  Div_1.id = 'divtest';
  Div_1.class = 'divtest'
  createCanvas(0,0);
  var test = createP("test");
  test.parent('divtest');

*/
  //Div_1.style('background-color', '#F00');
}

function draw() {
}

function windowResized() {
  let Select_Div_1 = selectAll('.Title');
  for (let i=0;i<Select_Div_1.length;i++) {
    Select_Div_1[i].size(windowWidth,Select_Div_1[i].height)
  }
  let Select_MainWindow = selectAll('.MainWindow');
  Select_MainWindow[0].remove();

  MakeMainWindow(AllElement);

/*
  let Select_HyperlinksDiv = selectAll('.HyperlinksDiv');
  for (let i=0;i<Select_HyperlinksDiv.length;i++) {
    Select_HyperlinksDiv[i].remove();
  }
  */
  //removeClass('HyperlinksDiv');

/*
  let Select_Div_2 = selectAll('.Div_2')
  for (let i=0;i<Select_Div_2.length;i++) {
    Select_Div_2[i].size(windowWidth-240,Select_Div_2[i].height)
  }
  /*
  Div_1.size(windowWidth, 60);
  Div_1_.size(windowWidth, 10);
  */
}
