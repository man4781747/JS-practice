function Bullet(BulletStartPosition, BulletStartFace, BulletBehaviorList, BulletImage) {
  this.BulletPosition = BulletStartPosition.copy();
  this.BulletVFace = BulletStartFace.copy().setMag(1);
  this.BulletVValue = 3;
  this.BulletV = this.BulletVFace.copy().setMag(this.BulletVValue);
  this.BulletA = 0;
  this.BulletSurvive = true;
  this.BulletFrameCount = 0;
  this.BulletBehaviorList = BulletBehaviorList;
  // this.BulletColor = BulletImage;
  this.BulletShow = false;
  this.BulletSize = 10;
  this.BulletImage = BulletImage;
};

Bullet.prototype.Show = function () {
  TotalBulletCount += 1;
  if (this.BulletShow) {
    push();
    translate(this.BulletPosition.x, this.BulletPosition.y);
    rotate(this.BulletVFace.heading()-PI/2);
    image(this.BulletImage, 0, 0);
    pop();
    if (DecisionPointShow) {
      push();
      noStroke();
      fill(255,0,0);
      ellipse(this.BulletPosition.x, this.BulletPosition.y, this.BulletSize, this.BulletSize);
      pop();
    }
  }
};

Bullet.prototype.Update = function () {

  if (BehaviorChose(this, this.BulletFrameCount)) {
    // console.log('test')
    BulletBehavior(this, this.BulletBehavior, this.BulletBehaviorInput);
  }

  this.SurviveCheck();
  this.BulletFrameCount += 1;
};

Bullet.prototype.SurviveCheck = function() {
  if (this.BulletPosition.x < -GameWidth |
      this.BulletPosition.y < -GameHeight |
      this.BulletPosition.x > GameWidth*2 |
      this.BulletPosition.y > GameHeight*2) {
        this.BulletSurvive = false;
      }
};


// Bullet.prototype.SurviveCheck = function() {
//   if (this.BulletPosition.x < -GameWidth/2 |
//       this.BulletPosition.y < -GameHeight/2 |
//       this.BulletPosition.x > GameWidth*3/2 |
//       this.BulletPosition.y > GameHeight*3/2) {
//         this.BulletSurvive = false;
//       }
// };

function BehaviorChose(Bullet, FrameCount) {
  // console.log(Behavior);
  // console.log(FrameCount);
  let IfNoUpdate = true;
  for (let i=0;i<Bullet.BulletBehaviorList.length;i++) {
    if (FrameCount == Bullet.BulletBehaviorList[i][0]){
      IfNoUpdate = false;
      Bullet.BulletShow = true;
      Bullet.BulletBehavior = Bullet.BulletBehaviorList[i][1];
      Bullet.BulletBehaviorInput = Bullet.BulletBehaviorList[i][2];
      BulletBehavior(Bullet, Bullet.BulletBehavior, Bullet.BulletBehaviorInput);
      // console.log(Bullet.BulletBehavior);
    }
  }
  return IfNoUpdate;
}
