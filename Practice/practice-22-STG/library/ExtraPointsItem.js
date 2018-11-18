function EctraPointsItem(Position, Type) {
  this.EctraPointsItemPosition = Position;
  this.EctraPointsItemSurvive = true;
  this.EctraPointsItemType = Type;
}

EctraPointsItem.prototype.Update = function() {
  let V_ = Players[0].PlayerPosition.copy().add(this.EctraPointsItemPosition.copy().rotate(PI));
  if (this.EctraPointsItemType == 'Bomb') {
    if (V_.mag() >= 30) {
      this.EctraPointsItemPosition.add(V_.setMag(V_.mag()/5));
      image(Img_EctraPointsItem, this.EctraPointsItemPosition.x, this.EctraPointsItemPosition.y)
    } else {
      this.EctraPointsItemSurvive = false;
    }
  } else if (this.EctraPointsItemType == 'Normal') {
    if (V_.mag() >= 60) {
      this.EctraPointsItemPosition.add(createVector(0,3));
      image(Img_EctraPointsItem, this.EctraPointsItemPosition.x, this.EctraPointsItemPosition.y)
    } else if (V_.mag() < 60 && V_.mag() >= 30) {
      this.EctraPointsItemPosition.add(V_.setMag(V_.mag()/5));
      image(Img_EctraPointsItem, this.EctraPointsItemPosition.x, this.EctraPointsItemPosition.y)
    } else {
      this.EctraPointsItemSurvive = false;
    }
  }
  if (this.EctraPointsItemPosition.y > GameHeight ) {
    this.EctraPointsItemSurvive = false;
  }
}
