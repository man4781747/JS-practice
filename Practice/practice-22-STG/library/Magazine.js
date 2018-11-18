//
// 此文件設定子彈"組"的行為
//
function Magazine(MagazineType, StartPosition, Enemy=0) {
  // this.MagazineSurvive = true;
  if (MagazineType == 'test'){
    // 測試用彈群
    for (let i=0;i<10;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                   createVector(0, 1).rotate(i*2*PI/10),
                                   [[0,'test1'],
                                    [300,'LinearMotion'],
                                    [400,'test1']],
                                   [0,255,0]);
    }
  }

  if (MagazineType == 'Branch3'){
    // 測試用彈群
    for (let i=0;i<3;i++) {
      if (i != 1) {
        AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     Enemy.BulletV.copy().rotate(2*PI/30*(1-i)),
                                     [
                                      [0,'LinearMotion'],
                                      ],
                                     Img_Bullet_Blue);
      }
    }
  }

  if (MagazineType == 'Rain'){
    // 測試用彈群
    for (let i=0;i<3;i++) {
      if (i != 1) {
        AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     new createVector(0,-1).rotate(2*PI/20*(i-1)+2*PI/10*(Math.random()-0.5)),
                                     [
                                       // [0, 'ChangeSize', 5],
                                       [0,'Gravity'],
                                      ],
                                     Img_Bullet_Purple);
      }
    }
  }

  else if (MagazineType == 'test_2') {
    // 測試用彈群_2
    for (let i=0;i<10;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                   createVector(0, 1).rotate(i*2*PI/10),
                                   [[0,'Stop'],
                                    [300,'LinearMotion'],
                                    [400,'test1']],
                                   [0,0,255]);
    }
  }

  else if (MagazineType == 'TestMagazine') {
    for (let i=0;i<20;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                   createVector(0, 1).rotate((i-2)*2*PI/20),
                                   [[0, 'Stop'],
                                    [i*10,'LinearMotion'],
                                    [i*10+10,'Stop'],
                                    [i*10+20,'FaceToMouse'],
                                    [i*10+21,'LinearMotion']],
                                   Img_Bullet_Red);

    }
  }

  else if (MagazineType == 'BossTest_1'){
    let Num = 80;
    for (let i=0;i<Num;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     createVector(0, 1).rotate(2*PI/Num*i),
                                    [
                                      [0, 'ChangeSpeed', 10],
                                      [0,'AddSpeed', -8/10],
                                      [10, 'ChangeSpeed', 2],
                                      [10, 'LinearMotion']
                                    ],
                                    Img_Bullet_Red);

      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     createVector(0, 1).rotate(2*PI/Num*i),
                                    [
                                      [0+10, 'ChangeSpeed', 10],
                                      [0+10,'AddSpeed', -8/10],
                                      [10+10, 'ChangeSpeed', 2],
                                      [10+10, 'LinearMotion']
                                    ],
                                    Img_Bullet_Red);
      }

  }

  else if (MagazineType == 'BossTest_2'){
    for (let i=0;i<40;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     createVector(0, 1).rotate(2*PI/40*i),
                                    [
                                     [0, 'ChangeSpeed', 10],
                                     [1,'AddSpeed', -1],
                                     // [0, 'ChangeSpeed', 10],
                                     [10,'SlightRightTurn'],
                                    ],
                                    Img_Bullet_Yellow);
      }

  }

  else if (MagazineType == 'BossTest_3'){
    for (let i=0;i<40;i++) {
      AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                     createVector(0, 1).rotate(2*PI/40*i),
                                    [
                                      [0, 'ChangeSpeed', 10],
                                      [1,'AddSpeed', -1],
                                      [10,'SlightLeftTurn'],

                                    ],
                                    Img_Bullet_Yellow);
      }

  }

  else if (MagazineType == 'Sakura5'){
    for (let j=0;j<5;j++){
      for (let i=0;i<5;i++) {
        AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                       createVector(0, 1).rotate(2*PI/5*i+2*PI*Math.random()/2),
                                      [
                                       [Math.floor(Math.random() * 3),'LinearMotion'],
                                       // [200, 'Split_Sakura']
                                      ],
                                      Img_Bullet_Green);
        }
    }
  }

  else if (MagazineType == 'Sakura6'){
    for (let j=0;j<5;j++){
      for (let i=0;i<6;i++) {
        AllBullets[AllBullets.length] = new Bullet(StartPosition,
                                       createVector(0, 1).rotate(2*PI/6*i+2*PI*Math.random()/100),
                                      [
                                       [Math.floor(Math.random() * 3),'LinearMotion'],
                                      ],
                                      [0,255,255]);
        }
    }
  }

  else if (MagazineType == 'SakuraSeed') {
    for (let j=0;j<5;j++){
      AllBullets[AllBullets.length] = new Bullet(
                                     StartPosition.copy().add(new createVector(Math.random()*-100+50, Math.random()*-100+50)),
                                     createVector(0, 1).rotate(2*PI/6*j+2*PI*Math.random()/100),
                                    [
                                     [0,'Stop'],
                                     [50, 'Split_Sakura']
                                    ],
                                    Img_MagicBall_Aoi);
    }
  }

  else if (MagazineType == 'BigNarudoSeed'){
    let Radius = 5;     // 分支總數
    let BranchNum = 5;  // 單個分支球的數量
    let Interval = 50;   // 每顆球的距離
    for (let i=1;i<BranchNum;i++) {
      for (let j=0;j<Radius;j++){
        AllBullets[AllBullets.length] = new Bullet(
                                       StartPosition.copy().add(
  new createVector(i*Interval,0).rotate(2*PI/Radius*j+2*PI/(BranchNum-3)*i)
                                                                ),
                                       createVector(0, 1),
                                      [
                                       [i*5-i,'Stop'],
                                       [50+i*10-i, 'Split_Rain'],
                                      ],
                                      Img_MagicBall_Green);
      }
    }
  }

  else if ((typeof MagazineType) == 'number'){
    // 重設時間
    // console.log(Enemy);
    Enemy.EnemyFrameCount_Bullet = MagazineType;
  }

  else if (MagazineType == 'Narudo40'){
    for (let j=0;j<40;j++){
      AllBullets[AllBullets.length] = new Bullet(
                                     StartPosition,
                                     createVector(0, 1).rotate(2*PI/40*j),
                                    [
                                      [0, 'ChangeSpeed', 3],
                                      [0,'AddSpeed', -5/40],
                                      [40, 'Stop'],
                                      [50, 'ChangeSpeed', 3],
                                      // [50, 'RotateRight90'],
                                      [50, 'RotateFace', PI/2.],
                                      [50, 'LinearMotion']
                                    ],
                                    Img_Bullet_Yellow);
    }

    for (let j=0;j<40;j++){
      AllBullets[AllBullets.length] = new Bullet(
                                     StartPosition,
                                     createVector(0, 1).rotate(2*PI/40*j),
                                    [
                                      [0, 'ChangeSpeed', 3],
                                      [0,'AddSpeed', -7/40],
                                      [40, 'Stop'],
                                      [50, 'ChangeSpeed', 3],
                                      // [50, 'RotateRight90'],
                                      [50, 'RotateFace', PI/2.],
                                      [50, 'LinearMotion']
                                    ],
                                    Img_Bullet_Yellow);
    }
  }

  else if (MagazineType == 'Narudo30'){
    let NumOutside = 30;
    for (let j=0;j<NumOutside;j++){
      AllBullets[AllBullets.length] = new Bullet(
                                     StartPosition,
                                     createVector(0, 1).rotate(2*PI/NumOutside*j),
                                     [
                                      [0, 'ChangeSpeed', 3],
                                      [0,'AddSpeed', -3/40],
                                      [40, 'Stop'],
                                      [50, 'ChangeSpeed', 3],
                                      // [50, 'RotateRight90'],
                                      [50, 'RotateFace', PI/2.],
                                      [50, 'LinearMotion']
                                     ],
                                    Img_Bullet_Red);
    }

    let NumInside = 20
    for (let j=0;j<NumInside;j++){
      AllBullets[AllBullets.length] = new Bullet(
                                     StartPosition,
                                     createVector(0, 1).rotate(2*PI/NumInside*j),
                                    [
                                      [0, 'ChangeSpeed', 2],
                                      [0,'AddSpeed', -2/40],
                                      [40, 'Stop'],
                                      [50, 'ChangeSpeed', 2],
                                      [50, 'RotateFace', -PI/2.],
                                      [50, 'LinearMotion']
                                    ],
                                    Img_Bullet_Red);
    }
  }

  else if (MagazineType == 'Petal'){
    // let Center = Math.random()-0.5;
    let Center = 0
    if (Enemy.EnemyFrameCount_Total%10 == 0) {
      let i = Enemy.EnemyFrameCount_Total/10;
      // console.log('test')
      for (let j=0;j<6;j++) {
          AllBullets[AllBullets.length] = new Bullet(
                                         StartPosition.copy().add(new createVector(100*Center,0)),
                                         createVector(0, 1).rotate(2*PI/60*(j*10+(Math.sin(PI/50*i)*i/4))),
                                        [
                                         [0, 'ChangeSize', 30],
                                         [0,'ReturnIn100'],
                                         [99, 'ChangeColor', [200,0,0]],
                                         [100,'Split_Branch3'],
                                         // [i*5+101, 'ChangeColor', [0,200,0]],
                                         [102,'ReturnIn100'],
                                         [200, 'Split_Branch3'],
                                         [201, 'ChangeColor', [150,180,0]],
                                         [202,'ReturnIn100'],
                                        ],
                                        Img_MagicBall_Aoi);
      }
    }
    // }
  }

  else if (MagazineType == 'Arrow'){
    let Num = 20;
    let Motion = [
      [0, 'Stop'],
      [10, 'LinearMotion']
                  ];

    AllBullets[AllBullets.length] = new Bullet(
      (StartPosition.copy().add(Enemy.EnemyFace.copy().setMag(50))
                                               ),
                                   Enemy.EnemyFace,
                                   Motion,
                                  [189,85,34]);
    for (let i=1;i<Num;i++) {
      AllBullets[AllBullets.length] = new Bullet(
        (StartPosition.copy().add(Enemy.EnemyFace.copy().setMag(50)).add(
          Enemy.EnemyFace.copy().rotate(PI/6*5).setMag(10*i)
        )
                                                 ),
                                     Enemy.EnemyFace,
                                     Motion,
                                    [189,85,34]);
    }
    for (let i=1;i<Num;i++) {
      AllBullets[AllBullets.length] = new Bullet(
        (StartPosition.copy().add(Enemy.EnemyFace.copy().setMag(50)).add(
          Enemy.EnemyFace.copy().rotate(-PI/6*5).setMag(10*i)
        )
                                                 ),
                                     Enemy.EnemyFace,
                                     Motion,
                                    [189,85,34]);
  }
}

  else if (MagazineType == 'Star') {
    let StartSize = 200;
    let StarNum = 10;
    let RandomRotate = Math.random()*PI;
    for (let j=0;j<5;j++) {
      for (let i=0;i<StarNum;i++){
        let ToPositionVector = StartPosition.copy().add(
          createVector(1,0).rotate(2*PI/5*j+RandomRotate).setMag(0.31*StartSize)).add(
            createVector(1,0).rotate(2*PI/5*j+RandomRotate).rotate(PI/2).setMag(1.9*StartSize/StarNum*(i-(StarNum-1)/2))
          )
        // console.log(StartPosition.copy().add(ToPositionVector.copy().rotate(PI)).mag()/40);
        AllBullets[AllBullets.length] = new Bullet(
         StartPosition,
         createVector(0, 1),
        [
         // [0, 'ChangeSpeed',20],
         [0, 'ToPosition', [ToPositionVector, 40]],
         [0, 'LinearMotion'],
         [20,'AddSpeed', -StartPosition.copy().add(ToPositionVector.copy().rotate(PI)).mag()/2000],

         [60, 'Stop'],
         // [20, 'AddRotateFace', PI/1000],
         // [20, 'AddRotateFace', PI/2000],
        ],
        Img_Bullet_Red);
      }
    }

    for (let j=0;j<5;j++) {
      for (let i=0;i<StarNum;i++){
        AllBullets[AllBullets.length] = new Bullet(
         StartPosition,
         createVector(0, 1),
        [
         [0, 'ToPosition', [
           StartPosition.copy().add(
             createVector(1,0).rotate(2*PI/5*j+PI+RandomRotate).setMag(0.31*(StartSize*3/4))).add(
               createVector(1,0).rotate(2*PI/5*j+PI+RandomRotate).rotate(PI/2).setMag(1.9*(StartSize*3/4)/StarNum*(i-(StarNum-1)/2))
             ), 40
         ]],
         [0, 'LinearMotion'],
         [10,'Stop'],
         [20, 'ChangeSpeed', 2],
         [20, 'AddRotateFace', -PI/1000],
        ],
        Img_Bullet_Yellow);
      }
    }

  }

  else {
    AllBullets = AllBullets;
  }

}
