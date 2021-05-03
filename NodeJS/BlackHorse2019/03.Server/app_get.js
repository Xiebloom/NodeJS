// 功能
// 1 创建服务器对象
// 2 获得请求的 url，根据请求的方法，判断返回什么
// 3 设置响应报文的相关数据：响应类型

// 用于创建网站服务器的模块
const http = require('http')
// url 处理模块
const url = require('url')

// app 对象就是网站服务器对象
const app = http.createServer()

// 为 app 添加事件
app.on('request', (req, res) => {
    // 1 获得请求的 URL
    // - url.parse() 语法
    // --- 参数1：要处理的 url 地址
    // --- 参数2: 将 query 处理成对象
    // --- 解构赋值
    let { query, pathname } = url.parse(req.url, true)
    // console.log(query,pathname);

    // 2 设置通用的响应头
    // - 包括：响应状态码，响应类型，编码类型
    res.writeHead(200,{
        'content-type' : 'text/html;charset=utf8'
    })

    // 根据请求的 URL 和方法，判断返回什么
    if (pathname == '/index') {
        // 获得请求方法
        if (req.method == 'GET') {
            // 获得 GET 的传参
            console.log(query);
            res.end('<h2>嗨，你好。welcome to HP </h2>')
        }
    }

    // 返回数据
    // res.end('<h2>嗨，你好。hello user</h2>')
})

app.listen(3000)
console.log('server start!');