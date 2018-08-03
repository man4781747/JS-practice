var cors = require('cors')
var express = require("express");
var app = express();
app.use(cors())
var server = app.listen(3000, x => console.log('express Listen on 3000'));

//app.use('/Go',express.static('C:/Users/owo/Documents/GitHub/JS-practice/Node/test/public'));
app.use('/Go',express.static('C:/Users/owo/Documents/GitHub/JS-practice'), x => console.log('進入資料夾: C:/Users/owo/Documents/GitHub/JS-practice'));
//app.use('/test');


app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get('/user/:id', function (req, res) {
  res.send('Hello World!');
  console.log('有人要GET /user/:id 的資料');
});


app.post('/user/:id', function (req, res) {
  console.log('有人要POST資料進入 /user/:id ');
  console.log(req.client.parser)
  if (req.headers.testheaders) {
    //io.emit('python_test', req.headers.testheaders);
    io.emit('python_test', req.server);
  }

  res.send('OK!!');
});

var socket = require('socket.io');
var io = socket(server);
console.log('Server socket 3000');


var ConnectList = []

io.on('connection', newConnection);
function newConnection(socket) {
	console.log('New connect: '+socket.id);
  socket.on('ConnectIn', function(msg) {
    console.log(msg.who +  '說: ' + msg);
  });
  socket.emit('SomeOneConnect', 'SomeOneConnect')
  socket.on('MsgSent', function(msg) {
    console.log(msg.who + '說: ' + msg.say);
    io.emit('NewMsg', msg)
  });
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
