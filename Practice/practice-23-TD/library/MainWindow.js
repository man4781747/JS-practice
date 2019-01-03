var MainWindow = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(1280, 520);
    LoadAllImage();
  };

  p.draw = function() {
    p.image(Img_testGround,0,0);
  };
};


// var myp5 = new p5(MainWindow, 'MainDiv');
