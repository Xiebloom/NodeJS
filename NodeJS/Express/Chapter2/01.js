const express = require('express');

// 创建网站服务器
const app = express();
const home = express.Router();

app.use('/home', home);
home.get('/index',(req, res)=>{
    res.send('welcome')
})

// 监听端口
app.listen(3000);
console.log('start!');

