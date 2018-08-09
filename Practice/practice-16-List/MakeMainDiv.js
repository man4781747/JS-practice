var MainWindowDiv;
function MakeMainWindow(){
  MainWindowDiv = createDiv();
  let OutOfListDivWidth = document.getElementById('OutOfListDiv').offsetWidth
  MainWindowDiv.parent(OutOfListDiv);
  MainWindowDiv.id('MainWindowDiv');
  MainWindowDiv.size(floor(OutOfListDivWidth/210)*210, 100)
  MainWindowDiv.position(OutOfListDivWidth/2-floor(OutOfListDivWidth/210)*105)

  for (let i=0;i<TestData.length;i++){
      let MainDiv = createDiv();
      MainDiv.class('MainDiv')
      MainDiv.parent(MainWindowDiv);
      MainDiv.position((i%floor(OutOfListDivWidth/210))*210,floor(i/floor(OutOfListDivWidth/210))*300);

      MainDiv.style('animation-delay', '0s, ' + (0.5 + Math.random()) + 's')
      MainDiv.mouseOver(x => {
        MainDiv.position((i%floor(OutOfListDivWidth/210))*210-10,floor(i/floor(OutOfListDivWidth/210))*300-10);
      })
      MainDiv.mouseOut(x => {
        MainDiv.position((i%floor(OutOfListDivWidth/210))*210,floor(i/floor(OutOfListDivWidth/210))*300);
      })
  }
}

function MainWindowResiz() {
  // setTimeout(function(){
  //   let OutOfListDivWidth = document.getElementById('OutOfListDiv').offsetWidth
  //   MainWindowDiv.size(floor(OutOfListDivWidth/210)*210, 100)
  //   MainWindowDiv.position(OutOfListDivWidth/2-floor(OutOfListDivWidth/210)*105)
  //   MainDivSelectAll = selectAll('.MainDiv');
  //   for (let i=0;i<MainDivSelectAll.length;i++){
  //     MainDivSelectAll[i].position((i%floor(OutOfListDivWidth/210))*210,floor(i/floor(OutOfListDivWidth/210))*300);
  //   }
  // }, 500);
  let OutOfListDivWidth = document.getElementById('OutOfListDiv').offsetWidth
  MainWindowDiv.size(floor(OutOfListDivWidth/210)*210, 100)
  MainWindowDiv.position(OutOfListDivWidth/2-floor(OutOfListDivWidth/210)*105)
  MainDivSelectAll = selectAll('.MainDiv');
  for (let i=0;i<MainDivSelectAll.length;i++){
    MainDivSelectAll[i].position((i%floor(OutOfListDivWidth/210))*210,floor(i/floor(OutOfListDivWidth/210))*300);
  }
}

function windowResized() {
  MainWindowResiz()
}
