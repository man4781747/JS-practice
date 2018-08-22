// https://ithelp.ithome.com.tw/articles/10185422

var fs = require('fs');
var AllData;
// fs.appendFile('TestFile.txt', '我很好！', function (err) {
//     if (err)
//         console.log(err);
//     else
//         console.log('Append operation complete.');
// });

fs.readFile('2018_8_21_nan.txt', function (err, data) {
    if (err) throw err;
    AllData = data.toString().split('\n');
    console.log(AllData[0].split('xxx'));
});
