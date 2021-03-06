var fs = require('fs');
var cors = require('cors')
var express = require("express");
var app = express();
var AllTempData = [];
app.use(cors())
var server = app.listen(3000, x => console.log('express Listen on 3000'));
var socket = require('socket.io');
var io = socket(server);
console.log('Server socket 3000');

var TempDataMaxLen = 1800;

app.use('/Go',express.static('C:/Users/owo/Documents/GitHub/JS-practice'), x => console.log('進入資料夾: C:/Users/owo/Documents/GitHub/JS-practice'));

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

app.get('/user/:id', function (req, res) {
  res.send('Hello World!');
  console.log('有人要GET /user/:id 的資料');
});


app.post('/user/:id', function (req, res) {
  console.log('有人要POST資料進入 /user/:id ');
  console.log(req.headers)
  res.send('OK!!');
});

app.post('/matlab/:id', function (req, res) {
  let InfoGet = req.headers.test.split(' \t');
  fs.appendFile('Ching-Ling.txt', req.headers.test+'\n');
  io.emit('NewData', ['Ching-Ling', req.headers.test]);
  res.send('OK!!');
});

app.post('/PythonPost/:id', function (req, res) {
  fs.appendFile('Nan-Ying.txt', req.headers.sensorinfo+'\n');
  console.log('Nan-Ying')
  io.emit('NewData', ['Nan-Ying', req.headers.sensorinfo]);
  res.send('OK!!');
});

io.on('connection', newConnection);
function newConnection(socket) {
	console.log('New connect: '+socket.id);
  socket.on('ConnectIn', function(msg) {
    console.log(msg.who +  '說: ' + msg);
  });
  socket.emit('SomeOneConnect', 'SomeOneConnect')
  socket.on('MsgSent', function(msg) {
    console.log(msg.who + '說: ' + msg.say);
    //io.emit('NewMsg', msg);
    socket.broadcast.emit('NewMsg', msg);
    socket.emit('NewMsgMe', msg);
  });

  socket.on('RequestLast600Data', function(msg){
    console.log('有人要求溫度資料!!!!');
    fs.readFile(msg[0]+'.txt', function(err, data) {
      if (err) throw err;
      let AllData = data.toString().split('\n');
      let SendData = [];
      let DataLen = msg[1];
      if (AllData.length < msg){
        DataLen = AllData.length;
      }
      for (let i=AllData.length-DataLen;i<AllData.length;i++){
        SendData.push(AllData[i]);
      }
      socket.emit('LastData', [msg[0], SendData]);
    });

    // fs.readFile('Ching-Ling.txt', function (err, data) {
    //     if (err) throw err;
    //     let AllData = data.toString().split('\n');
    //     let SendData = [];
    //     let DataLen = msg[1];
    //     if (AllData.length < msg){
    //       DataLen = AllData.length;
    //     }
    //     for (let i=AllData.length-DataLen;i<AllData.length;i++){
    //       SendData.push(AllData[i]);
    //     }
    //     socket.emit('Last600Data', SendData);
    // });
    //
    // fs.readFile('Nan-Ying.txt', function (err, data) {
    //     if (err) throw err;
    //     let AllData = data.toString().split('\n');
    //     let SendData = [];
    //     let DataLen = msg[1];
    //     if (AllData.length < msg){
    //       DataLen = AllData.length;
    //     }
    //     for (let i=AllData.length-DataLen;i<AllData.length;i++){
    //       SendData.push(AllData[i]);
    //     }
    //     socket.emit('Last600Data_nan', SendData);
    // });

  });

/*
  socket.on('MsgSentMe', function(msg) {
    console.log(msg.who + '說: ' + msg.say);
    socket.brocast.emit('NewMsg', msg);
    //io.emit('NewMsg', msg)
  });
*/
}

/*
io.on('connection', (socket) => {
  console.log('New connect: '+socket.id);
  setTimeout(() => socket.disconnect(true), 5000);
});
*/
/*
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
*/
