function BulletClip() {
  this.BulletStockMax = 10;
  this.BulletStock = 10;
  this.RecoveryRate = 0.05;
}

BulletClip.prototype.fire = function() {
  if (this.BulletStock >= 1) {
    this.BulletStock -= 1;
  }
}

BulletClip.prototype.Update = function() {
  if (this.BulletStock < this.BulletStockMax) {
    this.BulletStock += this.RecoveryRate;
  }
  // this.Show();
}

BulletClip.prototype.Show = function() {
  push();
  rectMode(CENTER);
  fill(255,255,255);
  rect(windowWidth*19/20, windowHeight/2, 50+20, windowHeight/2+20, 5);
  pop();
  push();
  rectMode(CENTER);
  fill(0,0,0);
  rect(windowWidth*19/20, windowHeight/2, 50, windowHeight/2);
  pop();
  push();
  rectMode(CORNER);
  fill(255,255,255);
  quad(windowWidth*19/20-25+3, windowHeight*3/4-3,
       windowWidth*19/20+25-3, windowHeight*3/4-3,
       windowWidth*19/20+25-3, windowHeight*3/4-3-(windowHeight/2-6)*this.BulletStock/this.BulletStockMax,
       windowWidth*19/20-25+3, windowHeight*3/4-3-(windowHeight/2-6)*this.BulletStock/this.BulletStockMax,
       );
  // rect(windowWidth*9/10-25+3, windowHeight/4+3, 50-3-3, windowHeight/2-3-3);
  pop();
  push();
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text(this.BulletStock.toFixed(0) + '/' + this.BulletStockMax , windowWidth*19/20, windowHeight/4-20);
  // rect(windowWidth*9/10-25+3, windowHeight/4+3, 50-3-3, windowHeight/2-3-3);
  pop();
}

function Bullet(ShipPosition, ShipFace) {
  this.BulletPosition = ShipPosition.copy();
  this.BulletV = ShipFace.copy().setMag(10);
  this.BulletPosition_ = this.BulletPosition.copy();
  this.BulletSurvive = true;
};

Bullet.prototype.Show = function () {
  stroke(255,0,0);
  strokeWeight(3);
  // ellipse(this.BulletPosition.x_ , this.BulletPosition.y_,1,1)
  line(this.BulletPosition.x , this.BulletPosition.y ,
       this.BulletPosition_.x, this.BulletPosition_.y)
};

Bullet.prototype.Update = function () {
  this.BulletPosition_ = this.BulletPosition.copy();
  this.BulletPosition.add(this.BulletV);
  if (this.BulletPosition.x < windowWidth/10 |
      this.BulletPosition.y < 0 |
      this.BulletPosition.x > windowWidth*9/10 |
      this.BulletPosition.y > windowHeight*5/6) {
        this.BulletSurvive = false;
      }

  // console.log(this.BulletDied);
  let Bullets_ = [];
  for (let i=0;i<Bullets.length;i++){
    if (Bullets[i].BulletSurvive) {
      Bullets_[Bullets_.length] = Bullets[i];
    }
  }
  Bullets = Bullets_;
  push();
  stroke(255,0,0);
  strokeWeight(3);
  // ellipse(this.BulletPosition.x_ , this.BulletPosition.y_,1,1)
  line(this.BulletPosition.x , this.BulletPosition.y ,
       this.BulletPosition_.x, this.BulletPosition_.y)
  pop();
};

Bullet.prototype.DiedCheck = function (Bullets) {
  let Bullets_ = [];
  for (let i=0;i<Bullets.length;i++){
    if (Bullets[i].BulletSurvive) {
      Bullets_[Bullets_.length] = Bullets[i];
    }
  }
  Bullets = Bullets_;
}
