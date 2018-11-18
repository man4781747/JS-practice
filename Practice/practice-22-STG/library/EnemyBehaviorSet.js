//
// 此文件為設定敵人運動軌跡行為
//
var SoldierTest = [
  [0, 'ToPosition', [600*0.9/2, 100, 50]],
  [0,'LinearMotion'],
  [50, 'test1'],
  [100, 'LinearMotion'],
  [110, 'test1'],
  [160, 'LinearMotion'],];

var DontMove = [
  // [0, 'MagazineListSet', [PetalTest]],
  [0, 'KillAllBullets'],
  [0, 'ToPosition', [600*0.9/2, 200, 50]],
  [0, 'SetHP', 1],
  [0, 'HurtableSet', false],
  [0, 'LinearMotion'],
  [50, 'Stop'],
  [50, 'AddHP', 1000/60], // 60
  [110, 'HurtableSet', true],
  // [50, 'SetVValue' , 3],
  // [50, 'SetVFace' , [0,1]],
  // [50, 'LinearMotion'],
  // [100, 'Stop'],
];
//
// var BossTest = [
//   [0, 'KillAllBullets'],
//   // [0, 'MagazineListSet', [PetalTest]],
//                 [0, 'ToPosition', [600*0.9/2, 100, 50]],
//                 [0, 'SetHP', 1],
//                 [0, 'HurtableSet', false],
//                 [0, 'LinearMotion'],
//                 // [30, 'AddVValue', -3/20.],
//                 // 三角開頭
//                 [50, 'AddHP', 1000/60], // 60
//                 [110, 'HurtableSet', true],
//                 [110, 'SetVFace', [0, 1]],
//                 [110, 'RotateEnemyVFave', Math.PI/6], // 1
//                 [110, 'SetVValue', 0],
//                 [110, 'AddVValue', 3/20.],
//                 [130, 'LinearMotion'], // 59
//                 [150, 'AddVValue', -3/20.],
//                 [170, 'Stop'], // 60
//                 [230, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [230, 'AddVValue', 3/20.],
//                 [250, 'LinearMotion'], // 59
//                 [270, 'AddVValue', -3/20.],
//                 [290, 'Stop'],  // 60
//                 [350, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [350, 'AddVValue', 3/20.],
//                 [370, 'LinearMotion'], // 59
//                 [390, 'AddVValue', -3/20.],
//                 // 三角結束
//                 // 三角開頭
//                 [410, 'Stop'], // 60
//                 [470, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [470, 'AddVValue', 3/20.],
//                 [490, 'LinearMotion'], // 59
//                 [510, 'AddVValue', -3/20.],
//                 [530, 'Stop'], // 60
//                 [590, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [590, 'AddVValue', 3/20.],
//                 [610, 'LinearMotion'], // 59
//                 [630, 'AddVValue', -3/20.],
//                 [650, 'Stop'],  // 60
//                 [710, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [710, 'AddVValue', 3/20.],
//                 [730, 'LinearMotion'], // 59
//                 [750, 'AddVValue', -3/20.],
//                 // 三角結束
//                 // 三角開頭
//                 [770, 'Stop'], // 60
//                 [830, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 [831, 'AddVValue', 3/20.],
//                 [850, 'LinearMotion'], // 59
//                 [870, 'AddVValue', -3/20.],
//                 [890, 'Stop'], // 60
//                 [950, 'RotateEnemyVFave', -Math.PI*2/3], // 1
//                 // [200, 'Died'], // 59
//                 [770, 469],
//                 ['DiedAndSpawn', BossTest_2],
//
//                 ]
//
//
// var BossTest_3 = [
//     [0, 'KillAllBullets'],
//     [0, 'ToPosition', [600*0.9/2, 100, 50]],
//     [0, 'SetHP', 1],
//     [0, 'HurtableSet', false],
//     [0, 'LinearMotion'],
//     [50, 'AddHP', 1000/60], // 60
//     [110, 'HurtableSet', true],
//     [110, 'EnemyScreenLockSet', true],
//     [110, 'RandomVFace'],
//     [110, 'RandomVValue',4],
//     [110, 'LinearMotion'],
//     [170, 'Stop'],
//     // [200, 'Died'], // 59
//     [210, 109],
//     ['DiedAndSpawn', BossTest],
//                 ]


// Boss測試一整系列運動 由後至先
// 第5符 三角 [NarudoTest]
var BossTest_10 = [
  // 三角運動
  [0, 'KillAllBullets'],
  [0, 'MagazineListSet', [NarudoTest]],
  [0, 'ToPosition', [600*0.9/2, 100, 50]],
  [0, 'SetHP', 1],
  [0, 'HurtableSet', false],
  [0, 'LinearMotion'],
  // [30, 'AddVValue', -3/20.],
  // 三角開頭
  [50, 'AddHP', 1000/60], // 60
  [110, 'HurtableSet', true],
  [110, 'SetVFace', [0, 1]],
  [110, 'RotateEnemyVFave', Math.PI/6], // 1
  [110, 'SetVValue', 0],
  [110, 'AddVValue', 3/20.],
  [130, 'LinearMotion'], // 59
  [150, 'AddVValue', -3/20.],
  [170, 'Stop'], // 60
  [230, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [230, 'AddVValue', 3/20.],
  [250, 'LinearMotion'], // 59
  [270, 'AddVValue', -3/20.],
  [290, 'Stop'],  // 60
  [350, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [350, 'AddVValue', 3/20.],
  [370, 'LinearMotion'], // 59
  [390, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [410, 'Stop'], // 60
  [470, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [470, 'AddVValue', 3/20.],
  [490, 'LinearMotion'], // 59
  [510, 'AddVValue', -3/20.],
  [530, 'Stop'], // 60
  [590, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [590, 'AddVValue', 3/20.],
  [610, 'LinearMotion'], // 59
  [630, 'AddVValue', -3/20.],
  [650, 'Stop'],  // 60
  [710, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [710, 'AddVValue', 3/20.],
  [730, 'LinearMotion'], // 59
  [750, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [770, 'Stop'], // 60
  [770, 469],
  ['DiedEndGame'],
      ]

// 普通攻擊
var BossTest_9 = [
    // 隨機運動
    [0, 'MagazineListSet', [HanabiSet]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_10],
                ]

// 第4符 不動 [PetalTest]
var BossTest_8 = [
  [0, 'MagazineListSet', [PetalTest]],
  [0, 'KillAllBullets'],
  [0, 'ToPosition', [600*0.9/2, 200, 50]],
  [0, 'SetHP', 1],
  [0, 'HurtableSet', false],
  [0, 'LinearMotion'],
  [50, 'Stop'],
  [50, 'AddHP', 1000/60], // 60
  [110, 'HurtableSet', true],
  ['DiedAndSpawn', BossTest_9],
];

// 普通攻擊
var BossTest_7 = [
    // 隨機運動
    [0, 'MagazineListSet', [HanabiSet]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_8],
                ]

// 第3符 三角 [SaruraSeedSet]
var BossTest_6 = [
  // 三角運動
  [0, 'KillAllBullets'],
  [0, 'MagazineListSet', [SaruraSeedSet]],
  [0, 'ToPosition', [600*0.9/2, 100, 50]],
  [0, 'SetHP', 1],
  [0, 'HurtableSet', false],
  [0, 'LinearMotion'],
  // [30, 'AddVValue', -3/20.],
  // 三角開頭
  [50, 'AddHP', 1000/60], // 60
  [110, 'HurtableSet', true],
  [110, 'SetVFace', [0, 1]],
  [110, 'RotateEnemyVFave', Math.PI/6], // 1
  [110, 'SetVValue', 0],
  [110, 'AddVValue', 3/20.],
  [130, 'LinearMotion'], // 59
  [150, 'AddVValue', -3/20.],
  [170, 'Stop'], // 60
  [230, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [230, 'AddVValue', 3/20.],
  [250, 'LinearMotion'], // 59
  [270, 'AddVValue', -3/20.],
  [290, 'Stop'],  // 60
  [350, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [350, 'AddVValue', 3/20.],
  [370, 'LinearMotion'], // 59
  [390, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [410, 'Stop'], // 60
  [470, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [470, 'AddVValue', 3/20.],
  [490, 'LinearMotion'], // 59
  [510, 'AddVValue', -3/20.],
  [530, 'Stop'], // 60
  [590, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [590, 'AddVValue', 3/20.],
  [610, 'LinearMotion'], // 59
  [630, 'AddVValue', -3/20.],
  [650, 'Stop'],  // 60
  [710, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [710, 'AddVValue', 3/20.],
  [730, 'LinearMotion'], // 59
  [750, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [770, 'Stop'], // 60
  [770, 469],
  ['DiedAndSpawn', BossTest_7],
      ]

// 普通攻擊
var BossTest_5 = [
    // 隨機運動
    [0, 'MagazineListSet', [HanabiSet]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_6],
                ]

// 第2符 隨機 [BigNarudoSeed]
var BossTest_4 = [
    // 隨機運動
    [0, 'MagazineListSet', [BigNarudoSeed]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_5],
                ]

// 普通攻擊
var BossTest_3 = [
    // 隨機運動
    [0, 'MagazineListSet', [HanabiSet]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_4],
                ]

// 第2符 三角 [SaruraSeedSet]
var BossTest_2 = [
  // 三角運動
  [0, 'KillAllBullets'],
  [0, 'MagazineListSet', [HanabiSet_2]],
  [0, 'ToPosition', [600*0.9/2, 100, 50]],
  [0, 'SetHP', 1],
  [0, 'HurtableSet', false],
  [0, 'LinearMotion'],
  // [30, 'AddVValue', -3/20.],
  // 三角開頭
  [50, 'AddHP', 1000/60], // 60
  [110, 'HurtableSet', true],
  [110, 'SetVFace', [0, 1]],
  [110, 'RotateEnemyVFave', Math.PI/6], // 1
  [110, 'SetVValue', 0],
  [110, 'AddVValue', 3/20.],
  [130, 'LinearMotion'], // 59
  [150, 'AddVValue', -3/20.],
  [170, 'Stop'], // 60
  [230, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [230, 'AddVValue', 3/20.],
  [250, 'LinearMotion'], // 59
  [270, 'AddVValue', -3/20.],
  [290, 'Stop'],  // 60
  [350, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [350, 'AddVValue', 3/20.],
  [370, 'LinearMotion'], // 59
  [390, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [410, 'Stop'], // 60
  [470, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [470, 'AddVValue', 3/20.],
  [490, 'LinearMotion'], // 59
  [510, 'AddVValue', -3/20.],
  [530, 'Stop'], // 60
  [590, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [590, 'AddVValue', 3/20.],
  [610, 'LinearMotion'], // 59
  [630, 'AddVValue', -3/20.],
  [650, 'Stop'],  // 60
  [710, 'RotateEnemyVFave', -Math.PI*2/3], // 1
  [710, 'AddVValue', 3/20.],
  [730, 'LinearMotion'], // 59
  [750, 'AddVValue', -3/20.],
  // 三角結束
  // 三角開頭
  [770, 'Stop'], // 60
  [770, 469],
  ['DiedAndSpawn', BossTest_3],
      ]

// 普通攻擊
var BossTest_1 = [
    // 隨機運動
    [0, 'MagazineListSet', [HanabiSet]],
    [0, 'KillAllBullets'],
    [0, 'ToPosition', [600*0.9/2, 100, 50]],
    [0, 'SetHP', 1],
    [0, 'HurtableSet', false],
    [0, 'LinearMotion'],
    [50, 'AddHP', 1000/60], // 60
    [110, 'HurtableSet', true],
    [110, 'EnemyScreenLockSet', true],
    [110, 'RandomVFace'],
    [110, 'RandomVValue',4],
    [110, 'LinearMotion'],
    [170, 'Stop'],
    [210, 109],
    ['DiedAndSpawn', BossTest_2],
                ]
