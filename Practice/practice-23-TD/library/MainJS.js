

function setup() {
  LoadAllImage()
  createCanvas(1280, 720);
}


function draw() {
  background(0);
  for (let i=0;i<TowerList.length;i++) {
    TowerList[i].Show();
  }
}
