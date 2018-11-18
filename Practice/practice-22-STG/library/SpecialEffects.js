function ShakeWindow() {
  if (ShakeStartNum > GameFrameCount){
    translate(Math.random()*25-5, Math.random()*25-5);
  }
}
