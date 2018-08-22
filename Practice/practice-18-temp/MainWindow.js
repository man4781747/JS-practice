// 補零function
function padLeft(str, len){if (str.length >= len) {return str;} else {return padLeft("0" +str,len);}}

var socket;
socket = io.connect('http://140.116.24.84:3000');

function MainWindow() {
  noCanvas();
  console.log('test')
  for (let i = 0;i<StationInfo.length;i++){
    let DivMake;
    DivMake = createDiv()
    DivMake.id(StationInfo[i].name);
    DivMake.class('Station');
    createElement('h1',StationInfo[i].name).parent(DivMake)
    for (let j=0;j<StationInfo[i].sensors.Temp.length;j++){
      let SensorDiv;
      SensorDiv = createDiv();
      SensorDiv.class('Sensor');
      SensorDiv.parent(DivMake);
      createElement('h5',StationInfo[i].sensors.Temp[j]).parent(SensorDiv)
      let ControlTable;
      ControlTable = createDiv();
      ControlTable.class('ControlTable');
      ControlTable.parent(SensorDiv);

      let NowTemp;
      NowTemp = createDiv('現在溫度');
      NowTemp.class('NowTemp');
      NowTemp.parent(ControlTable);

      let LockButton;
      LockButton = createButton('Lock');
      LockButton.class('LockButton');
      LockButton.parent(ControlTable);
      LockButton.mousePressed(x => {if(LockButton.html()=='Lock') {
        LockButton.html('Reread')} else {
          LockButton.html('Lock')
          socket.emit('RequestLast600Data', '');
          console.log('test');
        }} )

      let PlotDiv;
      PlotDiv = createDiv();
      PlotDiv.id('PlotDiv'+StationInfo[i].sensors.Temp[j])
      PlotDiv.class('PlotDiv');
      PlotDiv.parent(SensorDiv);
    }
  }
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
