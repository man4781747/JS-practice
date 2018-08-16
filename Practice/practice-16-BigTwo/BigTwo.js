var TotalCard = new Array(0);

var test = 0;
var count = 0;
while (test == 0) {
  for (let i=1;i<14;i++){
    for (let j=0;j<0.4;j+=0.1){
      TotalCard.push(i+j);
    }
  }

  var P1 = new Array(0);
  var P2 = new Array(0);
  var P3 = new Array(0);
  var P4 = new Array(0);

  var P1Point = new Array(13).fill(0);
  var P2Point = new Array(13).fill(0);
  var P3Point = new Array(13).fill(0);
  var P4Point = new Array(13).fill(0);

  for (let i=0;i<13;i++){
    // P1.push(TotalCard.pop(Math.floor(Math.random()*TotalCard.length)));
    let P1Chose = Math.floor(Math.random()*TotalCard.length);
    P1.push(TotalCard[P1Chose]);
    P1Point[Math.floor(TotalCard[P1Chose])-1] += 1
    TotalCard.splice(P1Chose, 1);

    let P2Chose = Math.floor(Math.random()*TotalCard.length);
    P2Point[Math.floor(TotalCard[P2Chose])-1] += 1
    P2.push(TotalCard[P2Chose]);
    TotalCard.splice(P2Chose, 1);

    let P3Chose = Math.floor(Math.random()*TotalCard.length);
    P3Point[Math.floor(TotalCard[P3Chose])-1] += 1
    P3.push(TotalCard[P3Chose]);
    TotalCard.splice(P3Chose, 1);

    let P4Chose = Math.floor(Math.random()*TotalCard.length);
    P4Point[Math.floor(TotalCard[P4Chose])-1] += 1
    P4.push(TotalCard[P4Chose]);
    TotalCard.splice(P4Chose, 1);
  }
  P1.sort(function(a,b) { return a - b;});
  P2.sort(function(a,b) { return a - b;});
  P3.sort(function(a,b) { return a - b;});
  P4.sort(function(a,b) { return a - b;});

  if (CheckStraightFlush(CheckStraight(P1, P1Point)).length > 0){
    test = 1;
  }
  count += 1;
  test = 1;
}




console.log(P1);
console.log(P1Point);
console.log(CheckPairs(P1, P1Point));
console.log(CheckFullHouse(P1, P1Point));
console.log(CheckStraight(P1, P1Point));
console.log(CheckFourKind(P1, P1Point));
console.log(CheckStraightFlush(CheckStraight(P1, P1Point)));
console.log(count);
// console.log(P2);
// console.log(P2Point);
// console.log(P3);
// console.log(P3Point);
// console.log(P4);
// console.log(P4Point);
