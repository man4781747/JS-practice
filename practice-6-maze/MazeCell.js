function MazeCell(y, x) {
  this.x = x;
  this.y = y;
  this.neighbor = new Array(0);
  this.Type = 'Wall';
}
