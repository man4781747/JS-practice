function MakeSpeakWindow(Msg, Who){
  let SpeakWindow = createDiv();
  SpeakWindow.addClass('SpeakWindow');
  SpeakWindow.parent(select('#ChartDivB3'));
  //SpeakWindow.position(0,0)
  SpeakWindow.size(windowWidth-60,100)
  //document.getElementById('Divtest').align = 'center'
  //SpeakWindow.style('background-color', 'rgb(255, 255, 255)')
  //SpeakWindow.style('float', 'right')
  SpeakWindow.style('margin', '10px')

  SpeakWindowIn = createDiv();
  SpeakWindowIn.addClass('SpeakWindowIn');
  SpeakWindowIn.parent(SpeakWindow);
  SpeakWindowP = createP(Msg);
  SpeakWindowP.parent(SpeakWindowIn);
  SpeakWindowP.style('margin', '5px')
  //SpeakWindowIn.size(200,100)
  SpeakWindowIn.style('background-color', 'rgb(255, 255, 255)')
  SpeakWindowIn.style('border-radius', '5px')
  SpeakWindowIn.style('margin-right', '10px')
  SpeakWindowIn.style('margin-left', '10px')
  SpeakWindowIn.style('maxWidth', '800px')
  SpeakWindowIn.style('minWidth', '15px')
  SpeakWindowIn.style('minHeight', '25px')
  SpeakWindowIn.style('wordBreak', 'break-all')
  SpeakWindowIn.style('transition', 'all 0.5s');
  SpeakWindow.size(windowWidth-60,SpeakWindowIn.size().height)
  //console.log(SpeakWindowIn.size().height);
  if (Who == 'Me') {
    SpeakWindowIn.style('float', 'right')
  } else {
    SpeakWindowIn.style('float', 'left')
  }
  document.getElementById("ChartDivB3").scrollTop = document.getElementById("ChartDivB3").scrollHeight+20;

}

function ResizeSpeakWindow(){
  let SelectAllSpeakWindowIn = selectAll('.SpeakWindowIn');
  let SelectAllSpeakWindow = selectAll('.SpeakWindow');
  //console.log(SelectAllSpeakWindowIn[0].parent());
  for (let i=0;i<SelectAllSpeakWindowIn.length;i++){
    console.log(windowWidth-60, SelectAllSpeakWindow[i].size().height);
    SelectAllSpeakWindow[i].size(windowWidth-60, SelectAllSpeakWindowIn[i].size().height);
  }
}
