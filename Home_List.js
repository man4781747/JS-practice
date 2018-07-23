function MakeList() {
  this.List = createDiv('');
  this.List.id('List');
  this.List.style('background-color', 'rgb(100, 100, 100)');
  this.List.style('overflow-y', 'auto');
  this.List.style('overflow-x', 'hidden');
  //this.List.style('::-webkit-scrollbar', '100px');
  this.List.size(240, windowHeight - 70);
  this.List.position(0, 70);
  //this.List.mouseOver(x => this.List.style('background-color', 'rgb(200, 200, 200)'));
  //this.List.mouseOut(x => this.List.style('background-color', 'rgb(100, 100, 100)'));
  MakeListAs(this.List);
}

function MakeListAs(ParentDiv) {
  for (let i=0;i<AllElement.length;i++){
    let A = createDiv('')
    A.parent(ParentDiv);
    A.id('ID: ListA'+i);
    A.class('Class: ListA'+i);
    let AChose = select('#ID: ListA'+i);

    AChose.size(240, 40);
    AChose.position(0, 40*i);
    //AChose.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)');
    AChose.style('background-color', 'rgb(235, 235, 235)');
    AChose.style('boxShadow', "0px 0px 1px 2px rgb(200, 200, 200) inset");
    AChose.mouseOver(x => AChose.style('background-color', 'rgb(200, 200, 200)'));
    AChose.mouseOut(x => AChose.style('background-color', 'rgb(235, 235, 235)'));
    AChose.mousePressed(x => location.assign(AllElementPath[i]));
    let ListA_P = createP(AllElement[i]);
    ListA_P.parent(AChose);
    //ListA_P.style('fontFamily', 'Microsoft JhengHei');
    ListA_P.style('fontFamily', '微軟正黑體');
    //AChose.mouseOver(x => console.log(AChose));
    //console.log(i, AChose);
  }
}
