var Img_Bullet_Aoi, Img_Bullet_Blue, Img_Bullet_Green, Img_Bullet_Purple, Img_Bullet_Red, Img_Bullet_Yellow
var Img_MagicBall_Aoi, Img_MagicBall_Green;
var Img_EctraPointsItem;
var Img_player, Img_playerBullet, Img_BombStar, Img_PlayerLife;
var Img_Boss;
function LoadAllImage() {
  let test = "picture/Bullet_S_Red.png";
  console.log(test);
  Img_Bullet_Aoi = loadImage("picture/Bullet_S_Aoi.png");
  Img_Bullet_Blue = loadImage("picture/Bullet_S_Blue.png");
  Img_Bullet_Green = loadImage("picture/Bullet_S_Green.png");
  Img_Bullet_Purple = loadImage("picture/Bullet_S_Purple.png");
  Img_Bullet_Red = loadImage(test);
  Img_Bullet_Yellow = loadImage("picture/Bullet_S_Yellow.png");
  Img_EctraPointsItem = loadImage("picture/EctraPointsItem.png");
  Img_player = loadImage("picture/Player.png");
  Img_Boss = loadImage("picture/Boss.png");
  Img_playerBullet = loadImage("picture/playerBullet.png");
  Img_MagicBall_Aoi = loadImage("picture/MagicBall_Aoi.png");
  Img_MagicBall_Green = loadImage("picture/MagicBall_Green.png");
  Img_BombStar = loadImage("picture/BombStar.png");
  Img_PlayerLife = loadImage("picture/PlayerLife.png");
}
