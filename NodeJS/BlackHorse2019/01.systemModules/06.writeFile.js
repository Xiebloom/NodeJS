const fs = require('fs')

fs.writeFile('./06.writeFile.txt','写入',err => {
    if ( err != null) {
        console.log(err);
        return; // 阻止代码执行
    }
    console.log('写入成功');
})

