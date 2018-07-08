function Star(x, y, s) {
  this.StarX = x;
  this.StarY = y;
  this.StarS = s;
  this.StarR = random(255);
  this.StarG = random(255);
  this.StarB = random(255);
}

Star.prototype.Show = function () {
  fill(this.StarR, this.StarG, this.StarB);
  ellipse(this.StarX, this.StarY, this.StarS, this.StarS);
  //this.StarX = this.StarX + 1;
};
