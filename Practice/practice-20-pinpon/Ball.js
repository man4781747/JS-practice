function Ball(BallX, BallY) {
  this.BallX = BallX;
  this.BallX_ = BallX;
  this.BallY = BallY;
  this.BallY_ = BallY;
  this.BallR = 10;
  this.Vx = 10;
  this.Vy = -10;

}

Ball.prototype.Show = function() {
  ellipse(this.BallX, this.BallY, this.BallR, this.BallR);
}

Ball.prototype.Move = function(ScreenHeight, ScreenWidth) {
  this.BallX_ = this.BallX;
  this.BallY_ = this.BallY;
  this.BallX += this.Vx;
  this.BallY += this.Vy;
  stroke(255);
  line(this.BallX, this.BallY,this.BallX_, this.BallY_);
  // ellipse(this.BallX, this.BallY, this.BallR, this.BallR);
  if (this.BallX - this.BallR/2 < 0) {
    this.BallX = this.BallR/2 - this.BallX;
    this.BallX_ = this.BallR/2 - this.BallX_;
    this.Vx = -this.Vx;
  } else if (this.BallX + this.BallR/2 > ScreenWidth) {
    this.BallX = 2*(ScreenWidth-this.BallR/2)-this.BallX;
    this.BallX_ = 2*(ScreenWidth-this.BallR/2)-this.BallX_;
    this.Vx = -this.Vx;
  }

  if (this.BallY - this.BallR/2 < 0) {
    this.BallY = this.BallR/2 - this.BallY;
    this.BallY_ = this.BallR/2 - this.BallY_;
    // this.BallY = this.BallR;
    this.Vy = -this.Vy;
  } else if (this.BallY + this.BallR/2 > ScreenHeight) {
    this.BallY = 2*(ScreenHeight-this.BallR/2)-this.BallY;
    this.BallY_ = 2*(ScreenHeight-this.BallR/2)-this.BallY_;
    this.Vy = -this.Vy;
  }
}

Ball.prototype.HitBox_Table = function(Table) {
  // console.log(
  //   (this.BallY < (Table.TableY + Table.TableHeight) &
  //    this.BallY > (Table.TableY - Table.TableHeight))
  // );
  if (
    (this.BallX < (Table.TableX + Table.TableWidth) &
     this.BallX > (Table.TableX - Table.TableWidth)) &
    (this.BallY > (Table.TableY + Table.TableHeight) &
     this.BallY < (Table.TableY - Table.TableHeight))
   ) {
     console.log('test');
     this.Vy = -this.Vy;
   }
}
