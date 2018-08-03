
function MakeSpeakWindow(Msg, Who){
  SpeakWindow = createDiv();
  SpeakWindow.class = 'SpeakWindow';
  SpeakWindow.parent(select('#ChartDivB3'));
  //SpeakWindow.position(0,0)
  SpeakWindow.size(windowWidth-40,100)
  //document.getElementById('Divtest').align = 'center'
  SpeakWindow.style('background-color', 'rgb(255, 255, 255)')
  //SpeakWindow.style('float', 'right')
  SpeakWindow.style('margin', '10px')


  SpeakWindowIn = createDiv(Msg);
  SpeakWindowIn.class = 'SpeakWindowIn';
  SpeakWindowIn.parent(SpeakWindow)
  SpeakWindowIn.size(80,80)
  SpeakWindowIn.style('background-color', 'rgb(55, 55, 55)')
  if (Who == 'Me') {
    SpeakWindowIn.style('float', 'right')
  } else {
    SpeakWindowIn.style('float', 'left')
  }

}
