function Table(ScreenHeight, ScreenWidth) {
  this.TableX = ScreenWidth/2;
  this.TableY = ScreenHeight*9.5/10;
  this.TableWidth = ScreenWidth/10;
  this.TableHeight = ScreenWidth/200;
}

Table.prototype.Show = function() {
  rectMode(RADIUS);
  rect(this.TableX, this.TableY, this.TableWidth, this.TableHeight);
}

Table.prototype.Move = function(XMove) {
  this.TableX += XMove;
  if (this.TableX - this.TableWidth < 0) {
    this.TableX = this.TableWidth;
  } else if (this.TableX + this.TableWidth > this.TableWidth*10) {
    this.TableX = this.TableWidth*10 - this.TableWidth;
  }
}
