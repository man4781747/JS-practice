var MakeTitle = function(sketch) {
  sketch.setup = function() {
    let Title = sketch.createCanvas(windowWidth, 70);
    var DivTitle = createElement('div');
    Title.style('minWidth', '400px');
    Title.background(189, 88, 44);
    push();
    sketch.noStroke();
    sketch.fill(288,131,18);
    sketch.rect(0, 60, windowWidth, 10);
    pop();
  };
  sketch.draw = function() {
  };

}
/*
function MakeTitle() {
  this.setup = function() {
    this.Title = sketch.createCanvas(windowWidth, 70);
    this.Title.style('minWidth', '400px');
    this.Title.background(189, 88, 44);
  }
}
*/

var MakeHomeButton = function(sketch) {
  sketch.setup = function() {
    let HomeButton = sketch.createCanvas(40*1.6, 40);
    HomeButton.background(189+20, 88+20, 44+20);
    HomeButton.position(10, 10);

    HomeButton.mouseOver(x => HomeButton.background(189-20, 88-20, 44-20));
    HomeButton.mouseOut(x => HomeButton.background(189+20, 88+20, 44+20));
    HomeButton.mousePressed(x => console.log('test'));
  };
  sketch.draw = function() {
  };
}

var MakePageLeft = function(sketch) {
  sketch.setup = function() {
    let PageLeft = sketch.createCanvas(windowWidth/5, 1000);
    PageLeft.style('minWidth', '200px');
    PageLeft.background(44);
    PageLeft.position(0, 70);

    PageLeft.mouseOver(x => PageLeft.background(200));
    PageLeft.mouseOut(x => PageLeft.background(44));
  }
}
