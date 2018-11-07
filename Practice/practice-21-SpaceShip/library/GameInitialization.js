function InitializationParameters(){
  Score = 0;
  Meteorites = [];
  MeteoriteNum = 10;
  Life = 5;
  Ship_ = new Ship(windowWidth/2, windowHeight*5/12, new BulletClip());
  for (let i=0;i<MeteoriteNum;i++){
    Meteorites[i] = new Meteorite(windowWidth/2, windowHeight*5/12);
  };
}
