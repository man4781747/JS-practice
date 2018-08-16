const reducer = (accumulator, currentValue) => accumulator + currentValue;
function Copy(Old){
  let New = [];
  for (let i=0;i<Old.length;i++){
    New[i] = Old[i];
  }
  return New;
}
/*
檢查對子數量並分組
*/
function CheckPairs(PlayCard, PlayCardPoint){
  let  PlayCardPairs = new Array(0);

  for (let i=0;i<13;i++){
    let MaxNum = PlayCardPoint[i];
    let Num_1 = 0
    let Num_2 = 1
    while (Num_1<MaxNum){
      while (Num_2<MaxNum){
        let SumNumAll = 0;
        for (let SumNum=0;SumNum<i;SumNum++){
          SumNumAll += PlayCardPoint[SumNum];
        }
        PlayCardPairs.push([PlayCard[SumNumAll + Num_1],
                            PlayCard[SumNumAll + Num_2]]);
        Num_2 += 1
      }
      Num_1 += 1
      Num_2 = Num_1 +1;
    }
  }
  return PlayCardPairs;
}

/*
檢查FullHouse數量並分組
*/
function CheckFullHouse(PlayCard, PlayCardPoint){
  let PlayCardFullHouse = new Array(0);
  for (let i=0;i<13;i++){
    if (PlayCardPoint[i] >= 3){
      for (let l=0;l<13;l++){
        if (i!=l & PlayCardPoint[l] >= 2){
          let MaxNum_1 = PlayCardPoint[i];
          let Num_1_1 = 0;
          let Num_1_2 = 1;
          let Num_1_3 = 2;
          while (Num_1_1<MaxNum_1){
            while (Num_1_2<MaxNum_1){
              while (Num_1_3<MaxNum_1){
                let SumNumAll_1 = 0;
                for (let SumNum=0;SumNum<i;SumNum++){
                  SumNumAll_1 += PlayCardPoint[SumNum];
                }
                let Input = [];
                Input[0] = PlayCard[SumNumAll_1 + Num_1_1];
                Input[1] = PlayCard[SumNumAll_1 + Num_1_2];
                Input[2] = PlayCard[SumNumAll_1 + Num_1_3];
                let MaxNum_2 = PlayCardPoint[l];
                let Num_2_1 = 0;
                let Num_2_2 = 1;
                while (Num_2_1<MaxNum_2){
                  while (Num_2_2<MaxNum_2){
                    Input_2 = Copy(Input);
                    let SumNumAll_2 = 0
                    for (let SumNum=0;SumNum<l;SumNum++){
                      SumNumAll_2 += PlayCardPoint[SumNum];
                    }
                    Input_2[3] = PlayCard[SumNumAll_2 + Num_2_1];
                    Input_2[4] = PlayCard[SumNumAll_2 + Num_2_2];
                    PlayCardFullHouse.push(Input_2);
                    Num_2_2 += 1;
                  }
                  Num_2_1 += 1;
                  Num_2_2 = Num_2_1 + 1;
                }
                Num_1_3 += 1;
              }
              Num_1_2 += 1;
              Num_1_3 = Num_1_2 + 1;
            }
            Num_1_1 += 1;
            Num_1_2 = Num_1_1 + 1;
          }
        }
      }
    }
  }
  return PlayCardFullHouse;
}


function CheckStraight(PlayCard, PlayCardPoint){
  let PlayCardStraight = new Array(0);
  for (let i=0;i<9;i++){
    if (PlayCardPoint[i] != 0 &
        PlayCardPoint[i+1] != 0 &
        PlayCardPoint[i+2] != 0 &
        PlayCardPoint[i+3] != 0 &
        PlayCardPoint[i+4] != 0) {
      let MaxNum_1 = PlayCardPoint[i];
      let Num1 = 0;
      while (Num1 < MaxNum_1){
        let SumNumAll_1 = 0;
        for (let SumNum=0;SumNum<i;SumNum++){
          SumNumAll_1 += PlayCardPoint[SumNum];
        }
        let StraightInput_1 = [];
        StraightInput_1[0] = PlayCard[SumNumAll_1 + Num1];
        let MaxNum_2 = PlayCardPoint[i+1];
        let Num2 = 0;

        while (Num2 < MaxNum_2){
          let SumNumAll_2 = 0;
          for (let SumNum=0;SumNum<i+1;SumNum++){
            SumNumAll_2 += PlayCardPoint[SumNum];
          }
          let StraightInput_2 = Copy(StraightInput_1);
          StraightInput_2[1] = PlayCard[SumNumAll_2 + Num2];
          let MaxNum_3 = PlayCardPoint[i+2];
          let Num3 = 0;

          while (Num3 < MaxNum_3){
            let SumNumAll_3 = 0;
            for (let SumNum=0;SumNum<i+2;SumNum++){
              SumNumAll_3 += PlayCardPoint[SumNum];
            }
            let StraightInput_3 = Copy(StraightInput_2);
            StraightInput_3[2] = PlayCard[SumNumAll_3 + Num3];
            let MaxNum_4 = PlayCardPoint[i+3];
            let Num4 = 0;

            while (Num4 < MaxNum_4){
              let SumNumAll_4 = 0;
              for (let SumNum=0;SumNum<i+3;SumNum++){
                SumNumAll_4 += PlayCardPoint[SumNum];
              }
              let StraightInput_4 = Copy(StraightInput_3);
              StraightInput_4[3] = PlayCard[SumNumAll_4 + Num4];
              let MaxNum_5 = PlayCardPoint[i+4];
              let Num5 = 0;

              while (Num5 < MaxNum_5){
                let SumNumAll_5 = 0;
                for (let SumNum=0;SumNum<i+4;SumNum++){
                  SumNumAll_5 += PlayCardPoint[SumNum];
                }
                let StraightInput_5 = Copy(StraightInput_4);
                StraightInput_5[4] = PlayCard[SumNumAll_5 + Num5];
                PlayCardStraight.push(StraightInput_5);
                Num5 += 1;
              }
              Num4 += 1;
            }
            Num3 += 1;
          }
          Num2 += 1;
        }
        Num1 += 1;
      }
    }
  }
  return PlayCardStraight;
}

function CheckFourKind(PlayCard, PlayCardPoint){
  let PlayCardFourKind = new Array(0);
  for (let i=0;i<13;i++){
    if (PlayCardPoint[i] == 4){
      for (let l=0;l<13;l++){
        if (i != l & PlayCardPoint[l] >= 1){
          let SumNumAll = 0;
          for (let SumNum=0;SumNum<i;SumNum++){
            SumNumAll += PlayCardPoint[SumNum];
          }
          let FourKindInput = [];
          FourKindInput[0] = PlayCard[SumNumAll];
          FourKindInput[1] = PlayCard[SumNumAll+1];
          FourKindInput[2] = PlayCard[SumNumAll+2];
          FourKindInput[3] = PlayCard[SumNumAll+3];
          let MaxNum = PlayCardPoint[l];
          let Num2 = 0;
          while (Num2 < MaxNum){
            let SumNumAll2 = 0;
            for (let SumNum=0;SumNum<l;SumNum++){
              SumNumAll2 += PlayCardPoint[SumNum];
            }
            let FourKindInput2 = Copy(FourKindInput);
            FourKindInput2[4] = PlayCard[SumNumAll2];
            PlayCardFourKind.push(FourKindInput2)
            Num2 += 1;
          }
        }
      }
    }
  }
  return PlayCardFourKind;
}


function CheckStraightFlush(PlayCardStraight){
  let PlayCardStraightFlush = new Array(0);
  for (let i=0;i<PlayCardStraight.length;i++){
    if (PlayCardStraight[i][0]%1 == PlayCardStraight[i][1]%1 &
        PlayCardStraight[i][1]%1 == PlayCardStraight[i][2]%1 &
        PlayCardStraight[i][2]%1 == PlayCardStraight[i][3]%1 &
        PlayCardStraight[i][3]%1 == PlayCardStraight[i][4]%1){
          PlayCardStraightFlush.push(PlayCardStraight[i]);
        }
  }
  return PlayCardStraightFlush;
}
