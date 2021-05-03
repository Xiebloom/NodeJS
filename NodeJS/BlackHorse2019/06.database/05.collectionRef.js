const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(value => {
        // console.log(value);
        console.log('连接成功');
    })
    .catch(err => {
        console.log(err);
    })

// 创建集合规则，创建文档
const User = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String
    }
}))
// User.create({
//     username:'xkh'
// })
// 该 user 的 id 为 608f804c4d87ff480478c6f0

const Post = mongoose.model('Post', new mongoose.Schema({
    title:{
        type:String
    },
    author: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'    // 要关联的集合
    }
}))
// Post.create({
//     title:'title1',
//     author:'608f804c4d87ff480478c6f0'
// })

// 查询
Post.find().populate('author').then(res => console.log(res))
// author 里面不会是之前设置的 _id 了，而是通过这个 _id 查找到的 User 里面的数据