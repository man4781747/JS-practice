function Tower(Position, Type) {
  this.Position = Position;
  this.TowerType = Type;
  this.AttackRange = 100;

}

Tower.prototype.Show = function () {
  push();
  fill(255);
  ellipse(this.Position.x, this.Position.y, 20, 20)
  pop();
};
