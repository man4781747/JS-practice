// 碰撞判定用

function CollisionDetectionBoxBox(Box1, Box2, type) {

  // 兩凸多邊形碰撞判定
  // Ipnut:
  // Box1與Box2 : 一陣列 凸多邊形各頂點順時針依序的x,y值
  //     EX.[ p5.Vector-1, p5.Vector-2, p5.Vector-3,.....]
  // type : 判斷用 固定0
  // OutPut:
  //    0 : 表無碰撞
  //    1 : 表有碰撞


  for (let i=0;i<Box1.length;i++){

    let Box1CheckMax = 0;
    let Box1CheckMin = 0;

    let NormalVector;
    if (i == Box1.length - 1) {
      NormalVector = p5.Vector.add(Box1[0], Box1[i].copy().rotate(PI));
    } else {
      NormalVector = p5.Vector.add(Box1[i+1], Box1[i].copy().rotate(PI));
    }

    let DirectionVector = NormalVector.copy().rotate(HALF_PI).setMag(1);
    for (let j=0;j<Box1.length-2;j++){
      let CheckVector;
      if (i+2+j<Box1.length) {
        CheckVector = p5.Vector.add(Box1[i+2+j], Box1[i].copy().rotate(PI));
      } else {
        CheckVector = p5.Vector.add(Box1[i+2+j-Box1.length], Box1[i].copy().rotate(PI));
      }
      let DotValue = p5.Vector.dot(CheckVector, DirectionVector);
      if (DotValue > Box1CheckMax) {
        Box1CheckMax = DotValue;
      } else if (DotValue < Box1CheckMin) {
        Box1CheckMin = DotValue;
      }
    }
    let Box2CheckMax = -999999;
    let Box2CheckMin = 999999;
    for (let k=0;k<Box2.length;k++){
      let CheckVector;
      CheckVector = p5.Vector.add(Box2[k], Box1[i].copy().rotate(PI));
      let DotValue = p5.Vector.dot(CheckVector, DirectionVector);
      if (DotValue > Box2CheckMax) {
        Box2CheckMax = DotValue;
      }
      if (DotValue < Box2CheckMin) {
        Box2CheckMin = DotValue;
      }
    }
    // 以下是檢查用輔助線
    // stroke(255,0,0);
    // line(Box1[i].x-NormalVector.x+DirectionVector.copy().setMag(Box1CheckMin).x,
    //      Box1[i].y-NormalVector.y+DirectionVector.copy().setMag(Box1CheckMin).y,
    //      Box1[i].x-NormalVector.x+DirectionVector.copy().setMag(Box1CheckMax).x,
    //      Box1[i].y-NormalVector.y+DirectionVector.copy().setMag(Box1CheckMax).y);
    // stroke(255,255,0);
    // line(Box1[i].x-NormalVector.x+DirectionVector.copy().setMag(Box2CheckMin).x,
    //      Box1[i].y-NormalVector.y+DirectionVector.copy().setMag(Box2CheckMin).y,
    //      Box1[i].x-NormalVector.x+DirectionVector.copy().setMag(Box2CheckMax).x,
    //      Box1[i].y-NormalVector.y+DirectionVector.copy().setMag(Box2CheckMax).y);

    if (Box2CheckMax <= Box1CheckMin | Box1CheckMax <= Box2CheckMin) {
      return (0);
    }
  }
  if (type==0) {
    return (CollisionDetectionBoxBox(Box2, Box1, 1));
  }
  return (1);
}

function CollisionDetectionTable(Table, Ball) {
  this.TableV = [];
  this.TableV[0] = createVector(Table.TableX + Table.TableWidth,
                              Table.TableY - Table.TableHeight);
  this.TableV[1] = createVector(Table.TableX + Table.TableWidth,
                              Table.TableY + Table.TableHeight);
  this.TableV[2] = createVector(Table.TableX - Table.TableWidth,
                              Table.TableY + Table.TableHeight);
  this.TableV[3] = createVector(Table.TableX - Table.TableWidth,
                              Table.TableY - Table.TableHeight);

  this.BallPosition = createVector(Ball.BallX, Ball.BallY);
  let MinV = createVector(99999,99999);
  let Distance = [];
  for (let i=0;i<4;i++) {
    Distance[i] = p5.Vector.add(this.BallPosition, this.TableV[i].copy().rotate(PI));
    // console.log(Distance.mag());
    if (Distance[i].mag() < MinV.mag()){
      MinV = Distance[i];
    }
  }

  let DotMin = 9999999;
  let DotMax = -9999999;
  for (let i=0;i<4;i++) {
    let DotValue = p5.Vector.dot(MinV.copy().setMag(1), Distance[i]);
    if (DotValue > DotMax) {
      DotMax = DotValue;
    }
    if (DotValue < DotMin) {
      DotMin = DotValue;
    }
  }
  if (DotMax > -Ball.BallR/2 & Ball.BallR/2 > DotMin) {
    // console.log('test');
    return (1);
  }
  // stroke(255,0,0);
  // line(this.BallPosition.x, this.BallPosition.y,
  //      this.BallPosition.x - MinV.x, this.BallPosition.y-MinV.y);
  let BallPathCenter = createVector((Ball.BallX + Ball.BallX_)/2,
                                    (Ball.BallY + Ball.BallY_)/2);
  let BallPathX = createVector(Ball.BallX - Ball.BallX_,
                               Ball.BallY - Ball.BallY_)
  BallPathX.setMag(BallPathX.mag()/2);
  let BallPathY = BallPathX.copy().rotate(HALF_PI).setMag(Ball.BallR/2);
  this.BallPath = [];
  this.BallPath[0] = createVector(BallPathCenter.x + BallPathX.x - BallPathY.x,
                                  BallPathCenter.y + BallPathX.y - BallPathY.y);
  this.BallPath[1] = createVector(BallPathCenter.x + BallPathX.x + BallPathY.x,
                                  BallPathCenter.y + BallPathX.y + BallPathY.y);
  this.BallPath[2] = createVector(BallPathCenter.x - BallPathX.x + BallPathY.x,
                                  BallPathCenter.y - BallPathX.y + BallPathY.y);
  this.BallPath[3] = createVector(BallPathCenter.x - BallPathX.x - BallPathY.x,
                                  BallPathCenter.y - BallPathX.y - BallPathY.y);
  fill(255,0,0)
  // console.log(this.BallPath[0]);
  quad(this.BallPath[0].x, this.BallPath[0].y,
      this.BallPath[1].x, this.BallPath[1].y,
      this.BallPath[2].x, this.BallPath[2].y,
      this.BallPath[3].x, this.BallPath[3].y);
  // ellipse(Ball.BallX_, Ball.BallY_, Ball.BallR, Ball.BallR);
  return(CollisionDetectionBoxBox(this.TableV, this.BallPath, 0));
}
