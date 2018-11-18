function Player(StartPosition) {
  this.PlayerPosition = StartPosition;
  this.PlayerSize = 10;
  this.playerReloadTimeMax = 5;
  this.playerReloadTime = 5;
  this.BombHaveNum = 3;
}


Player.prototype.Show = function () {
  push();
  // console.log(this.PlayerPosition.x);
  image(Img_player, this.PlayerPosition.x, this.PlayerPosition.y)
  fill(255,0,0)
  ellipse(this.PlayerPosition.x, this.PlayerPosition.y, this.PlayerSize, this.PlayerSize)
  pop();
};

// Player.prototype. = function () {
//   push();
//   fill(255)
//   ellipse(this.Position.x, this.Position.y, this.PlayerSize, this.PlayerSize)
//   pop();
// };

function PlayerBullet(Player) {
  this.PlayerBulletPosition = Player.PlayerPosition.copy();
  this.PlayerBulletSurvive = true;
  this.PlayerBulletShapePoint = [
    new createVector(this.PlayerBulletPosition.x, this.PlayerBulletPosition.y+20),
    new createVector(this.PlayerBulletPosition.x, this.PlayerBulletPosition.y-20),
  ];
  this.HitPoint = 10;
}


PlayerBullet.prototype.Update = function() {
  if (this.PlayerBulletPosition.y < 0) {
    this.PlayerBulletSurvive = false;
    // noLoop()
  }
  for (let i=0;i<EnemyList.length;i++) {
    // console.log(CollisionDetectionBoxBox(this.PlayerBulletShapePoint,
    //     EnemyList[i].EnemyShapePoint,0));
    if (EnemyList[i].EnemyHurtable) {
      if (CollisionDetectionBoxBox(this.PlayerBulletShapePoint,
          EnemyList[i].EnemyShapePoint,0) == 1) {
            this.PlayerBulletSurvive = false;
            EnemyList[i].EnemyLife -= this.HitPoint;
            // console.log(EnemyList[i].EnemyLife);
          }
    }
  }
  this.PlayerBulletPosition.add(new createVector(0, -40));
  this.PlayerBulletShapePoint = [
    new createVector(this.PlayerBulletPosition.x, this.PlayerBulletPosition.y+20),
    new createVector(this.PlayerBulletPosition.x, this.PlayerBulletPosition.y-20),
  ];
  image(Img_playerBullet, this.PlayerBulletPosition.x, this.PlayerBulletPosition.y);

}
