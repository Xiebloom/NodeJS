const express = require('express')
const { User } = require('./db.js')
const jwt = require('jsonwebtoken')
const SECRET = 'secretKey'

const app = express()

// 使用中间件，让服务器能处理 json 对象
app.use(express.json())

// 查看所有用户
app.get('/api/users', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

// 注册页面
app.post('/api/register', async (req, res) => {
    // console.log(req.body);
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.send(user)
})

// 登录页面
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        // 终止执行
        return res.status(422).send({
            message: '用户名不存在'
        })
    }
    const isValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if (!isValid) {
        return res.status(422).send({
            message: '密码错误'
        })
    }
    // 生成 token
    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)
    res.send({
        user,
        token
    })
})

// 创建中间件: 根据 token 锁定用户数据
const auth = async (req, res, next) => {
    // 查找用户
    let _token = String(req.headers.authorization).split(' ').pop()
    const tokenData = jwt.verify(_token, SECRET)
    const { id } = tokenData
    req.user = await User.findById(id)
    next()
}

// 查看个人信息
app.get('/api/profile', auth, async (req, res) => {
    res.send(req.user)
})

app.listen(3001, () => {
    console.log('server starts');
})