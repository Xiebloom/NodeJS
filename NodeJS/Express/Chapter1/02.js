const express = require('express');

// 创建网站服务器
const app = express();

app.get('/request', (req, res,next)=>{
    req.name = 'zs';
    next();
})

app.get('/request', (req, res)=>{
    // console.log(req);
    // console.log(res);
    res.send(req.name)
})
// 监听端口
app.listen(3000);
console.log('start!');

