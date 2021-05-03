// 引入
const fs = require('fs')

// 读取文件内容
console.log('reading...');
fs.readFile('05.textfile.txt','utf8', (err, doc) => {
    console.log(err);
    console.log(doc);
})