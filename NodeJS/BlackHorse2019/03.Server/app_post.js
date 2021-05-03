const { readSync } = require('fs')
const http = require('http')
const app = http.createServer()

app.on('request',(req,res) => {
    let postParams = ''
    req.on('data', param => {
        postParams += param
    })
    req.on('end', () => {
        console.log(postParams);
    })
    res.end('test')
})

app.listen(3000)
console.log('listening to 3000');