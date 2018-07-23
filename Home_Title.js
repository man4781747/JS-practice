function MakeTitle() {
  this.Div_1 = createDiv('');
  this.Div_1.size(windowWidth, 70);
  this.Div_1.class('Title');
  this.Div_1.style('background-color', 'rgb(189, 88, 44)');
  this.Div_1.style('box-shadow', '5px 10px 30px gray');
  this.Div_1.position(0, 0);
  this.Div_1.id('Title-0');
  this.Div_1_ = createDiv('');
  this.Div_1_.size(windowWidth, 10);
  this.Div_1_.position(0, 60);
  this.Div_1_.style('background-color', 'rgb(228, 131, 18)')
  this.Div_1_.class('Title');
  this.Div_1_.id('Title-1');

  MakeHomeButton(this.Div_1);
  MakeListButton(this.Div_1);
}


function MakeHomeButton(ParentDiv) {
  this.HomeButton = createDiv('Home test');
  this.HomeButton.id('HomeButton');
  this.HomeButton.parent(ParentDiv);
  this.HomeButton.style('background-color', 'rgb(100, 100, 100)')
  this.HomeButton.size(40*1.6, 40);
  this.HomeButton.position(60, 10);
  this.HomeButton.mouseOver(x => this.HomeButton.style('background-color', 'rgb(200, 200, 200)'))
  this.HomeButton.mouseOut(x => this.HomeButton.style('background-color', 'rgb(100, 100, 100)'))
  this.HomeButton.mousePressed(x => location.assign(HomePath));
}

function MakeListButton(ParentDiv) {
  this.List = createDiv('List test');
  this.List.id('ListButton');
  this.List.parent(ParentDiv);
  this.List.style('background-color', 'rgb(100, 100, 100)')
  this.List.size(40, 40);
  this.List.position(10, 10);
  this.List.mouseOver(x => this.List.style('background-color', 'rgb(200, 200, 200)'))
  this.List.mouseOut(x => this.List.style('background-color', 'rgb(100, 100, 100)'))
  this.List.mousePressed(x => ListButtonEvent());
}

function ListButtonEvent() {
  if (select('#List') !=null) {
    select('#List').remove();
  } else {
    MakeList()
    console.log(select('#List'));
  }
  ReFlash();
}
