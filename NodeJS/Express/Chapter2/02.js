const express = require('express');
const bodyParser = require('body-parser')

// 创建网站服务器
const app = express();

// 获取 get 参数
app.get('/index',(req, res)=>{
    // 访问网址 http://localhost:3000/index?name=123&age=456
    // 获取 get 请求参数
    res.send(req.query) // 打印出:{"name":"123","age":"456"}
})

// 获取 post 参数

// 拦截所有请求: 不写url
// extended: false 表示
// 在方法内部使用系统模块来处理请求参数的格式
// 否则会使用第三方模块 qs 处理请求参数的格式
app.use(bodyParser.urlencoded({extended: false}))

app.post('/add',(req, res) => {
    // 显示 post 的请求参数
    res.send(req.body)
})

// 监听端口
app.listen(3000);
console.log('start!');

