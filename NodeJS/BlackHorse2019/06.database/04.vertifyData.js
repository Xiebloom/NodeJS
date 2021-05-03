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

// 设置集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '在这里自定义错误信息'],
        minlength: [2, '错误发生！ minlength error'],
        maxlength: [5, '错误发生！ maxlength error'],
        trim: true // 取出字符串两边的空格
    },
    age: {
        type: Number,
        min:10,
        max:100
    },
    publishDate: {
        type : Date,
        // 默认会传入的
        default: Date.now
    },
    category: {
        type : String,
        enum : {
            values : ['html', 'css', 'js'], 
            // 设置报错信息
            message : 'category 有误'
        }         
    },
    author: {
        type : String,
        // 检验函数
        validate : {
            validator: value => {
                return value && value.length > 4
            },
            message: 'author 的值不符合规则'
        }
    }
})

// 获得集合对象
const Post = mongoose.model('Post', postSchema)

// 操作集合的数据
Post.create({
    name: 'xkh',
    age : 20,
    title: 'xxxxx',
    category: 'jsd',
    author: 'xkhhdd'
}).then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        const errors = err.errors
        for ( let attr in errors) {
            console.log('-----------' + attr + '-----------');
            console.log(errors[attr]['properties']);
        }
    })

    // 似乎如果是别的错误类型，就没办法这么轻松的提取出来了