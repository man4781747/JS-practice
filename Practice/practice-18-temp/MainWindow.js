// 補零function
function padLeft(str, len){if (str.length >= len) {return str;} else {return padLeft("0" +str,len);}}

var socket;
socket = io.connect('http://140.116.24.84:3000');

var TimeLenChoseAll = [];
var DataLenMax = [];

function TitleChange(Id,Type) {
  let TitleSelect = select('#Title'+Id);
  if (Type==1){
    TitleSelect.style('box-shadow','10px 10px rgb(170, 120, 100)');
    TitleSelect.style('transform','translate(-5px,-5px)');
  } else {
    TitleSelect.style('box-shadow','0px 0px rgb(170, 120, 100)');
    TitleSelect.style('transform','translate(0px,0px)');
  }
}

function MainWindow() {
  noCanvas();
  for (let i = 0;i<StationInfo.length;i++){
    DataLenMax[i] = 8640;
    TimeLenChoseAll[i] = '2';
    let DivMake = createDiv()
    DivMake.id(StationInfo[i].name);
    DivMake.class('Station');

    let Title = createElement('h1',StationInfo[i].name);
    Title.parent(DivMake);
    Title.id('Title'+i);
    // Title.mouseOver(console.log(select('#Title'+i)));
    Title.mouseOver(x => TitleChange(i,1));
    Title.mouseOut(x => TitleChange(i,0));
    Title.mousePressed(x => {if (select('#SensorDiv'+i)==null){SensorMake(DivMake,i)} else {
      select('#SensorDiv'+i).remove();
    }});
  }
}
function SensorMake(DivMake,i){
  let test = createDiv('');
  test.parent(DivMake);
  test.id('SensorDiv'+i);
  test.class('SensorDiv');
  for (let k=0;k<3;k++){
    // 選取時間的群組
    let TimeLenChose = createDiv();
    TimeLenChose.html(TimeLenData[0].name[k]);
    TimeLenChose.class('TimeLenChose');
    TimeLenChose.id('TimeLenChose'+StationInfo[i].name+k);
    TimeLenChose.parent(test);
    let TimeLenChecked = createElement('TimeLenChecked');
    TimeLenChecked.class('TimeLenChecked'+i);
    TimeLenChecked.style('background-color','rgb(170, 120, 100)');
    TimeLenChecked.style('width','40px');
    TimeLenChecked.style('height','40px');
    TimeLenChecked.style('position','absolute');
    TimeLenChecked.style('left','-50px');
    TimeLenChecked.style('z-index','1');
    if (k==2) {
      TimeLenChecked.style('z-index','3');
    }
    TimeLenChecked.parent(TimeLenChose);
    TimeLenChose.mousePressed(x => {//TimeLenChecked.style('z-index','3');
                                    TimeLenChoseAll[i] = TimeLenChose.html()[0];
                                    ChangeTimeLen(i);});
  }

  for (let j=0;j<StationInfo[i].sensors.length;j++){
    let SensorDiv;
    SensorDiv = createDiv();
    SensorDiv.class('Sensor');
    SensorDiv.parent(test);
    createElement('h5',StationInfo[i].sensors[j]).parent(SensorDiv)
    let ControlTable;
    ControlTable = createDiv();
    ControlTable.class('ControlTable');
    ControlTable.parent(SensorDiv);

    let NowTemp;
    NowTemp = createDiv('最新數值: ');
    NowTemp.class('NowTemp');
    NowTemp.id('NowTemp'+StationInfo[i].sensors[j]);
    NowTemp.parent(ControlTable);

    TheLatestData(i, j);

    SensorDiv.mousePressed(x => {
      if (SensorDiv.size().width == 357) {
        SensorDiv.style('width','calc(100vw - 80px)');
        PlotDiv = createDiv();
        PlotDiv.id('PlotDiv'+StationInfo[i].sensors[j])
        // console.log(PlotDiv.id(),j);
        PlotDiv.class('PlotDiv');
        PlotDiv.parent(SensorDiv);
        DrawUpdateSingle(i, j);
      } else {
        SensorDiv.style('width','350px');
        // PlotDiv.style('width','350px');
        select('#PlotDiv'+StationInfo[i].sensors[j]).remove();
      }
    });

  }
}

function ChangeTimeLen(i){
  let TimeLenCheckedSelect = selectAll('.TimeLenChecked'+i);
  // console.log(TimeLenChoseAll[i]);
  if (TimeLenChoseAll[i]== '2') {
    DataLenMax[i] = TimeLenData[0].num[2];
    TimeLenCheckedSelect[0].style('z-index','1');
    TimeLenCheckedSelect[1].style('z-index','1');
    TimeLenCheckedSelect[2].style('z-index','3');
  } else if (TimeLenChoseAll[i]== '1') {
    DataLenMax[i] = TimeLenData[0].num[0];
    TimeLenCheckedSelect[0].style('z-index','3');
    TimeLenCheckedSelect[1].style('z-index','1');
    TimeLenCheckedSelect[2].style('z-index','1');
  } else if (TimeLenChoseAll[i]== '6') {
    DataLenMax[i] = TimeLenData[0].num[1];
    TimeLenCheckedSelect[0].style('z-index','1');
    TimeLenCheckedSelect[1].style('z-index','3');
    TimeLenCheckedSelect[2].style('z-index','1');
  };
  socket.emit('RequestLast600Data', [StationInfo[i].name, DataLenMax[i]]);
  // console.log(i+' '+TimeLenChoseAll[i] + DataLenMax[i])
}
