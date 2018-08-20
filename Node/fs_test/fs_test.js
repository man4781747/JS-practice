// https://ithelp.ithome.com.tw/articles/10185422


var fs = require('fs');

fs.appendFile('TestFile.txt', '我很好！', function (err) {
    if (err)
        console.log(err);
    else
        console.log('Append operation complete.');
});

fs.readFile('TestFile.txt', function (err, data) {
    if (err) throw err;

    console.log(data.toString());
});
