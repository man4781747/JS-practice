var Bullets = [];
function Ship(ShipX, ShipY, BulletClip) {
  this.ShipPosition = createVector(ShipX,ShipY);
  // this.ShipA = createVector(0,0);
  this.ShipA = 0;
  // this.ShipV = createVector(0.2,0.2);
  this.ShipV = 0;
  this.ShipMaxA = 0.1;
  this.ShipMaxV = 4;
  this.ShipFace = createVector(0,-1);
  this.ShipSize = 10;
  this.ShipRotateV = 0;
  this.ShipRotateMaxV = PI/20;
  this.ShipPoint = [];
  this.ReloadCheck = 10;
  this.ReloadCheckMax = 10;
  this.ShipSurvive = true;
  this.BulletClip = BulletClip;
}

Ship.prototype.Fire = function () {
  if (this.ReloadCheck == 10 && this.BulletClip.BulletStock >= 1) {
    this.ReloadCheck = 0;
    this.BulletClip.fire();
    Bullets[Bullets.length] = new Bullet(this.ShipPosition, this.ShipFace);
  }
}

Ship.prototype.Show = function () {
  push();
  fill(140,156,255);
  triangle(this.ShipPoint[0].x, this.ShipPoint[0].y,
           this.ShipPoint[1].x, this.ShipPoint[1].y,
           this.ShipPoint[2].x, this.ShipPoint[2].y);
  pop();
};

Ship.prototype.SpeedColorBar = function() {
  push();
  rectMode(CENTER);
  fill(255,255,255);
  rect(windowWidth/20, windowHeight/2, 50+20, windowHeight/2+20, 5);
  pop();
  push();
  rectMode(CENTER);
  fill(0,0,0);
  rect(windowWidth/20, windowHeight/2, 50, windowHeight/2);
  pop();

  push();
  rectMode(CORNER);
  if (this.ShipV > 0) {
    fill(255,0,0);
  } else {
    fill(0,0,255);
  }
  quad(windowWidth/20-25+3, windowHeight*3/4-3,
       windowWidth/20+25-3, windowHeight*3/4-3,
       windowWidth/20+25-3, windowHeight*3/4-3-(windowHeight/2-6)*abs(this.ShipV)/this.ShipMaxV,
       windowWidth/20-25+3, windowHeight*3/4-3-(windowHeight/2-6)*abs(this.ShipV)/this.ShipMaxV,
       );
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text(this.ShipV.toFixed(2), windowWidth/20, windowHeight/4-20);
  // rect(windowWidth*9/10-25+3, windowHeight/4+3, 50-3-3, windowHeight/2-3-3);
  pop();
}

Ship.prototype.Update= function() {
  this.ShipPoint[0] = createVector(this.ShipPosition.x+this.ShipFace.x*this.ShipSize,
                                   this.ShipPosition.y+this.ShipFace.y*this.ShipSize);
  this.ShipPoint[1] = createVector(this.ShipPosition.x+this.ShipFace.copy().rotate(PI*4/5).x*this.ShipSize,
                                   this.ShipPosition.y+this.ShipFace.copy().rotate(PI*4/5).y*this.ShipSize);
  this.ShipPoint[2] = createVector(this.ShipPosition.x+this.ShipFace.copy().rotate(-PI*4/5).x*this.ShipSize,
                                   this.ShipPosition.y+this.ShipFace.copy().rotate(-PI*4/5).y*this.ShipSize);

  if (abs(this.ShipA) > this.ShipMaxA) {
    if (this.ShipA > 0){
      this.ShipA = this.ShipMaxA;
    } else if (this.ShipA < 0) {
      this.ShipA = -this.ShipMaxA;
    }
  }

  this.ShipV += this.ShipA;
  if (abs(this.ShipV) > this.ShipMaxV) {
    if (this.ShipV > 0){
      this.ShipV = this.ShipMaxV;
    } else if (this.ShipV < 0) {
      this.ShipV = -this.ShipMaxV;
    }
  }
  // console.log(this.ShipA)
  this.ShipPosition.add(this.ShipFace.copy().setMag(this.ShipV));

  if (abs(this.ShipRotateV) > this.ShipRotateMaxV) {
    if (this.ShipRotateV < 0){
      this.ShipRotateV = -this.ShipRotateMaxV;
    } else if (this.ShipRotateV > 0) {
      this.ShipRotateV = this.ShipRotateMaxV;
    }
  }
  this.ShipFace.rotate(this.ShipRotateV);

  if (this.ShipRotateV > 0) {
    this.ShipRotateV -= PI/100;
  } else if (this.ShipRotateV < 0) {
    this.ShipRotateV += PI/100;
  }
  if (abs(this.ShipRotateV) < 0.005) {
    this.ShipRotateV = 0;
  }

  this.ReloadCheck += 1;
  if (this.ReloadCheck >= this.ReloadCheckMax) {
    this.ReloadCheck = this.ReloadCheckMax;
  }
  // 彈夾相關
  this.BulletClip.Update()

  // 超界判定
  if (this.ShipPosition.x < windowWidth/10 |
      this.ShipPosition.y < 0 |
      this.ShipPosition.x > windowWidth*9/10 |
      this.ShipPosition.y > windowHeight*5/6) {
        this.ShipSurvive = false;
      }
}
