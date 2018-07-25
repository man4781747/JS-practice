var ListWidth
var Page = 'Home';
//if (select('#List') !=null) {
//  ListWidth = 240;
//}

function MakeMainWindow(AllElementInsied) {
  this.MainWindow = createDiv('');
  this.MainWindow.class('MainWindow');
  this.MainWindow.id('MainWindow'+0);

  if (select('#List') !=null) {
    ListWidth = 240;
  } else {
    ListWidth = 0;
  }

  this.MainWindow.size(windowWidth-ListWidth, windowHeight-100);
  this.MainWindow.position(ListWidth,document.getElementById('Title-1').offsetTop+30);
  this.MainWindow.style('background-color', 'rgba(200, 200, 200, 0.1)');
  this.MainWindow.style('overflow-y', 'hidden');
  this.MainWindow.style('overflow-x', 'hidden');
  //this.MainWindow.mouseOver(x => this.MainWindow.style('background-color', 'rgb(20, 20, 20, 0.2)'));
  //this.MainWindow.mouseOut(x => this.MainWindow.style('background-color', 'rgba(200, 200, 200, 0.2)'));

  //this.test_obj = createElement('object');
  //this.test_obj.id = 'obj1';
  //this.test_obj.class('test');
  //this.test_obj.data = "./practice-6-maze/index.html";
  //this.test_obj.parent(this.MainWindow);
  //this.test_obj.size();
  //console.log(selectAll('.test')[0]);
  //console.log(document.getElementById('obj1'));

  WhatIsInTheMainWindow(AllElementInsied);
  //document.getElementById('obj1').style.width = document.getElementById('MainWindow'+0).width + 'px';
  //document.getElementById('obj1').style.overflowY = 'hidden';

  //MakeHyperlinksDiv(AllElementInsied, document.getElementById('MainWindow'+0));
  //this.MainWindow.size(windowWidth-240, test_num);
}

function WhatIsInTheMainWindow(AllElementInsied) {
  if (Page=='Home') {
    MakeHyperlinksDiv(AllElementInsied, document.getElementById('MainWindow'+0));
  } else if (Page=='Maze') {
    document.getElementById('MainWindow'+0).innerHTML='<object id="obj1" type="text/html" data="./practice-6-maze/index.html" ></object>';
    document.getElementById('obj1').style.height = document.getElementById('MainWindow'+0).height+ 'px';
    document.getElementById('obj1').style.width = '1000px';
    document.getElementById('obj1').style.position = 'relative';
    document.getElementById('obj1').style.left = '10px';
    document.getElementById('obj1').style.top = '10px';
  }
}



function MakeHyperlinksDiv(AllElementInsied, ParentDiv) {
  let WindowInsideNum = floor(ParentDiv.offsetWidth/210.);
  //let WindowInsideNum_count = floor(windowWidth/210.);
  let WindowLeft = (ParentDiv.offsetWidth - 210*WindowInsideNum)/2;
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
    //this.HyperlinksDiv.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)');
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
    //this.HyperlinkDiv.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)');
    this.HyperlinkDiv.style('background-color', 'rgb(255, 255, 255, 0.2)');
    this.HyperlinkDiv.parent(ParentDiv);


    let ThisDivSelect = select('#ID: '+ElementInside[i]);
    //ThisDivSelect.style('borderWidth', '0px');
    //ThisDivSelect.style('borderStyle', "solid");
    ThisDivSelect.style('boxShadow', "0px 0px 1px 2px rgb(200, 200, 200) inset");
    //ThisDivSelect.style('borderColor', 'rgb(240, 240, 240)');
    //ThisDivSelect.mousePressed(x => location.assign(AllElementPath[i]));
    ThisDivSelect.mousePressed(x => Page='Maze');
    //ThisDivSelect.mouseOver(x => ThisDivSelect.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)'));
    //ThisDivSelect.mouseOut(x => ThisDivSelect.style('background-color', 'rgb('+random(0,255)+', '+random(0,255)+', '+random(0,255)+', 0.2)'));
    ThisDivSelect.mouseOver(x => ThisDivSelect.style('background-color', 'rgb(200, 200, 200, 0.2)'));
    ThisDivSelect.mouseOut(x => ThisDivSelect.style('background-color', 'rgb(255, 255, 255, 0.2)'));

    //this.HyperlinkDiv_P = createP('ID:' + ElementInside[i])
    //this.HyperlinkDiv_P.parent(document.getElementById('ID: '+ElementInside[i]));
    //this.HyperlinkDiv_P.style('textAlign', 'center');
    //this.HyperlinkDiv_P.style('margin-top', '10px');
    try {
      this.HyperlinkDiv_Image = createImg(AllElementImage[i]);
    } catch {
      this.HyperlinkDiv_Image = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg');
    }
    //this.HyperlinkDiv_Image = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg');
    this.HyperlinkDiv_Image.parent(this.HyperlinkDiv);
    this.HyperlinkDiv_Image.size(200, 118);
    this.HyperlinkDiv_Image.position(5, 50);

    this.HyperlinkDiv_B = createElement('h1',ElementInside[i])
    this.HyperlinkDiv_B.id('B_ID: '+ElementInside[i])
    this.HyperlinkDiv_B.parent(document.getElementById('ID: '+ElementInside[i]));
    //let B_chose = document.getElementById('B_ID: '+ElementInside[i]);
    let B_chose = select('#B_ID: '+ElementInside[i]);
    console.log(B_chose);
    //B_chose.style.textAlign = 'center'
    //B_chose.style.backgroundColor="#00FF00"
    B_chose.style('textAlign', 'center');
    B_chose.style('margin-top', '0px');
    B_chose.style('fontSize', '20px');
    //B_chose.style('background-color', 'rgb(20, 250, 255, 0.2)');
  }


  //this.HyperlinkDiv = createImg('http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg');
  //this.HyperlinkDiv.parent(ParentDiv);
  //this.HyperlinkDiv.size(210, 118);
//http://d.blog.xuite.net/d/9/4/0/22726534/blog_1658008/txt/26105228/23.jpg
}
