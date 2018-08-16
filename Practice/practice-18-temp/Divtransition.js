var MainWindowDiv;
var socket;
var AllData;
var AllData_time = [];
var trace;
var test_num;
socket = io.connect('http://140.116.24.84:3000');
var test_str = '6.60\t 25.21\t 24'

for (let i=1;i<31;i++){
  AllData_time.push(i);
}

function setup() {
  AllData = [0];
  //createCanvas(1000, 1000);
  noCanvas();
  test_num = 0;
  MainWindowDiv = createDiv();
  MainWindowDiv.id('test');
  socket.emit('ConnectIn', '我連進來拉');
  socket.emit('RequestLast30Data', '');
  socket.on('Last30Data',(obj) => {AllData = obj;
                                   DrawUpdate();});
  socket.on('NewData', (obj) => UpdateData(obj));

  // AllData = [1,2,3];
}

// function draw() {
//   UpdateData(test_num);
//   test_num += 1;
// }

function UpdateData(NewObj){
  if (AllData.length >= 600){
    AllData.splice(0,1);
  }
  AllData.push(NewObj);
  console.log(AllData);
  DrawUpdate();
}

function DrawUpdate(){
  trace = {
    // x: AllData_time,
    y: AllData,
    type: 'scatter'
  };
  console.log(AllData);
  Plotly.newPlot('test', [trace]);
}
