function Star(r, tier, ChildNum) {
  this.r = r;
  this.child = [];
  this.tier = tier;
  this.ChildNum = ChildNum;
}


function AddStar(ParentStar) {
  for (let i = 0; i < ParentStar.length; i++) {
    /*
    console.log("分隔");
    console.log(ParentStar.length);
    console.log(i);
    */
    if (ParentStar[i].tier > 0) {
      for (let j = 0; j < ParentStar[i].ChildNum; j++) {
        ParentStar[i].child[j] = new Star((ParentStar[i].r) / 2.,
          (ParentStar[i].tier) - 1,
          ParentStar[i].ChildNum);
      }
      AddStar(ParentStar[i].child);
    }
  }
}
