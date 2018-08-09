function MakeList(){
  var MainListDiv;
  var MouseStatus = 'No';
  var OutOfListDiv;
  MainListDiv = createDiv();
  MainListDiv.id('MainListDiv');

  OutOfListDiv = createDiv()
  OutOfListDiv.id('OutOfListDiv');

  Button = createButton('test');
  Button.id('Button');
  // Button.parent(OutOfListDiv);

  for (let i=0;i<TestData.length;i++){
      let MainDiv = createDiv(i);
      MainDiv.class('ListChoseDivs')
      MainDiv.parent(MainListDiv);
      MainDiv.style('transition-delay', (i*0.05) +'s')
  }
  Button.mousePressed(x => {
    if (MouseStatus == 'No') {
      MainListDiv.style('width', '250px');
      MainDivSelectAll = selectAll('.ListChoseDivs')
      for (let i=0;i<MainDivSelectAll.length;i++){
        MainDivSelectAll[i].style('bottom', '0vh')
      }
      OutOfListDiv.style('width', 'calc(100% - 250px)');
      OutOfListDiv.style('left', '250px');
      MouseStatus = 'Yes'

    } else {
      MainListDiv.style('width', '0px');
      MainDivSelectAll = selectAll('.ListChoseDivs')
      for (let i=0;i<MainDivSelectAll.length;i++){
        MainDivSelectAll[i].style('bottom', '-100vh')
      }

      OutOfListDiv.style('left', '0px');
      OutOfListDiv.style('width', '100%');
      MouseStatus = 'No'
    }
    MainWindowResiz();
  })
}
