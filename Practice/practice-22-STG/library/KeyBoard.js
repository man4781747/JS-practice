var DecisionPointShow = false;
var PlayerSpeedMagnification = 3;

function keyPressed() {
  // R
  if (keyCode == '82'){
    if (Players[0].BombHaveNum > 0) {
      ShakeStartNum = GameFrameCount+30;
      BombList[BombList.length] = new Bomb('BigCircle', Players[0]);
      Players[0].BombHaveNum -= 1;
    }
  }
  // Q
  if (keyCode == '81'){
    PlayerSpeedMagnification = 1;
  }
  // W
  if (keyCode == '87'){
    PlayerSpeedMagnification = 5;
  }
  // E
  if (keyCode == '69'){
    PlayerSpeedMagnification = 10;
  }
  // A
  if (keyCode == '65'){
    if (DecisionPointShow) {
      DecisionPointShow = false;
    } else {
      DecisionPointShow = true;
    }
  }

  // Space
  if (keyCode == '32'){
    if (GameType == 'GameIng') {
      GameType = 'GameStop';
    } else {
      GameType = 'GameIng';
    }
  }

  //ENTER
  if (keyCode == '13'){
    if (GameType == 'Title') {
      GameType = 'GameIng';
      ReStartGame();
    } else if ('GameOver') {
      GameType = 'GameIng';
      ReStartGame();
    }
  }
}

function KeyBoard(Player) {
  if (keyIsDown(LEFT_ARROW)) {
    if (Player.PlayerPosition.x > 5){
      Player.PlayerPosition.x -= PlayerSpeedMagnification;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (Player.PlayerPosition.x < GameWidth-5){
      Player.PlayerPosition.x += PlayerSpeedMagnification;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (Player.PlayerPosition.y > 5){
      Player.PlayerPosition.y -= PlayerSpeedMagnification;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (Player.PlayerPosition.y < GameHeight-5){
      Player.PlayerPosition.y += PlayerSpeedMagnification;
    }
  }

  // if (keyIsDown(32)) {
  //   if (Players[0].playerReloadTime == Players[0].playerReloadTimeMax) {
  //     PlayerBulletList[PlayerBulletList.length] = new PlayerBullet(Players[0]);
  //     Players[0].playerReloadTime = 0;
  //   } else {
  //     Players[0].playerReloadTime +=1;
  //   }
  // }
}
