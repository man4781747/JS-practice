var SliderTest;
var DirTest;
var PictureNum = 0;
var MainImg_630NM, MainImg_557NM, MainImg_EMPTY;
var Testimg;
var PicCanvas;
var OldSliderNum;
var FileNameList = [];
var FileNameListAll;
var AllPicDateList = [];
var SearchButten;
// var SelectType;
var ChoseYear, ChoseMonth, ChoseDay, ChoseHr, ChoseMin, ChoseSec, ChoseType;
var PrePicShow = true;
var PicDiv_630NM, PicDiv_557NM, PicDiv_EMPTY;
var PicDivTitle_630NM, PicDivTitle_557NM, PicDivTitle_EMPTY;
var SunAndMoonData;
var DateDiv, MoonDiv, SunDiv;
var MoonPhasePic;

function setup() {
  var xhttp = new XMLHttpRequest();

  PicDiv_630NM = createDiv();
  PicDiv_630NM.position((windowWidth-300)/3*0+100, 100);
  PicDiv_630NM.size(windowHeight/3, 100);
  createDiv('630NM').parent(PicDiv_630NM).style('color','#FFFFFF');
  PicDiv_630NM.class('MainPicDiv');

  PicDiv_557NM = createDiv();
  PicDiv_557NM.position((windowWidth-300)/3*1+100, 100);
  PicDiv_557NM.size(windowHeight/3, 100);
  createDiv('557NM').parent(PicDiv_557NM).style('color','#FFFFFF');
  PicDiv_630NM.class('MainPicDiv');

  PicDiv_EMPTY = createDiv();
  PicDiv_EMPTY.position((windowWidth-300)/3*2+100, 100);
  PicDiv_EMPTY.size(windowHeight/3, 100);
  createDiv('EMPTY').parent(PicDiv_EMPTY).style('color','#FFFFFF');
  PicDiv_630NM.class('MainPicDiv');

  xhttp.open("GET", "http://140.116.24.83:8000/PicWeb/GetAllPicDate/",false);
  xhttp.send();
  AllPicDateList = JSON.parse(xhttp.response)['AllPicDate'];

  // 創造日期選單
  BuildDateChoseDiv();


  SearchDataPath = "http://140.116.24.83:8000/PicWeb/GetPicList/"+padLeft(SelectYear.value(), 4)+'/'+padLeft(SelectMonth.value(), 2)+'/'+padLeft(SelectDay.value(), 2);
  xhttp.open("GET", SearchDataPath,false);
  xhttp.send();

  FileNameListAll = JSON.parse(xhttp.response)['All'];
  FileTimeListAll = JSON.parse(xhttp.response)['FirstPicTime'];
  // console.log(FileTimeListAll);
  // let KeyBoardDiv = createDiv('Q : 開啟/關閉預覽圖');
  // KeyBoardDiv.position(0, windowHeight-50);
  // KeyBoardDiv.style('color', '#FFFFFF');
  SearchDataPath = "http://140.116.24.83:8000/PicWeb/GetMoonTime/"+padLeft(SelectYear.value(), 4)+'/'+padLeft(SelectMonth.value(), 2)+'/'+padLeft(SelectDay.value(), 2)
  xhttp.open("GET", SearchDataPath,false);
  xhttp.send();
  MoonData = JSON.parse(xhttp.response)
  // console.log(MoonData);

  // 創造月相照片
  MoonPhasePic = createImg(MoonData['MoonPictureUrl']);
  MoonPhasePic.id('MoonPhasePic')

  SearchDataPath = "http://140.116.24.83:8000/PicWeb/GetSunTime/"+padLeft(SelectYear.value(), 4)+'/'+padLeft(SelectMonth.value(), 2)+'/'+padLeft(SelectDay.value(), 2)
  xhttp.open("GET", SearchDataPath,false);
  xhttp.send();
  SunData = JSON.parse(xhttp.response)
  // console.log(SunData);

  let BackgroundDiv = createCanvas(300, 200);
  BackgroundDiv.id('BackgroundDiv')



  BuildPreviewPicDiv();

  OldSliderNum = -1;
  // Testimg = loadImage('http://140.116.24.83:8000/static/Boss.png');
  // Testimg = loadImage('./test.jpg');
  // console.log(Testimg);
  // MainImg = createImg(Testimg);
}


function draw() {
  if (FileNameListAll.length > 0) {
    var SliderTestValue = SliderTest.value();
    var GetValue = Math.round(SliderTestValue/20);

    // 預覽
    // var testtest = selectAll('.TestClass_630NM');
    // for (let i=0;i<testtest.length;i++) {
    //   let testsize = 75
    //   testtest[i].size(testsize, testsize);
    //   testtest[i].position(
    //     windowWidth/2-testtest[i].size().width/2-(SliderTestValue-i*20)*testtest[i].size().width/20,
    //     windowHeight/2
    //   )
    //   if (i==GetValue) {
    //     testtest[i].style('box-shadow', '0px 3px #FFFFFF');
    //     testtest[i].style('opacity', '1');
    //   } else {
    //     testtest[i].style('box-shadow', '0px 0px #000000');
    //     testtest[i].style('opacity', '0.4');
    //   }
    // }
    //
    // testtest = selectAll('.TestClass_557NM');
    // for (let i=0;i<testtest.length;i++) {
    //   let testsize = 75
    //   testtest[i].size(testsize, testsize);
    //   testtest[i].position(
    //     windowWidth/2-testtest[i].size().width/2-(SliderTestValue-i*20)*testtest[i].size().width/20,
    //     windowHeight/2+75
    //   )
    //   if (i==GetValue) {
    //     testtest[i].style('box-shadow', '0px 3px #FFFFFF');
    //     testtest[i].style('opacity', '1');
    //   } else {
    //     testtest[i].style('box-shadow', '0px 0px #000000');
    //     testtest[i].style('opacity', '0.4');
    //   }
    // }
    //
    // testtest = selectAll('.TestClass_EMPTY');
    // for (let i=0;i<testtest.length;i++) {
    //   let testsize = 75
    //   testtest[i].size(testsize, testsize);
    //   testtest[i].position(
    //     windowWidth/2-testtest[i].size().width/2-(SliderTestValue-i*20)*testtest[i].size().width/20,
    //     windowHeight/2+75*2
    //   )
    //   if (i==GetValue) {
    //     testtest[i].style('box-shadow', '0px 3px #FFFFFF');
    //     testtest[i].style('opacity', '1');
    //   } else {
    //     testtest[i].style('box-shadow', '0px 0px #000000');
    //     testtest[i].style('opacity', '0.4');
    //   }
    // }

    // PreviewPicDiv.style('left', 'calc( 50% - '+(PreviewPicDiv.size().width/21*GetValue+225+37.5)+'px)')
    PreviewPicDiv.style('left', 'calc( 50% - '+(262.5+75*GetValue)+'px)')



    if (OldSliderNum != GetValue){
      if (MainImg_630NM) {
        MainImg_630NM.remove();
        PicDivTitle_630NM.remove();
      }
      if (MainImg_557NM) {
        MainImg_557NM.remove();
        PicDivTitle_557NM.remove();
      }
      if (MainImg_EMPTY) {
        MainImg_EMPTY.remove();
        PicDivTitle_EMPTY.remove();
      }
      PicDivTitle_630NM = createDiv(
        FileNameListAll[GetValue][0][45]+FileNameListAll[GetValue][0][46]+FileNameListAll[GetValue][0][47]+FileNameListAll[GetValue][0][48]+'-'+
        FileNameListAll[GetValue][0][49]+FileNameListAll[GetValue][0][50]+'-'+FileNameListAll[GetValue][0][51]+FileNameListAll[GetValue][0][52]+' '+
        FileNameListAll[GetValue][0][54]+FileNameListAll[GetValue][0][55]+':'+FileNameListAll[GetValue][0][56]+FileNameListAll[GetValue][0][57]+':'+
        FileNameListAll[GetValue][0][58]+FileNameListAll[GetValue][0][59]
      )
      PicDivTitle_630NM.parent(PicDiv_630NM);
      PicDivTitle_630NM.style('color','#FFFFFF')
      MainImg_630NM = createImg('http://'+FileNameListAll[GetValue][0]);
      // MainImg_630NM.size(windowHeight/3, windowHeight/3);
      MainImg_630NM.size(400, 400);
      MainImg_630NM.parent(PicDiv_630NM);

      // MainImg.position(windowWidth/2-MainImg.size().width/2, 300);
      // MainImg_630NM.position(0, 300);
      PicDivTitle_557NM = createDiv(
        FileNameListAll[GetValue][1][45]+FileNameListAll[GetValue][1][46]+FileNameListAll[GetValue][1][47]+FileNameListAll[GetValue][1][48]+'-'+
        FileNameListAll[GetValue][1][49]+FileNameListAll[GetValue][1][50]+'-'+FileNameListAll[GetValue][1][51]+FileNameListAll[GetValue][1][52]+' '+
        FileNameListAll[GetValue][1][54]+FileNameListAll[GetValue][1][55]+':'+FileNameListAll[GetValue][1][56]+FileNameListAll[GetValue][1][57]+':'+
        FileNameListAll[GetValue][1][58]+FileNameListAll[GetValue][1][59]
      )
      PicDivTitle_557NM.parent(PicDiv_557NM);
      PicDivTitle_557NM.style('color','#FFFFFF')
      MainImg_557NM = createImg('http://'+FileNameListAll[GetValue][1]);
      MainImg_557NM.size(400, 400);
      MainImg_557NM.parent(PicDiv_557NM);
      // MainImg.position(windowWidth/2-MainImg.size().width/2, 300);
      // MainImg_630NM.position(windowHeight/3, 300);
      PicDivTitle_EMPTY = createDiv(
        FileNameListAll[GetValue][2][45]+FileNameListAll[GetValue][2][46]+FileNameListAll[GetValue][2][47]+FileNameListAll[GetValue][2][48]+'-'+
        FileNameListAll[GetValue][2][49]+FileNameListAll[GetValue][2][50]+'-'+FileNameListAll[GetValue][2][51]+FileNameListAll[GetValue][2][52]+' '+
        FileNameListAll[GetValue][2][54]+FileNameListAll[GetValue][2][55]+':'+FileNameListAll[GetValue][2][56]+FileNameListAll[GetValue][2][57]+':'+
        FileNameListAll[GetValue][2][58]+FileNameListAll[GetValue][2][59]
      )
      PicDivTitle_EMPTY.parent(PicDiv_EMPTY);
      PicDivTitle_EMPTY.style('color','#FFFFFF')
      MainImg_EMPTY = createImg('http://'+FileNameListAll[GetValue][2]);
      MainImg_EMPTY.size(400, 400);
      MainImg_EMPTY.parent(PicDiv_EMPTY);
    }
    // console.log(ChoseYear);

    OldSliderNum = GetValue;
  } else {
    console.log('No Image');
  }

  background(0);
  push();
  strokeCap(SQUARE);
  strokeWeight(10);

  stroke('rgba(255,188,0,0.5)');
  line(0, 50, 300, 50);
  stroke(255,188,0);
  line((parseInt(SunData['Sun_1_test'][2])-1080)/720*300, 50, 0, 50)
  line(300, 50,(parseInt(SunData['Sun_2_test'][2])-1080)/720*300, 50)

  stroke('rgba(225,225,0,0.5)');
  line(0, 100, 300, 100);
  stroke(225,225,0);
  if (MoonData['Moon_1_test'][0] == 'rising') {
    line(
      (parseInt(MoonData['Moon_1_test'][2])-1080)/720*300, 100,
      (parseInt(MoonData['Moon_2_test'][2])-1080)/720*300, 100
    )
  } else {
    line((parseInt(MoonData['Moon_1_test'][2])-1080)/720*300, 100, 0, 100);
    line((parseInt(MoonData['Moon_2_test'][2])-1080)/720*300, 100, 300, 100);
  }

  stroke('rgba(225,0,0,0.5)');
  line(0, 150, 300, 150);
  stroke(255,0,0);
  // console.log(parseInt(FileTimeListAll[0])/720*300, parseInt(FileTimeListAll[FileTimeListAll.length-1])/720*300)
  line(
    parseInt(FileTimeListAll[0])/720*300, 150,
    parseInt(FileTimeListAll[FileTimeListAll.length-1])/720*300, 150
  )

  stroke(255);
  strokeWeight(1);
  line(
    parseInt(FileTimeListAll[GetValue])/720*300, 0,
    parseInt(FileTimeListAll[GetValue])/720*300, 200
)
  pop();


}



function SendSearchRequest() {
  window.location.href = 'http://140.116.24.83:8000/PicWeb/MainHTML/'+padLeft(SelectYear.value(), 4)+'/'+padLeft(SelectMonth.value(), 2)+'/'+padLeft(SelectDay.value(), 2)
}
