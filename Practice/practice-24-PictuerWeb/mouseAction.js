var MouseXOld;

function mouseDragged() {
  SliderTest.value(SliderTest.value()-(mouseX-MouseXOld)*2);
  // console.log(SliderTest.value());
  MouseXOld = mouseX;
}

function mousePressed() {
  MouseXOld = mouseX;
}
//
// function mouseReleased() {
//
// }
