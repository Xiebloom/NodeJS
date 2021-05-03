const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const mime = require('mime')

const app = http.createServer()

app.on('request',(req, res) => {
    // 获取路径地址
    // 转化成硬盘目录地址
    let pathName = url.parse(req.url).pathname
    let diskPath = path.join(__dirname,'public' + pathName)

    // 设置 content-type
    let type = mime.getType(diskPath)
    
    // 读取文件，响应
    fs.readFile(diskPath, (err, result) => {
        res.writeHead(200,{
            'content-type' : type
        })
        res.end(result)
    })
})

app.listen(3000)
console.log('Start the server...');