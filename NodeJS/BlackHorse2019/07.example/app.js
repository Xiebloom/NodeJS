const express = require('express')
const bodyParser = require('body-parser')

// 数据库模块
require('./model/index.js')
const User = require('./model/user')

const app = express()
app.use(bodyParser.urlencoded({ extended : false}))
// app.use(express.json())

// 主页
app.get('/',(req, res) => {
    res.send('welcome')
})

// list 页面，查询所有数据 
app.get('/list', async (req, res) => {
    let users = await User.find()
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>list</title>
        <style>
            table {
                margin: auto;
                border: 2px black solid;
                border-collapse: collapse;
            }
    
            td {
                padding: 5px;
                border: 1px black solid;
            }
        </style>
    </head>
    
    <body>
        <table>
            <tr>
                <td>name</td>
                <td>hobbies</td>
                <td>options</td>
            </tr>`
    let list = ''
    users.forEach( item => {
        list += 
        `<tr>
        <td>${item.name}</td>
        <td>${item.hobbies}</td>
        <td>
            <a href="/modify?id=${item._id}">修改</a>
            <a href="/delete?id=${item._id}">删除</a>
        </td>
        </tr>`
    })
    html += list
    html += 
    `   <tr>
            <td>
                <a href="/register">注册新用户</a>
            </td>
        </tr>
    </table>
    </body>
    </html>
    `
    res.send(html)
})

// register 页面，进行用户注册
// - get 请求时，返回表单
app.get('/register', async (req, res) => {
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>register</title>
    </head>
    <body>
        <form action="/register" method="POST">
            <span>name</span>
            <input type="text" name="name">
            <div>
                <input type="checkbox" value="soccer" name="hobbies"> soccer
                <input type="checkbox" value="game" name="hobbies"> game
                <input type="checkbox" value="code" name="hobbies"> code
            </div>
            <input type="submit" >
        </form>
    </body>
    </html>`
    res.send(html)
})
// - post 请求时，跳转到 /list，显示当前已有用户
app.post('/register', async (req, res) => {
    User.create(req.body)
    // 重定向
    res.redirect(301, 'http://localhost:3000/list')
})

// modify 路由，修改用户数据
// - get 请求时，显示有当前用户信息的表单
app.get('/modify', async (req, res) => {
    let hobbies = ['soccer','game','code']
    // 1 获取当前 id 对应的用户信息
    let user = await User.findOne({_id: req.query.id})
    
    // 2 生成表单
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>register</title>
    </head>
    <body>
        <form action="/modify?id=${user._id}" method="POST">
            <span>name</span>
            <input value="${user.name}" type="text" name="name">
    <div>`

    // - 生成勾选框
    hobbies.forEach(item => {
        if(user.hobbies.includes(item)) 
            html += `<input type="checkbox" value="${item}" name="hobbies" checked> ${item}`
        else 
            html += `<input type="checkbox" value="${item}" name="hobbies" > ${item}`
    })

    html += 
    `</div>
            <input type="submit" >
        </form>
    </body>
    </html>`

    // 3 响应
    res.send(html)
})
// - post 请求时，在数据库修改用户信息，并且实现重定向到 /list
app.post('/modify', async (req, res) => {
    await User.updateOne({_id:req.query.id}, req.body)
    res.redirect(301,'/list')
})

// delete 路由，删除某条信息
app.get('/delete', async (req, res) => {
    await User.findOneAndDelete({_id: req.query.id})
    res.redirect(301,'/list')
})

// 监听端口
app.listen(3000,() => {
    console.log('server starts...');
})