//
//  敵軍生成清單
//  格式: [
        // 生成時間(frame),
        // 生成行為類型(從EnemyBehaviorSet.js中設定),
        // 生成位置(x),
        // 生成位置(y),
        // 攜帶彈夾([陣列]) (從 MagazineSet.js中設定),
        // 面對方向x,
        // 面對方向y,
// ]
//
var GameWidth = 600*0.9;
var GameHeight = 1000*0.9;
var EnemySpawnList = [
  // [0, BossTest, GameWidth*0.9/2,    0, [TestTest],  0, 1],
  // [0, BossTest_2, GameWidth*0.9/2,    0, [PetalTest],  0, 1],
  [0, BossTest_1, GameWidth/2,    0, [NarudoTest],  0, 1],
  // [0, DontMove, GameWidth/2,    0, [StarTest],  0, 1],
  // [3000, BossTest, GameWidth*0.9/2,    0, [BigNarudoSeed],  0, 1],
  // [3000, BossTest, GameWidth*0.9/2,    0, [SaruraSeedSet]],
  // [2000, BossTest_2, GameWidth*0.9/2,    0, [NarudoTest]],
  // [3000, BossTest_2, GameWidth*0.9/2,    0, [PetalTest]],
  // [300, BossTest, GameWidth*0.9/2,    0],
  // [120, BossTest, GameWidth*0.9/2,    0]
                      ]

//
// 依 GameFrameCount 來檢查指定之敵軍生成清單
// 若 GameFrameCount 有找到相對應之敵人內容則使之出現
// 生成之敵人資訊則會存入 global 參數: 'EnemyList'內
//
function EnemySpawnCheck(EnemySpawnListInput) {
  for (let i=0;i<EnemySpawnListInput.length;i++) {
    if (EnemySpawnListInput[i][0] == GameFrameCount) {
      EnemyList[EnemyList.length] = new Enemy(
        new createVector(EnemySpawnListInput[i][2],EnemySpawnListInput[i][3]),
        new createVector(EnemySpawnListInput[i][5],EnemySpawnListInput[i][6]),
        EnemySpawnListInput[i][1],
        EnemySpawnListInput[i][4])
    }
  }
}
