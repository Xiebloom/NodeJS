// 静态资源访问功能
const express = require('express');
const path = require('path')

// 创建网站服务器
const app = express();

// 指定静态资源访问的绝对路径

// 一定要用 path.join 这个函数.....
app.use('/static',express.static(path.join(__dirname)))
app.get('/static',(req,res)=>{
    res.send(__dirname)
})


// 监听端口
app.listen(3000);
console.log('start!');
