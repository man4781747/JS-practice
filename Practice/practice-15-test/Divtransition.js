var MainWindowDiv;

function setup() {
  noCanvas();
  MainWindowDiv = createDiv('test');
  MainWindowDiv.id('MainWindowDiv');
  MainWindowDiv.size(floor(windowWidth/210)*210, 100)
  MainWindowDiv.position(windowWidth/2-floor(windowWidth/210)*105)


  for (let i=0;i<TestData.length;i++){
      let MainDiv = createDiv();
      MainDiv.class('MainDiv')
      MainDiv.parent(MainWindowDiv);
      MainDiv.position((i%floor(windowWidth/210))*210,floor(i/floor(windowWidth/210))*300);

      MainDiv.style('animation-delay', '0s, ' + (0.5 + Math.random()) + 's')
      MainDiv.mouseOver(x => {
        MainDiv.position((i%floor(windowWidth/210))*210-10,floor(i/floor(windowWidth/210))*300-10);
      })
      MainDiv.mouseOut(x => {
        MainDiv.position((i%floor(windowWidth/210))*210,floor(i/floor(windowWidth/210))*300);
      })

      // MainDiv.style('animation-delay', i + 's, 0.5s')
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
