var EctraPointsItemList = [];

function Bomb(BombType, Player) {
  this.BombSurvive = true;
  this.BombType = BombType;
  this.BombFrameCount = 0;

}

Bomb.prototype.Update = function () {
  if (this.BombType == 'BigCircle') {
    if (this.BombFrameCount <= 40) {
      let CircleCenter = Players[0].PlayerPosition;
      let BombR = this.BombFrameCount*this.BombFrameCount;
      push();
      noFill();
      // fill(255);
      stroke(255);
      strokeWeight(10);
      ellipse(CircleCenter.x, CircleCenter.y, BombR,BombR);
      pop();
      for (let i=0;i<AllBullets.length;i++){
        if (Players[0].PlayerPosition.copy().add(
                           AllBullets[i].BulletPosition.copy().rotate(PI)
                         ).mag()<=(AllBullets[i].BulletSize+BombR)/2) {
                           AllBullets[i].BulletSurvive =false;
                           EctraPointsItemList[EctraPointsItemList.length] = new EctraPointsItem(AllBullets[i].BulletPosition, 'Normal');
                         }
      }
    } else {
      this.BombSurvive = false;
    }
  }

  if (this.BombType == 'Shell') {
    if (this.BombFrameCount <= 180) {
      let CircleCenter = Players[0].PlayerPosition;
      let BombR = 200;
      push();
      noFill();
      // fill(255);
      stroke(255);
      strokeWeight(10);
      ellipse(CircleCenter.x, CircleCenter.y, BombR,BombR);
      pop();
      for (let i=0;i<AllBullets.length;i++){
        if (Players[0].PlayerPosition.copy().add(
                           AllBullets[i].BulletPosition.copy().rotate(PI)
                         ).mag()<=(AllBullets[i].BulletSize+BombR)/2) {
                           Song_BubbleSound.play();
                           AllBullets[i].BulletSurvive =false;
                           EctraPointsItemList[EctraPointsItemList.length] = new EctraPointsItem(AllBullets[i].BulletPosition, 'Bomb');
                         }
      }


    } else {
      this.BombSurvive = false;
    }
  }

  this.BombFrameCount += 1;
};
