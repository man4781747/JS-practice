var ScreenHeight, ScreenWidth;
var Ship_;
var Meteorites = [];
var MeteoriteNum = 10;
var Life = 5;
var GameStatus = 'MainMenu';
var Score;
var testCount = 0;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  InitializationParameters();
}

function GameRun() {
  if (GameStatus == 'MainMenu') {
    background(0);
    push();
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text('測試\n按下ENTER開始', windowWidth/2, windowHeight/2);
    pop();

  } else if (GameStatus == 'GameING') {
    background(0);
    KeyBoard(Ship_);
    Ship_.Update();
    Ship_.Show();
    for (let i=0;i<Bullets.length;i++){
      Bullets[i].Update();
    }
    for (let i=0;i<Meteorites.length;i++){
      // Meteorites[i].MeteoriteXY = createVector(ScreenWidth/2, ScreenHeight/4)
      Meteorites[i].Update();
      Meteorites[i].Show();
    }

//
// 碰撞判定
//
    let PathGet;
    for (let l=0;l<Meteorites.length;l++) {
      // 得到隕石的分割後各個位置
      for (let j=0;j<Meteorites[l].PartSave.length;j++){
        PathGet = [];
        for (let k=0;k<Meteorites[l].PartSave[j].length;k++){
          PathGet[k] = Meteorites[l].FinalPosition[Meteorites[l].PartSave[j][k]];
        }
        // 隕石與子彈
        for (let i=0;i<Bullets.length;i++) {
          let FinalCheck = 0;
          if (CollisionDetectionBoxBox([Bullets[i].BulletPosition, Bullets[i].BulletPosition_],PathGet, 0) == 1){
            FinalCheck = 1;
          }
          // console.log(CollisionDetectionBoxBox([mousetestPV_1, mousetestPV_2],
          //                                       PathGet, 0));

          if (FinalCheck == 1){
            Meteorites[l].MeteoriteSurvive = false;
            Bullets[i].BulletSurvive = false;
            Score += 1;
            // Meteorites[0] = new Meteorite(ScreenWidth/2, ScreenHeight/2);
          }
        }
        // 隕石與船
        if (CollisionDetectionBoxBox(Ship_.ShipPoint,PathGet, 0) == 1){
          Ship_.ShipSurvive = false;
          Meteorites[l].MeteoriteSurvive = false;
        }
      }
    }


    for (let l=0;l<Meteorites.length;l++) {
      if (Meteorites[l].MeteoriteSurvive == false){
        Meteorites[l] = new Meteorite(windowWidth/2, windowHeight*5/12);
      }
    }

    if (Ship_.ShipSurvive == false) {
      Ship_ = new Ship(windowWidth/2, windowHeight*5/12, new BulletClip());
      Bullets = [];
      Life -= 1;
      if (Life == -1){
        GameStatus = 'GameOver';
      }
    }

    //  主畫面結束後 繪製副畫面
    //  副畫面遮罩與框架繪製
    push();
    fill(0);
    noStroke();
    rectMode(CORNER);
    rect(0,0,windowWidth/10,windowHeight);
    rect(windowWidth*9/10,0,windowWidth/10,windowHeight);
    rect(0,windowHeight*5/6,windowWidth,windowHeight/6);
    stroke(255);
    strokeWeight(4);
    line(windowWidth/10, 0, windowWidth/10, windowHeight);
    line(windowWidth*9/10, 0, windowWidth*9/10, windowHeight);
    line(windowWidth/10, windowHeight*5/6, windowWidth*9/10, windowHeight*5/6);
    pop();
    // 彈夾量條繪製
    Ship_.BulletClip.Show();
    // 速度條繪製
    Ship_.SpeedColorBar();
    // 生命剩餘量繪製
    push();
    noStroke();
    fill(0);
    quad(windowWidth*9/10, 0,
         windowWidth*9/10 - 10*(Life+1)-10, 0,
         windowWidth*9/10 - 10*(Life+1)-10, 25,
         windowWidth*9/10, 25);
    stroke(255);
    strokeWeight(4);
    line(windowWidth*9/10 - 10*(Life+1)-10, 0,
         windowWidth*9/10 - 10*(Life+1)-10, 25);
    line(windowWidth*9/10 - 10*(Life+1)-10, 25,
         windowWidth*9/10, 25);
    line(windowWidth*9/10, 25,
         windowWidth*9/10, 0)
    pop();
    for (let LifeNum=0;LifeNum<Life;LifeNum++){
      push();
      fill(140,156,255);
      triangle(windowWidth*9/10 - 10*(LifeNum+1)-5, 5,
               windowWidth*9/10 - 10*(LifeNum+1), 20,
               windowWidth*9/10 - 10*(LifeNum+1)-10, 20);
      pop();
      // 得分繪製
      push();
      textSize(20);
      fill(255);
      textAlign(LEFT);
      text('SCROE: ' + Score, windowWidth/10+10, 20);
      pop();
    }
    console.log(MeteoriteNum)
    if (testCount >= 120) {
      testCount = 0;
      Meteorites[MeteoriteNum] = new Meteorite(windowWidth/2, windowHeight*5/12);
      MeteoriteNum += 1;
    } else {
      testCount += 1;
    }

  } else if (GameStatus == 'GameOver') {
    background(0);
    push();
    textSize(80);
    fill(255);
    textAlign(CENTER);
    text('GameOver\n你的得分: '+Score+'\n按下ENTER重新開始', windowWidth/2, windowHeight/2);
    pop();
  }
}

function draw() {
  GameRun();
}
