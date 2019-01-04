var PreviewPicDiv;
var PreviewPicDiv_630NM, PreviewPicDiv_557NM, PreviewPicDiv_EMPTY;
var SliderTest;



function BuildPreviewPicDiv() {
  createDiv().id('ChosePreviewPicDiv')
  SliderTest = createSlider(0, (FileNameListAll.length-1)*20, 1);
  SliderTest.position(windowWidth/2-SliderTest.size().width/2, windowHeight-100);
  SliderTest.value(0);
  SliderTest.hide();

  PreviewPicDiv = createDiv();

  PreviewPicDiv.id('PreviewPicDiv');
  PreviewPicDiv_630NM = createDiv();
  PreviewPicDiv_630NM.parent(PreviewPicDiv);
  PreviewPicDiv_557NM = createDiv();
  PreviewPicDiv_557NM.parent(PreviewPicDiv);
  PreviewPicDiv_EMPTY = createDiv();
  PreviewPicDiv_EMPTY.parent(PreviewPicDiv);

  for (let i=0;i<FileNameListAll.length;i++) {
    let DirTest = createImg('http://'+FileNameListAll[i][0]);
    DirTest.id('Test_630NM'+i);
    DirTest.class('TestClass_630NM');
    DirTest.parent(PreviewPicDiv_630NM);

    DirTest = createImg('http://'+FileNameListAll[i][1]);
    DirTest.id('Test_557NM'+i);
    DirTest.class('TestClass_557NM');
    DirTest.parent(PreviewPicDiv_557NM);

    DirTest = createImg('http://'+FileNameListAll[i][2]);
    DirTest.id('Test_MEPTY'+i);
    DirTest.class('TestClass_EMPTY');
    DirTest.parent(PreviewPicDiv_EMPTY);
  }
  PreviewPicDiv_630NM.style('width', 75*FileNameListAll.length+'px');
  PreviewPicDiv_557NM.style('width', 75*FileNameListAll.length+'px');
  PreviewPicDiv_EMPTY.style('width', 75*FileNameListAll.length+'px');

}
