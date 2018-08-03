
function MakeMainWindow(){
  noCanvas();
  ChartDivB1 = createDiv('');
  ChartDivB1.size(windowWidth,windowHeight);
  ChartDivB1.id('ChartDivB1');
  ChartDivB1.position(0, 0);
  ChartDivB1.style('overflow-y', 'auto');
  ChartDivB1.style('overflow-x', 'hidden');
  ChartDivB1.style('background-color', 'rgb(189, 147, 96)')

  ChartDivB2 = createDiv('');
  ChartDivB2.size(windowWidth-20,windowHeight-20);
  ChartDivB2.id('ChartDivB2');
  ChartDivB2.style('overflow-y', 'hidden');
  ChartDivB2.style('overflow-x', 'hidden');
  ChartDivB2.parent(ChartDivB1);
  ChartDivB2.position(10, 10);
  ChartDivB2.style('background-color', 'rgb(0, 0, 0)')

  ChartDivB3 = createDiv('');
  ChartDivB3.size(windowWidth-20,windowHeight-100);
  ChartDivB3.id('ChartDivB3');
  ChartDivB3.style('overflow-y', 'auto');
  ChartDivB3.style('overflow-x', 'hidden');
  ChartDivB3.parent(ChartDivB1);
  ChartDivB3.position(10, 10);
  //ChartDivB3.style('background-color', 'rgb(0, 0, 0)')

  //ChartDivB2.mousePressed(x => console.log('test'));
  MakeInputBox(ChartDivB2);
}
function MakeInputBox(ParentDiv) {
  ChartInput = createElement('textarea');
  ChartInput.parent(ParentDiv);
  ChartInput.id('ChartInput');
  document.getElementById('ChartInput').rows = "1"
  let HeightFst = document.getElementById('ChartInput').clientHeight;
  ChartInput.size(windowWidth-20,HeightFst);
  //document.getElementById('ChartInput').width = (windowWidth - 20) + ''
  ChartInput.position(0, ParentDiv.height-ChartInput.height);
  ChartInput.style('background-color', 'rgb(255, 255, 255)')
  ChartInput.style('maxHeight', '100px')
  ChartInput.style('resize', 'none')
  //ChartInput.input(x => AutoGrow(ParentDiv,ChartInput,HeightFst));
  //ChartInput.changed(x => SendMsg());
  ChartInput.input(x => console.log('test'));
}

function SendMsg(){
  MakeSpeakWindow(select('#ChartInput').value());
}

function AutoGrow(InputBoxDiv, InputBox, HeightFst) {
  let InputChoseMaxHeight = Math.max(document.getElementById('ChartInput').scrollHeight, document.getElementById('ChartInput').clientHeight)
  //console.log(document.getElementById('ChartInput').scrollHeight, document.getElementById('ChartInput').clientHeight);

  if (InputChoseMaxHeight>document.getElementById('ChartInput').clientHeight) {
    document.getElementById('ChartInput').style.height = (InputChoseMaxHeight)+'px';
    //console.log(InputBoxDiv.height - InputBox.height - InputChoseMaxHeight+'px')
    if (InputChoseMaxHeight > 100) {
      InputBox.position(0, InputBoxDiv.height- 100);
    } else {
      InputBox.position(0, InputBoxDiv.height- InputChoseMaxHeight);
    }
    //document.getElementById('ChartInput').style.offsetTop = InputBoxDiv.height - InputBox.height - InputChoseMaxHeight+'px';
  } else {
    InputBox.size(windowWidth-20,HeightFst);
    document.getElementById('ChartInput').style.height = Math.max(document.getElementById('ChartInput').scrollHeight, document.getElementById('ChartInput').clientHeight)+'px';
    InputBox.position(0, InputBoxDiv.height-Math.max(document.getElementById('ChartInput').scrollHeight, document.getElementById('ChartInput').clientHeight));
  }
}
