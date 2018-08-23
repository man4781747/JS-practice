var MainWindowDiv;
var AllData_Y,AllData_M,AllData_D,AllData_H,AllData_Min,AllData_S;
var AllData_Time;
var AllData_Temp1,AllData_Temp2,AllData_Temp3,AllData_Temp4,AllData_Press,AllData_Hum1,AllData_Hum2;
var NanData_Time, NanData_Temp, NanData_Press, NanData_Hum;
var trace;
var test_num;


var socket;
socket = io.connect('http://140.116.24.84:3000');


function padLeft(str, len){
  if (str.length >= len) {
    return str;
  } else {
    return padLeft("0" +str,len);
  }
}

function setup() {
  // AllData = [];
  // //createCanvas(1000, 1000);
  // noCanvas();
  // test_num = 0;
  // createElement('H1','慶齡中心');
  // createElement('H2','冷氣口');
  // createDiv().id('Temp1');
  // createDiv().id('Temp2');
  // createDiv().id('Temp3');
  // createDiv().id('Temp4');
  // createElement('H1','南瀛小屋');
  // createDiv().id('Nan_Temp1');
  // createDiv().id('Nan_Temp2');
  MainWindow();
  socket.emit('ConnectIn', '我連進來拉');
  console.log(DataLenMax[0]);
  socket.emit('RequestLast600Data', DataLenMax[0]);
  socket.on('Last600Data',(obj) => {DataArrange(obj);});
  socket.on('Last600Data_nan',(obj) => {DataArrangeNan(obj);});

  socket.on('NewData', (obj) => UpdateData(obj));
  socket.on('NewData_nan', (obj) => Nan_UpdateData(obj));

}

function DataArrangeNan(obj){
  NanData_Time = [];
  NanData_Temp = [];
  NanData_Press = [];
  NanData_Hum = [];
  for (let i=0;i<obj.length-1;i++){
    let Info_ = obj[i].split('xxx')
    NanData_Time.push(Info_[0]+'-'+padLeft(Info_[1],2)+'-'+padLeft(Info_[2],2)+' '+padLeft(Info_[3],2)+':'+padLeft(Info_[4],2)+':'+padLeft(Info_[5],2));
    NanData_Press.push(parseFloat(Info_[6]));
    NanData_Hum.push(parseFloat(Info_[7]));
    NanData_Temp.push(parseFloat(Info_[8]));
    if (i==obj.length-2){
      for (let j=0;j<StationInfo[1].sensors.length;j++){
        let DivChose = select('#NowTemp'+StationInfo[1].sensors[j]);
        DivChose.html('最新數值: '+'<br/>'+Info_[j+6]+StationInfo[1].unit[j]);
      }
    }
  }
  Nan_DrawUpdate();
}

function DataArrange(obj){
  AllData_Temp1 = [];
  AllData_Temp2 = [];
  AllData_Temp3 = [];
  AllData_Temp4 = [];
  AllData_Time = [];
  AllData_Press = [];
  AllData_Hum1 = [];
  AllData_Hum2 = [];
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
    DataSolit[10] = parseFloat(DataSolit[10])/100.;
    AllData_Temp1.push(parseFloat(DataSolit[6]));
    AllData_Temp2.push(parseFloat(DataSolit[7]));
    AllData_Temp3.push(parseFloat(DataSolit[8]));
    AllData_Temp4.push(parseFloat(DataSolit[9]));
    AllData_Press.push(DataSolit[10]);
    AllData_Hum1.push(parseFloat(DataSolit[11]));
    AllData_Hum2.push(parseFloat(DataSolit[12]));
    if (i==obj.length-2){
      for (let j=0;j<StationInfo[0].sensors.length;j++){
        let DivChose = select('#NowTemp'+StationInfo[0].sensors[j]);
        DivChose.html('最新數值: '+'<br/>'+DataSolit[j+6]+StationInfo[0].unit[j]);
      }
    }

  }

  // console.log(obj);
  DrawUpdate();
}

function UpdateData(NewObj){
  // console.log(NewObj);
  let DataSolit = NewObj.split(' \t');
  if (AllData_Time.length>=1800) {
    AllData_Time.splice(0,1);
    AllData_Temp1.splice(0,1);
    AllData_Temp2.splice(0,1);
    AllData_Temp3.splice(0,1);
    AllData_Temp4.splice(0,1);
    AllData_Press.splice(0,1);
    AllData_Hum1.splice(0,1);
    AllData_Hum2.splice(0,1);
  }
  AllData_Time.push(DataSolit[0]+'-'+padLeft(DataSolit[1],2)+'-'+padLeft(DataSolit[2],2)+' '+padLeft(DataSolit[3],2)+':'+padLeft(DataSolit[4],2)+':'+padLeft(DataSolit[5],2))
  AllData_Temp1.push(parseFloat(DataSolit[6]));
  AllData_Temp2.push(parseFloat(DataSolit[7]));
  AllData_Temp3.push(parseFloat(DataSolit[8]));
  AllData_Temp4.push(parseFloat(DataSolit[9]));
  DataSolit[10] = parseFloat(DataSolit[10])/100.;
  AllData_Press.push(DataSolit[10]);
  AllData_Hum1.push(parseFloat(DataSolit[11]));
  AllData_Hum2.push(parseFloat(DataSolit[12]));

  for (let j=0;j<StationInfo[0].sensors.length;j++){
    let DivChose = select('#NowTemp'+StationInfo[0].sensors[j]);
    DivChose.html('最新數值: '+'<br/>'+DataSolit[j+6]+StationInfo[0].unit[j]);
  }

  DrawUpdate();
}

function Nan_UpdateData(NewObj){
  if (NanData_Time.length>=1600){
    NanData_Time.splice(0,1);
    NanData_Press.splice(0,1);
    NanData_Hum.splice(0,1);
    NanData_Temp.splice(0,1);
  }
  let Info_ = NewObj.split('xxx')
  NanData_Time.push(Info_[0]+'-'+padLeft(Info_[1],2)+'-'+padLeft(Info_[2],2)+' '+padLeft(Info_[3],2)+':'+padLeft(Info_[4],2)+':'+padLeft(Info_[5],2));
  NanData_Press.push(parseFloat(Info_[6]));
  NanData_Hum.push(parseFloat(Info_[7]));
  NanData_Temp.push(parseFloat(Info_[8]));
  for (let j=0;j<StationInfo[1].sensors.length;j++){
    let DivChose = select('#NowTemp'+StationInfo[1].sensors[j]);
    DivChose.html('最新數值: '+'<br/>'+Info_[j+6]+StationInfo[1].unit[j]);
  }
  Nan_DrawUpdate();
}

function DrawUpdate(){
  trace1 = {
    x: AllData_Time,
    y: AllData_Temp1,
    type: 'scatter',
    line: LineStyle
  };
  trace2 = {
    x: AllData_Time,
    y: AllData_Temp2,
    type: 'scatter',
    line: LineStyle
  };
  trace3 = {
    x: AllData_Time,
    y: AllData_Temp3,
    type: 'scatter',
    line: LineStyle
  };
  trace4 = {
    x: AllData_Time,
    y: AllData_Temp4,
    type: 'scatter',
    line: LineStyle
  };
  trace5 = {
    x: AllData_Time,
    y: AllData_Press,
    type: 'scatter',
    line: LineStyle
  };
  trace6 = {
    x: AllData_Time,
    y: AllData_Hum1,
    type: 'scatter',
    line: LineStyle
  };
  trace7 = {
    x: AllData_Time,
    y: AllData_Hum2,
    type: 'scatter',
    line: LineStyle
  };
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[0], [trace1],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[1], [trace2],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[2], [trace3],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[3], [trace4],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[4], [trace5],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[5], [trace6],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[0].sensors[6], [trace7],layout);
}

function Nan_DrawUpdate(){

  let Nan_trace1 = {
    x: NanData_Time,
    y: NanData_Press,
    type: 'scatter',
    line: LineStyle
  };
  let Nan_trace2 = {
    x: NanData_Time,
    y: NanData_Hum,
    type: 'scatter',
    line: LineStyle
  };
  let Nan_trace3 = {
    x: NanData_Time,
    y: NanData_Temp,
    type: 'scatter',
    line: LineStyle
  };
  Plotly.newPlot('PlotDiv'+StationInfo[1].sensors[0], [Nan_trace1],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[1].sensors[1], [Nan_trace2],layout);
  Plotly.newPlot('PlotDiv'+StationInfo[1].sensors[2], [Nan_trace3],layout);

}
