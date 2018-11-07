function Meteorite(x, y) {
  this.MeteoritePosition = createVector(600,0).rotate(Math.random()*2*PI);
  this.MeteoriteCenter = createVector(x,y);
  this.MeteoriteXY = this.MeteoriteCenter.copy().add(this.MeteoritePosition);
  // this.MeteoriteX = x+this.MeteoritePosition.x;
  // this.MeteoriteY = y+this.MeteoritePosition.y;
  this.MeteoriteV = this.MeteoritePosition.copy().rotate(PI+Math.random()*PI/2-PI/4).setMag(random()*2+1);
  this.MeteoriteSize = Math.random()*20 + 5;
  this.MeteoriteShape = Math.floor((Math.random() * 10) + 3);
  this.MeteoritePoint = [];
  this.MeteoriteAngle = 0;
  this.MeteoriteSurvive = true;
  this.MeteoriteAngularVelocity = PI/100 *(Math.random()*2-1);
  for (let i=0 ;i<this.MeteoriteShape;i++){
    let angtest = (i*PI*2/this.MeteoriteShape)+Math.random()*0.1-0.05;
    this.MeteoritePoint[i] = createVector(
      this.MeteoriteSize*(Math.random()*2+0.5)*Math.cos(angtest),
      this.MeteoriteSize*(Math.random()*2+0.5)*Math.sin(angtest)
    );
  }
//
// 分割凹多邊形並分成好幾塊凸多邊形
//
  this.PartSave = [];
  let IndexSave = [];
  for (let i=0;i<this.MeteoritePoint.length;i++){
    IndexSave[i] = i;
  }
  for (let i=0;i<IndexSave.length;i++){
    var PointChose_1 = i;
    if (i+1 >= IndexSave.length) {
      var PointChose_2 = i+1-IndexSave.length;
    } else {
      var PointChose_2 = i+1;
    }

    if (i+2 >= IndexSave.length) {
      var PointChose_3 = i+2-IndexSave.length;
    } else {
      var PointChose_3 = i+2;
    }

    let VectorPoint12 = this.MeteoritePoint[IndexSave[PointChose_1]].copy().add(this.MeteoritePoint[IndexSave[PointChose_2]].copy().rotate(PI));
    let VectorPoint23 = this.MeteoritePoint[IndexSave[PointChose_2]].copy().add(this.MeteoritePoint[IndexSave[PointChose_3]].copy().rotate(PI));
    let CrossValue = p5.Vector.cross(VectorPoint12, VectorPoint23).z;
    if (CrossValue <= 0) {
      if (i+3 >= IndexSave.length) {
        var PointChose_4 = i+3-IndexSave.length;
      } else {
        var PointChose_4 = i+3;
      }
      let VectorPoint34 = this.MeteoritePoint[IndexSave[PointChose_3]].copy().add(this.MeteoritePoint[IndexSave[PointChose_4]].copy().rotate(PI));
      let CrossValue_2 = p5.Vector.cross(VectorPoint23, VectorPoint34).z;
      if (CrossValue_2 >= 0){
        i = 0;
        this.PartSave[this.PartSave.length] = [IndexSave[PointChose_2],IndexSave[PointChose_3],IndexSave[PointChose_4]];
        IndexSave.splice(PointChose_3, 1);
      }
    }
  }
  this.PartSave[this.PartSave.length] = IndexSave;

  // console.log(this.PartSave);
}

Meteorite.prototype.Show = function () {
    beginShape();
    fill(255);

    // console.log('test');
    for (let i=0;i<this.MeteoritePoint.length;i++){
      // console.log(this.MeteoriteX+this.MeteoritePoint[i].x);
      // ellipse(this.MeteoriteX+this.MeteoritePoint[i].x,
      //        this.MeteoriteY+this.MeteoritePoint[i].y,10,10);
      vertex(this.MeteoriteXY.x+this.MeteoritePoint[i].x,
             this.MeteoriteXY.y+this.MeteoritePoint[i].y);
    };
    endShape(CLOSE);

    // for (let j=0;j<this.PartSave.length;j++) {
    //   beginShape();
    //   fill(255/(j+5),250,40);
    //   for (let k=0;k<this.PartSave[j].length;k++){
    //       vertex(this.MeteoriteXY.x+this.MeteoritePoint[this.PartSave[j][k]].x,
    //              this.MeteoriteXY.y+this.MeteoritePoint[this.PartSave[j][k]].y);
    //   }
    //   endShape(CLOSE);
    // }
};


Meteorite.prototype.Update = function() {
  for (let i=0;i<this.MeteoritePoint.length;i++){
    this.MeteoritePoint[i].rotate(this.MeteoriteAngularVelocity);
  }
  this.MeteoriteXY.add(this.MeteoriteV);
  // console.log(this.MeteoriteSurvive);
  if (this.MeteoriteXY.copy().add(this.MeteoriteCenter.copy().rotate(PI)).mag() > 601) {
    this.MeteoriteSurvive = false;
  }
  this.FinalPosition = [];
  for (let i=0;i<this.MeteoritePoint.length;i++){
    this.FinalPosition[i] = createVector(this.MeteoriteXY.x+this.MeteoritePoint[i].x,
                                         this.MeteoriteXY.y+this.MeteoritePoint[i].y);
  }
  // console.log(this.FinalPosition)
  // console.log(this.MeteoriteXY.copy().add(this.MeteoriteCenter.copy().rotate(PI)).mag());
  // this.MeteoriteX += this.MeteoriteV.x;
  // this.MeteoriteY += this.MeteoriteV.y;
}

// Meteorite.prototype.IfConcavePolygon = function() {
//   this.PartSave = [];
//   let IndexSave = [];
//   for (let i=0;i<this.MeteoritePoint.length;i++){
//     IndexSave[i] = i;
//   }
//   for (let i=0;i<IndexSave.length;i++){
//     var PointChose_1 = i;
//     if (i+1 >= IndexSave.length) {
//       var PointChose_2 = i+1-IndexSave.length;
//     } else {
//       var PointChose_2 = i+1;
//     }
//
//     if (i+2 >= IndexSave.length) {
//       var PointChose_3 = i+2-IndexSave.length;
//     } else {
//       var PointChose_3 = i+2;
//     }
//
//     let VectorPoint12 = this.MeteoritePoint[IndexSave[PointChose_1]].copy().add(this.MeteoritePoint[IndexSave[PointChose_2]].copy().rotate(PI));
//     let VectorPoint23 = this.MeteoritePoint[IndexSave[PointChose_2]].copy().add(this.MeteoritePoint[IndexSave[PointChose_3]].copy().rotate(PI));
//     let CrossValue = p5.Vector.cross(VectorPoint12, VectorPoint23).z;
//     if (CrossValue <= 0) {
//       if (i+3 >= IndexSave.length) {
//         var PointChose_4 = i+3-IndexSave.length;
//       } else {
//         var PointChose_4 = i+3;
//       }
//       let VectorPoint34 = this.MeteoritePoint[IndexSave[PointChose_3]].copy().add(this.MeteoritePoint[IndexSave[PointChose_4]].copy().rotate(PI));
//       let CrossValue_2 = p5.Vector.cross(VectorPoint23, VectorPoint34).z;
//       if (CrossValue_2 >= 0){
//         i = 0;
//         this.PartSave[this.PartSave.length] = [IndexSave[PointChose_2],IndexSave[PointChose_3],IndexSave[PointChose_4]];
//         IndexSave.splice(PointChose_3, 1);
//       }
//     }
//   }
//   this.PartSave[this.PartSave.length] = IndexSave;
//
//
//
//
// }
