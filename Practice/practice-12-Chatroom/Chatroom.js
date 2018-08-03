var socket;
var ChartDiv,PMsg,DivMsg,InputMsg;
function setup() {

  MakeMainWindow();
  for (let i=0;i<10;i++){
    MakeSpeakWindow(i,'Me');
  }
  for (let i=0;i<10;i++){
    MakeSpeakWindow(i,'nMe');
  }
  /*
  InputMsg = createInput('你想說啥');
  InputMsg.id('InputMsg');
  InputMsg.position(10, 600);
  InputMsg.size(300,20);
  InputMsg.changed(x => MsgSent());

  InputWho = createInput('路人');
  InputWho.position(10, 620);
  InputWho.size(50,20);
  ButtonMsg = createButton('確認');
  ButtonMsg.position(260, 620);
  ButtonMsg.size(50,20);

  ButtonMsg.mousePressed(x => MsgSent())

  socket = io.connect('http://140.116.24.84:3000')
  socket.emit('ConnectIn', '我連進來拉');
  socket.on('NewMsg',(obj) => WhenMsgGet(obj));
  socket.on('python_test', (obj) => createDiv(obj) )

  //socket.on('SomeOneConnect', (obj) => createP(obj));
  */
}

function draw() {

}
/*
function MsgSent(){
  let test = {'who':InputWho.value(),'say':InputMsg.value()};
  socket.emit('MsgSent', test);
  let test2 = document.getElementById("InputMsg");
  console.log(test2);
  test2.value= '';
}

function WhenMsgGet(obj){

  let PDivMake = createDiv(obj.who + '說: ' + obj.say);
  //let test = select('#ChartDiv');
  PDivMake.parent(ChartDiv);
  PDivMake.style('maxWidth', '300px')
  PDivMake.style('wordBreak', 'break-all')
  PDivMake.style('marginBottom', '20px')
  //PDivMake.size(300,20);
  let test = document.getElementById("ChartDiv");
  test.scrollTop = test.scrollHeight+20;
  console.log(test.scrollHeight);
}
*/
