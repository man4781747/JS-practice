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
  this.Div_1_.position(0,60);
  this.Div_1_.style('background-color', 'rgb(228, 131, 18)')
  this.Div_1_.class('Title');
  this.Div_1_.id('Title-1');
  //this.Div_1_.parent(this.Div_1);
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

function MakeMainWindow(AllElementInsied) {
  this.MainWindow = createDiv('');
  this.MainWindow.class('MainWindow');
  this.MainWindow.id('MainWindow'+0);
  this.MainWindow.size(windowWidth, 10);
  console.log(document.getElementById('Title-1').offsetTop);
  this.MainWindow.position(0,document.getElementById('Title-1').offsetTop+30);
  //this.MainWindow.style('background-color', 'rgba(200, 200, 200, 0.1)');
  //this.MainWindow.mouseOver(x => this.MainWindow.style('background-color', 'rgb(20, 20, 20, 0.2)'));
  //this.MainWindow.mouseOut(x => this.MainWindow.style('background-color', 'rgba(200, 200, 200, 0.2)'));
  MakeHyperlinksDiv(AllElementInsied, document.getElementById('MainWindow'+0));
  //this.MainWindow.size(windowWidth-240, test_num);
}

function MakeHyperlinksDiv(AllElementInsied, ParentDiv) {
  let WindowInsideNum = floor(windowWidth/210.);
  //let WindowInsideNum_count = floor(windowWidth/210.);
  let WindowLeft = (windowWidth - 210*WindowInsideNum)/2;
  let ElementNum = AllElementInsied.length;
  if (WindowInsideNum == 0) {
    WindowInsideNum = 1;
    WindowLeft = 0;
  }

  //this.test = createP(WindowInside+'||'+WindowLeft+'||'+floor(ElementNum/WindowInside));
  //this.test.parent(ParentDiv);
  for (let i=0;i<Math.ceil(ElementNum/WindowInsideNum);i++) {
    //this.HyperlinkDiv = createDiv('HyperlinksDiv'+ i +'/' + floor(ElementNum/WindowInsideNum));
    this.HyperlinksDiv = createDiv('');
    this.HyperlinksDiv.class('HyperlinksDiv');
    this.HyperlinksDiv.id('HyperlinksDiv-'+i);
    this.HyperlinksDiv.size(210*WindowInsideNum, 297);
    this.HyperlinksDiv.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)');
    this.HyperlinksDiv.style('margin-left', WindowLeft+'px');
    this.HyperlinksDiv.parent(ParentDiv);
    let ElementInside = [];
    for (let j = 0;j<WindowInsideNum;j++){
      if (i*WindowInsideNum+j < ElementNum) {
        ElementInside[j] = AllElementInsied[i*WindowInsideNum+j];
      }
    }
    //document.getElementById('test'+i)
    //console.log(document.getElementById('test'+i).offsetTop);
    //console.log(this.HyperlinkDiv.offsetTop);
    MakeHyperlinkDiv(ElementInside, document.getElementById('HyperlinksDiv-'+i));
  }
  //this.HyperlinkDiv = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1  658008/txt/26105228/23.jpg');
  //this.HyperlinkDiv.parent(ParentDiv);
  //this.HyperlinkDiv.size(210, 118);
//http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg
}

function MakeHyperlinkDiv(ElementInside, ParentDiv) {
  for (let i=0;i<ElementInside.length;i++){
    this.HyperlinkDiv = createDiv('');
    this.HyperlinkDiv.class('HyperlinkDiv');
    this.HyperlinkDiv.id('ID: '+ElementInside[i]);
    this.HyperlinkDiv.size(210, 297);
    this.HyperlinkDiv.position(ParentDiv.offsetLeft+i*210, ParentDiv.offsetTop);
    this.HyperlinkDiv.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)');
    this.HyperlinkDiv.parent(ParentDiv);

    this.HyperlinkDiv_Image = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg');
    this.HyperlinkDiv_Image.parent(this.HyperlinkDiv);
    this.HyperlinkDiv_Image.size(210, 118);
    //this.HyperlinkDiv_P = createP(ElementInside[i])
    //this.HyperlinkDiv_P.style('paddingLeft' ,'20px');
    //this.HyperlinkDiv_P.parent(this.HyperlinkDiv);




  }


  //this.HyperlinkDiv = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg');
  //this.HyperlinkDiv.parent(ParentDiv);
  //this.HyperlinkDiv.size(210, 118);
//http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg
}
