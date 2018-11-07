function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // xmlHttp.send( null );
    // return xmlHttp.responseText;
    return xmlHttp;
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(this)
       var obj = JSON.parse(this.response);
       console.log(obj)
       // loadJSON(this.response);
    } else {
      console.log('連結失敗!!')
    }
};

function setup(){
  createCanvas(1000,1000);
  background(0);
  for (let i=0;i<1000;i++) {
    for (let j=0;j<1000;j++){
      stroke((i+j)*255/2000, (i+j)*255/2000, (i+j)*255/2000);
      point(i,j);
    }
  }
  // xhttp.open("GET", "http://127.0.0.1:8000/test/", true);
  // xhttp.send();
}
