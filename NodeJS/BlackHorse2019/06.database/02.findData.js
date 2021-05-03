const mongoose = require('mongoose')

// 数据库没有会自己创建
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(value => {
        // console.log(value);
        console.log('连接成功');
    })
    .catch(err => {
        console.log(err);
    })

// 创建集合
// 1 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
// 2 使用规则创建集合
const User = mongoose.model('Course', courseSchema)

// 3 在 User 内进行查找
// - 查找所有文档
User.find().then(res => { console.log(res) })
// - 特定 id 为 608ba35f04199c41ac6752df 的用户，返回的是数组
User.find({_id: '608ba35f04199c41ac6752df'}).then(res => console.log(res))
// - 找一个，返回的是 find 找来的数组的 [0] 位数据
User.findOne().then(res => console.log(res))