var MainWindowDiv;
var socket;
var AllData_Y,AllData_M,AllData_D,AllData_H,AllData_Min,AllData_S;
var AllData_Time;
var AllData_Temp1,AllData_Temp2,AllData_Temp3,AllData_Temp4;
var trace;
var test_num;
socket = io.connect('http://140.116.24.84:3000');
var test_str = '6.60\t 25.21\t 24'

function padLeft(str, len){
  if (str.length >= len) {
    return str;
  } else {
    return padLeft("0" +str,len);
  }
}

function setup() {
  AllData = [];
  //createCanvas(1000, 1000);
  noCanvas();
  test_num = 0;
  MainWindowDiv = createDiv();
  MainWindowDiv.id('Temp1');
  createDiv().id('Temp2');
  createDiv().id('Temp3');
  createDiv().id('Temp4');

  socket.emit('ConnectIn', '我連進來拉');
  socket.emit('RequestLast600Data', '');
  socket.on('Last600Data',(obj) => {DataArrange(obj);
                                  });
  socket.on('NewData', (obj) => UpdateData(obj));


}

function DataArrange(obj){
  // AllData_Y = [];
  // AllData_M = [];
  // AllData_D = [];
  // AllData_H = [];
  // AllData_Min = [];
  // AllData_S = [];
  AllData_Temp1 = [];
  AllData_Temp2 = [];
  AllData_Temp3 = [];
  AllData_Temp4 = [];
  AllData_Time = [];
  for (let i=0;i<obj.length-1;i++){
    let DataSolit = obj[i].split(' \t');
    // AllData_Y.push(parseFloat(DataSolit[0]));
    // AllData_M.push(parseFloat(DataSolit[1]));
    // AllData_D.push(parseFloat(DataSolit[2]));
    // AllData_H.push(parseFloat(DataSolit[3]));
    // AllData_Min.push(parseFloat(DataSolit[4]));
    // AllData_S.push(parseFloat(DataSolit[5]));
    // AllData_Time.push(parseFloat(DataSolit[3])+parseFloat(DataSolit[4])/60.+parseFloat(DataSolit[5])/3600.);
    AllData_Time.push(DataSolit[0]+'-'+padLeft(DataSolit[1],2)+'-'+padLeft(DataSolit[2],2)+' '+padLeft(DataSolit[3],2)+':'+padLeft(DataSolit[4],2)+':'+padLeft(DataSolit[5],2))
    AllData_Temp1.push(parseFloat(DataSolit[6]));
    AllData_Temp2.push(parseFloat(DataSolit[7]));
    AllData_Temp3.push(parseFloat(DataSolit[8]));
    AllData_Temp4.push(parseFloat(DataSolit[9]));
  }
  // console.log(obj);
  DrawUpdate();
}

function UpdateData(NewObj){
  console.log(NewObj);
  let DataSolit = NewObj.split(' \t');
  if (AllData_Time.length>=600) {
    // AllData_Y.splice(0,1);
    // AllData_M.splice(0,1);
    // AllData_D.splice(0,1);
    // AllData_H.splice(0,1);
    // AllData_Min.splice(0,1);
    // AllData_S.splice(0,1);
    AllData_Time.splice(0,1);
    AllData_Temp1.splice(0,1);
    AllData_Temp2.splice(0,1);
    AllData_Temp3.splice(0,1);
    AllData_Temp4.splice(0,1);
  }
  // AllData_Y.push(parseFloat(DataSolit[0]));
  // AllData_M.push(parseFloat(DataSolit[1]));
  // AllData_D.push(parseFloat(DataSolit[2]));
  // AllData_H.push(parseFloat(DataSolit[3]));
  // AllData_Min.push(parseFloat(DataSolit[4]));
  // AllData_S.push(parseFloat(DataSolit[5]));
  // AllData_Time.push(parseFloat(DataSolit[3])+parseFloat(DataSolit[4])/60.+parseFloat(DataSolit[5])/3600.);
  AllData_Time.push(DataSolit[0]+'-'+padLeft(DataSolit[1],2)+'-'+padLeft(DataSolit[2],2)+' '+padLeft(DataSolit[3],2)+':'+padLeft(DataSolit[4],2)+':'+padLeft(DataSolit[5],2))
  AllData_Temp1.push(parseFloat(DataSolit[6]));
  AllData_Temp2.push(parseFloat(DataSolit[7]));
  AllData_Temp3.push(parseFloat(DataSolit[8]));
  AllData_Temp4.push(parseFloat(DataSolit[9]));
  DrawUpdate();
}

function DrawUpdate(){
  trace1 = {
    x: AllData_Time,
    y: AllData_Temp1,
    type: 'scatter'
  };
  trace2 = {
    x: AllData_Time,
    y: AllData_Temp2,
    type: 'scatter'
  };
  trace3 = {
    x: AllData_Time,
    y: AllData_Temp3,
    type: 'scatter'
  };
  trace4 = {
    x: AllData_Time,
    y: AllData_Temp4,
    type: 'scatter'
  };

  Plotly.newPlot('Temp1', [trace1]);
  Plotly.newPlot('Temp2', [trace2]);
  Plotly.newPlot('Temp3', [trace3]);
  Plotly.newPlot('Temp4', [trace4]);
}
