
var express = require("express");
var app = express();

var server = app.listen(3000);

//app.use('/Go',express.static('C:/Users/owo/Documents/GitHub/JS-practice/Node/test/public'));
app.use('/Go',express.static('C:/Users/owo/Documents/GitHub/JS-practice'));
//app.use('/static', express.static('C:/Users/owo/Documents/GitHub'));


app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
//app.use(express.static('public'));
app.get('/user/:id', function (req, res) {
  res.send('Hello World!');
});


app.get("/", function(req, res){
	res.send("Hello World!!");
});

app.get("/mypath", function(req, res){
	res.send("IN THE MYPATH");
})

var socket = require('socket.io');

var io = socket(server);

io.on('connection', newConnection);

function newConnection(socket) {
	console.log('New connect: '+socket.id);
	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
      //console.log(data);
	}
}


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
