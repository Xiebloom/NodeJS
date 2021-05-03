const express = require('express');

// 创建网站服务器
const app = express();

app.get('/', (req, res)=>{
    // send 的好处
    // 1 自动监测响应内容的类型(文本..?)
    // 2 自动设置http状态码
    // 3 自动设置响应的内容类型和编码
    res.send('hello express')
})

app.get('/list', (req, res) =>{
    res.send({name:'123', age:20})
})
// 监听端口
app.listen(3000);
console.log('start!');

