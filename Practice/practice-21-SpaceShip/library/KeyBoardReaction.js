function keyReleased() {
  if (GameStatus == 'MainMenu') {
    if (keyCode == '13'){
      GameStatus = 'GameING';
    }
  } else if (GameStatus == 'GameOver') {
    if (keyCode == '13'){
      GameStatus = 'MainMenu';
      InitializationParameters();
    }
  }
}

function KeyBoard(Ship) {
  if (keyIsDown(LEFT_ARROW)) {
    Ship.ShipRotateV -= PI/50;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    Ship.ShipRotateV += PI/50;
  }
  if (keyIsDown(UP_ARROW)) {
    Ship.ShipA += 0.01;
  }
  if (keyIsDown(DOWN_ARROW)) {
    Ship.ShipA -= 0.01;
  }
  if (keyIsDown(32)) {
    Ship.Fire();
  }
}
