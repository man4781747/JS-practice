var stars;
var stars_ = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(RADIUS);
  //stars = new Star(windowWidth/2., windowHeight/2.);

  for (i=0;i<100;i++){
    stars_[i] = new Star(random(windowWidth), random(windowHeight),
                         random(20));
  }
  //stars_ = [new Star(windowWidth/2., windowHeight/4.)];
}

function draw() {
  background(0);
  //stars.Show();

  for (i=0;i<10;i++){
    stars_[i] = new Star(random(windowWidth), random(windowHeight),
                         random(20));
    stars_[i].Show();
  }
}
