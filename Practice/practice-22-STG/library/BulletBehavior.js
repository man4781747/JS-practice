function BulletBehavior(Bullet, Behavior, Input=0) {
  // 次適用單顆子彈行為
  if (Behavior == 'ChangeColor') {
    Bullet.BulletColor = Input;
  }

  if (Behavior == 'ChangeSize') {
    Bullet.BulletSize = Input;
  }

  if (Behavior == 'ChangeSpeed') {
    // console.log(Input);
    Bullet.BulletVValue = Input;
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
    // Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
  }


  if (Behavior == 'AddSpeed') {
    // console.log(Bullet.BulletV.mag() + Input);
    Bullet.BulletVValue += Input;
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
    // Bullet.BulletV.setMag(Bullet.BulletV.mag() + Input);
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
  }

  if (Behavior == 'RotateFace') {
    // console.log(Bullet.BulletVFace.copy());
    Bullet.BulletVFace = Bullet.BulletVFace.copy().rotate(Input);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  if (Behavior == 'AddRotateFace') {
    // console.log(Bullet.BulletVFace.copy());
    Bullet.BulletVFace = Bullet.BulletVFace.copy().rotate(Input);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV);
  }

  if (Behavior == 'test1') {
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
    Bullet.BulletV.rotate(PI/200);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));
  }

  else if (Behavior == 'LinearMotion') {
    // 單顆子彈直線等速運動
    Bullet.BulletPosition.add(Bullet.BulletV);
  }

  else if (Behavior == 'Stop') {
    // 單顆子彈停止運動

  }

  else if (Behavior == 'TestBullet'){
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
    Bullet.BulletV.rotate(-PI/200);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));
  }

  else if (Behavior == 'FaceToMouse') {
    Bullet.BulletVFace = createVector(mouseX-Bullet.BulletPosition.x,
                                      mouseY-Bullet.BulletPosition.y).setMag(1);
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  else if (Behavior == 'SlightRightTurn') {
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
    Bullet.BulletV.rotate(PI/800);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.001));
    // console.log(Bullet.BulletV);
  }

  else if (Behavior == 'SlightLeftTurn') {
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV)
    Bullet.BulletV.rotate(-PI/800);
    Bullet.BulletV.add(Bullet.BulletV.copy().setMag(0.0001));
    // console.log(Bullet.BulletV);
  }

  else if (Behavior == 'Died') {
    Bullet.BulletSurvive = false;
  }

  else if (Behavior == 'Split_Sakura'){
    Bullet.BulletSurvive = false;
    Magazine('Sakura5', Bullet.BulletPosition, Bullet);
  }

  else if (Behavior == 'Split_Sakura'){
    Bullet.BulletSurvive = false;
    Magazine('Sakura5', Bullet.BulletPosition);
  }

  else if (Behavior == 'Split_Rain'){
    Bullet.BulletSurvive = false;
    Magazine('Rain', Bullet.BulletPosition);
  }

  else if (Behavior == 'RotateRight90'){
    Bullet.BulletV.rotate(PI/2);
  }

  else if (Behavior == 'RotateLeft90'){
    Bullet.BulletV.rotate(-PI/2);
  }

  else if (Behavior == 'ReturnIn100'){
    if (Bullet.BulletA == 0) {
      Bullet.BulletA = Bullet.BulletV.copy().setMag(3/100).rotate(PI);
    }
    Bullet.BulletV.add(Bullet.BulletA);
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV);
  }

  else if (Behavior == 'Split_Branch3'){
    // Bullet.BulletSurvive = false;
    Magazine('Branch3', Bullet.BulletPosition, Bullet);
  }

  else if (Behavior == 'Gravity'){
    // Bullet.BulletSurvive = false;
    Bullet.BulletV.add(new createVector(0,0.1));
    if (Bullet.BulletV.mag()>3) {
      Bullet.BulletV.setMag(3);
    }
    Bullet.BulletPosition = Bullet.BulletPosition.copy().add(Bullet.BulletV);
  }

  else if (Behavior == 'ToPosition') {
    Bullet.BulletVFace = createVector(Input[0].x-Bullet.BulletPosition.x,
                                      Input[0].y-Bullet.BulletPosition.y);
    Bullet.BulletVValue = Bullet.BulletVFace.mag()/Input[1];
    Bullet.BulletVFace = createVector(Input[0].x-Bullet.BulletPosition.x,
                                      Input[0].y-Bullet.BulletPosition.y).setMag(1)
    Bullet.BulletV = Bullet.BulletVFace.copy().setMag(Bullet.BulletVValue);
  }

  else {

  }
}
