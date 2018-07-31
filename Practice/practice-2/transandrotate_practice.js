function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(RADIUS);
  //background(0);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(10);
  translate(windowWidth/2., windowHeight/2.);
  rotate(frameCount / 200.0);  // 自轉
  fill(255, 255, 0);
  rect(0, 0, 50, 50);

  for (i = 1;i<4;i++) {
    push();
    rotate(frameCount/i/ 40.0);  // 公轉
    translate(windowWidth/i/8., windowHeight*i/8.);
    rotate(frameCount/i / 25.0); // 自轉
    fill(255, 0, 0);
    rect(0, 0, 10, 10);

    push();
    strokeWeight(1);
    rotate(frameCount/ 40.0);  // 公轉
    translate(windowWidth/32., windowHeight/32.); // 離行星距離
    rotate(frameCount/ 25.0);  // 自轉
    fill(255, 125, 0);
    ellipse(0, 0, 5, 5);
    //rect(0, 0, 5, 5);
    pop();

    push();
    strokeWeight(1);
    rotate(-frameCount/ 20.0);  // 公轉
    translate(windowWidth/20., windowHeight/20.); // 離行星距離
    rotate(frameCount/ 25.0);  // 自轉
    fill(125, 255, 0);
    ellipse(0, 0, 5, 5);
    //rect(0, 0, 5, 5);
    pop();
    pop();
  }
}
