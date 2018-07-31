function AStarCell(x, y) {
  this.x = x;
  this.y = y;
  this.g = 0; // G 移動價值
  this.h = 0; // H 預估移動價值
  this.f = 0; // 總價值
  this.Type = 'Road';
  this.Magnification = 1;
  this.parent = null;
  this.neighbor = new Array(0);
}
