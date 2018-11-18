// 敵人行為設計
// 依紀錄之 Behavior 來改變 Enemy 的參數
// Input:
//       1. Enemy: Enemy 物件
//       2. Behavior: String or Number
//       3. Input: 依 Behavior 不同有不同所需之 Input
function EnemyBehavior(Enemy, Behavior, Input=0) {

  // 令 Enemy 順時針轉 PI/100 弧度後移動位置
  if (Behavior == 'test1') {
    Enemy.EnemyV.rotate(PI/100);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  // 令 Enemy 停止不動
  else if (Behavior == 'Stop') {

  }

  // 令 Enemy 做直線等速運動
  else if (Behavior == 'LinearMotion') {
    // console.log(Enemy.EnemyV)
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'BossTest') {
    Enemy.EnemyV.rotate(PI/6);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'BossTest_2') {
    Enemy.EnemyV.rotate(-PI*2/3);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  // 令 Enemy 死亡
  else if (Behavior == 'Died') {
    Enemy.EnemySurvive = false;
  }

  // 令 Enemy 中記錄 Enemy 運動時間紀錄之參數重設為指定數值
  else if ((typeof Behavior) == 'number') {
    Enemy.EnemyFrameCount_Position = Behavior;
  }

  // 令 Enemy 的速度方向順時針旋轉 Input 弧度並移動
  else if (Behavior == 'RotateEnemyVFave') {
    Enemy.EnemyVFace.rotate(Input);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  // 令 Enemy 的速度量值訂為 Input
  else if (Behavior == 'ChangeVValue') {
    Enemy.EnemyVValue = Input;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  // 令 Enemy 的速度量值訂增加 Input
  else if (Behavior == 'AddVValue') {
    Enemy.EnemyVValue += Input;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
    Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  // 指定 Enemy 的速度量值訂為 Input
  else if (Behavior == 'SetVValue') {
    Enemy.EnemyVValue = Input;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  // 指定 Enemy 的速度方向訂為 Input
  else if (Behavior == 'SetVFace') {
    Enemy.EnemyVFace = new createVector(Input[0], Input[1]);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
    // console.log(Enemy.EnemyV)
  }

  // 指定 Enemy 的速度方向訂為 Input
  else if (Behavior == 'RandomVFace') {
    Enemy.EnemyVFace.rotate(Math.random()*2*PI);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  // 指定 Enemy 的速度方向訂為 Input
  else if (Behavior == 'RandomVValue') {
    Enemy.EnemyVValue = Math.random()*Input;
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
  }

  //
  else if (Behavior == 'ToPosition') {
    let ToDestination = new createVector(Input[0], Input[1]).add(
      Enemy.EnemyPosition.copy().rotate(PI)
    )
    Enemy.EnemyVValue = ToDestination.mag()/Input[2];
    Enemy.EnemyVFace = ToDestination.setMag(1);
    Enemy.EnemyV = Enemy.EnemyVFace.copy().setMag(Enemy.EnemyVValue);
    // Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'SetHP') {
    Enemy.EnemyLife = Input;
    // Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'AddHP') {
    Enemy.EnemyLife += Input;
    // Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'HurtableSet') {
    Enemy.EnemyHurtable = Input;
    // Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'EnemyScreenLockSet') {
    Enemy.EnemyScreenLock = Input;
    // Enemy.EnemyPosition.add(Enemy.EnemyV);
  }

  else if (Behavior == 'KillAllBullets') {
    for (let i=0;i<AllBullets.length;i++){
      AllBullets[i].BulletSurvive =false;
      EctraPointsItemList[EctraPointsItemList.length] = new EctraPointsItem(AllBullets[i].BulletPosition, 'Bomb');
    }
  }

  else if (Behavior == 'MagazineListSet') {
    Enemy.MagazineList = Input;
  }
  // else if (Behavior == 'DiedAndSpawn'){
  //   if (Enemy.EnemySurvive == false) {
  //   }
  // }

}
