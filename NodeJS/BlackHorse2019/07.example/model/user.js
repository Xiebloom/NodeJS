const mongoose = require('mongoose')

// 初始化数据库
// - 创建用户集合规则
let User = mongoose.model('User', new mongoose.Schema({
    name: {
        type : String,
        minlength : 2,
        maxlength : 20,
        require: true
    },
    password : {
        type : String,
        default : '123456'
    },
    hobbies : [ String ]
}))
// - 添加数据
// User.create({ name: 'xkh', password: '123456', hobbies: ['soccer','game'] })

module.exports = User;