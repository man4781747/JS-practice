//var MakeTitle_ = new p5(MakeTitle, 'test');
//var HomeButton = new p5(MakeHomeButton, 'HomeButton');
//var PageLeft = new p5(MakePageLeft, 'HomeButton');
//console.log(MakeTitle_);
//MakeTitle_ = MakeTitle();
//function windowResized() {}
var socket;

var AllElement = ['練習-1: 亂數迷宮產生' ,'練習-2: 亂數迷宮產生(六角)' ,'練習-3: A*', '練習-4: 亂數迷宮+A*',
                  '測試用 無東西-1','測試用 無東西-2','測試用 無東西-3','測試用 無東西-4','測試用 無東西-5',
                  '測試用 無東西-6','測試用 無東西-7','測試用 無東西-8','測試用 無東西-9','測試用 無東西-10',
                  '測試用 無東西-11','測試用 無東西-12'];
var HomePath = 'http://140.116.24.84:3000/Go/'
var AllElementPath = [HomePath+'practice-6-maze/index.html',
                      HomePath+'practice-6.2-maze-Hexagon/index.html',
                      HomePath+'practice-7-AStart/index.html',
                      HomePath+'practice-8-AStartAndMaze/index.html',
                      '測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西','測試用 無東西'
                      ]

var AllElementImage = ['./image/practice_6_maze.PNG',
                       './image/practice_6.5_maze.PNG',
                       './image/AStart.PNG',
                       './image/maze+astar.PNG'
]

function AllElement_(data) {
  console.log(data);
}

function setup() {
  loadJSON('http://140.116.24.84:3000/Go/AllElements.json',AllElement_);



  socket = io.connect('http://140.116.24.84:3000/Go/')
  socket.emit('test_1', 12);
  socket.emit('test_2', 24);
  noCanvas();
  Go();
}

function draw() {
}

function windowResized() {
  ReFlash();
}
