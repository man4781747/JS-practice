// 補零function
function padLeft(str, len){if (str.length >= len) {return str;} else {return padLeft("0" +str,len);}}

var socket;
socket = io.connect('http://140.116.24.84:3000');

var TimeLenChoseAll = [];
var DataLenMax = [];

function MainWindow() {
  noCanvas();
  for (let i = 0;i<StationInfo.length;i++){
    DataLenMax[i] = 8640;
    let DivMake;
    TimeLenChoseAll[i] = '2';
    DivMake = createDiv()
    DivMake.id(StationInfo[i].name);
    DivMake.class('Station');
    createElement('h1',StationInfo[i].name).parent(DivMake)

    for (let k=0;k<3;k++){
      let TimeLenChose = createDiv();
      TimeLenChose.html(TimeLenData[0].name[k]);
      TimeLenChose.class('TimeLenChose');
      TimeLenChose.id('TimeLenChose'+StationInfo[i].name+k);
      TimeLenChose.parent(DivMake);
      let TimeLenChecked = createElement('TimeLenChecked');
      TimeLenChecked.class('TimeLenChecked'+i);
      TimeLenChecked.parent(TimeLenChose);
      TimeLenChose.mousePressed(x => {//TimeLenChecked.style('z-index','3');
                                      TimeLenChoseAll[i] = TimeLenChose.html()[0];
                                      ChangeTimeLen(i);
                                      console.log(TimeLenChoseAll[i]);});
    }

    for (let j=0;j<StationInfo[i].sensors.length;j++){
      let SensorDiv;
      SensorDiv = createDiv();
      SensorDiv.class('Sensor');
      SensorDiv.parent(DivMake);
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

      // let LockButton;
      // LockButton = createButton('Lock');
      // LockButton.class('LockButton');
      // LockButton.parent(ControlTable);
      // LockButton.mousePressed(x => {if(LockButton.html()=='Lock') {
      //   LockButton.html('Reread')} else {
      //     LockButton.html('Lock')
      //     socket.emit('RequestLast600Data', '');
      //     console.log('test');
      //   }} )

      let PlotDiv;
      PlotDiv = createDiv();
      PlotDiv.id('PlotDiv'+StationInfo[i].sensors[j])
      PlotDiv.class('PlotDiv');
      PlotDiv.parent(SensorDiv);
    }
  }
}

function ChangeTimeLen(i){
  let TimeLenCheckedSelect = selectAll('.TimeLenChecked'+i);
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
  socket.emit('RequestLast600Data', DataLenMax[0]);
  // console.log(i+' '+TimeLenChoseAll[i] + DataLenMax[i])
}
// function setup() {
//   noCanvas();
//   console.log('test')
//   for (let i = 0;i<StationInfo.length;i++){
//     let DivMake;
//     DivMake = createDiv(StationInfo[i].name)
//     DivMake.id(StationInfo[i].name);
//     DivMake.class('Station');
//     for (let j=0;j<StationInfo[i].sensors.Temp.length;j++){
//       let SensorDiv;
//       SensorDiv = createDiv(StationInfo[i].sensors.Temp[j]);
//       SensorDiv.class('Sensor');
//       SensorDiv.parent(DivMake);
//       let ControlTable;
//       ControlTable = createDiv('ControlTable');
//       ControlTable.class('ControlTable');
//       ControlTable.parent(SensorDiv);
//       let PlotDiv;
//       PlotDiv = createDiv('PlotDiv');
//       PlotDiv.id('PlotDiv'+StationInfo[i].sensors.Temp[j])
//       PlotDiv.class('PlotDiv');
//       PlotDiv.parent(SensorDiv);
//     }
//   }
// }
