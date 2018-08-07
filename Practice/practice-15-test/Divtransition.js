var MainDiv;

function setup() {
  noCanvas();
  MainWindowDiv = createDiv('test');
  MainWindowDiv.id('MainWindowDiv');
  MainWindowDiv.size(floor(windowWidth/210)*210, 100)
  MainWindowDiv.position(windowWidth/2-floor(windowWidth/210)*105)


  for (let i=0;i<TestData.length;i++){
    MainDiv = createDiv(i);
    MainDiv.class('MainDiv')
    MainDiv.parent(MainWindowDiv);
    MainDiv.position((i%floor(windowWidth/210))*210,floor(i/floor(windowWidth/210))*300);

  }

}


function draw() {
}


function windowResized() {
  MainWindowDiv.size(floor(windowWidth/210)*210, 100)
  MainWindowDiv.position(windowWidth/2-floor(windowWidth/210)*105)
  MainDivSelectAll = selectAll('.MainDiv');
  for (let i=0;i<MainDivSelectAll.length;i++){
    MainDivSelectAll[i].position((i%floor(windowWidth/210))*210,floor(i/floor(windowWidth/210))*300);
  }
}
