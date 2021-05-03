const fs = require('fs')
let path = require('path')

let finalPath = path.join('public','uploads','avatar')
console.log(finalPath);

// 获得绝对路径并使用
console.log(path.join(__dirname, '05.textfile.txt'));
fs.readFile(path.join(__dirname, '05.textfile.txt'), 'utf8', (err, doc) => {
    console.log(doc);
    console.log('nodemon test');
})