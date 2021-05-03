// 路由参数
const express = require('express');
// const bodyParser = require('body-parser')

// 创建网站服务器
const app = express();

// 获取 get 参数
// 可以连续使用
app.get('/index/:id/:name/:age',(req, res)=>{
    // 访问网址 http://localhost:3000/index/123
    res.send(req.body) // 打印出:{"name":"123","age":"456"}
})

// 监听端口
app.listen(3000);
console.log('start!');
