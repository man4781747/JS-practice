var DateChoseGroup;
var SearchButten;
var SelectYear, SelectMonth, SelectDay;


function BuildDateChoseDiv() {
  DateChoseGroup = createDiv();
  DateChoseGroup.id('DateChoseGroupDiv');
  SelectYear = createSelect();
  SelectMonth = createSelect();
  SelectDay = createSelect();
  BuildSelectYear(1);
  SearchButten = createButton('Search');
  SearchButten.position(SelectYear.size().width+SelectMonth.size().width+SelectDay.size().width,0)
  SearchButten.mousePressed(SendSearchRequest);
  SearchButten.parent(DateChoseGroup);
  SearchButten.id('SearchButten')
  DateChoseGroup.style(
    'width',
    SelectYear.size().width+SelectMonth.size().width+SelectDay.size().width+SearchButten.size().width+'px'
  )
  // console.log(location.pathname.split('/'));
  // SelectYear.value(location.pathname.split('/')[3]);
  // SelectMonth.value(location.pathname.split('/')[4]);
  // SelectDay.value(location.pathname.split('/')[5]);
}


function BuildSelectYear(X=0) {
  let nowYear = 0;
  // console.log(AllPicDateList)
  for (let i=0;i<AllPicDateList.length;i++){
    if (nowYear != AllPicDateList[i][0]) {
      nowYear = AllPicDateList[i][0]
      SelectYear.option(AllPicDateList[i][0])
    }
  }
  if (X==1) {
    SelectYear.value(location.pathname.split('/')[3]);
  }
  SelectYear.class('DateChoseGroup');
  SelectYear.changed(BuildSelectMonth);
  SelectYear.parent(DateChoseGroup);
  BuildSelectMonth(1);
}

function BuildSelectMonth(X=0) {
  if (SelectMonth) {
    SelectMonth.remove();
  }
  SelectMonth = createSelect();
  let nowMonth = 0;
  for (let i=0;i<AllPicDateList.length;i++){
    if (SelectYear.value() == AllPicDateList[i][0] &
        nowMonth != AllPicDateList[i][1]) {
      nowMonth = AllPicDateList[i][1]
      SelectMonth.option(AllPicDateList[i][1])
    }
  }
  if (X==1) {
    SelectMonth.value(location.pathname.split('/')[4]);
  }
  SelectMonth.class('DateChoseGroup');
  SelectMonth.changed(BuildSelectDay);
  SelectMonth.parent(DateChoseGroup);
  BuildSelectDay(1);
}

function BuildSelectDay(X=0) {
  if (SelectDay) {
    SelectDay.remove();
  }
  SelectDay = createSelect();
  let nowDay = 0;
  for (let i=0;i<AllPicDateList.length;i++){
    if (SelectMonth.value() == AllPicDateList[i][1] & nowDay != AllPicDateList[i][2]) {
      nowDay = AllPicDateList[i][2]
      SelectDay.option(AllPicDateList[i][2])
    }
  }
  if (X==1) {
    SelectDay.value(location.pathname.split('/')[5]);
  }
  SelectDay.class('DateChoseGroup');
  SelectDay.parent(DateChoseGroup);
}
