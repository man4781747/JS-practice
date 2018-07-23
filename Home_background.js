function Go() {
  MakeTitle();
  MakeMainWindow(AllElement);
}

function ReFlash() {
  let Select_Div_1 = selectAll('.Title');
  for (let i=0;i<Select_Div_1.length;i++) {
    Select_Div_1[i].size(windowWidth,Select_Div_1[i].height)
  }
  let Select_MainWindow = selectAll('.MainWindow');
  Select_MainWindow[0].remove();
  MakeMainWindow(AllElement);
}

function MakeLeftWindow() {
  this.DivLeft = createDiv('');
  this.DivLeft.size(240, 2000);
  this.DivLeft.class('Div_Left');
  this.DivLeft.position(0,70);
  this.DivLeft.style('background-color', 'rgba(200, 200, 200, 0.1)');
  this.DivLeft.mouseOver(x => this.DivLeft.style('background-color', 'rgb(20, 20, 20, 0.2)'));
  this.DivLeft.mouseOut(x => this.DivLeft.style('background-color', 'rgba(200, 200, 200, 0.2)'));
  test = createP('test');
  test.parent(this.DivLeft);
}
