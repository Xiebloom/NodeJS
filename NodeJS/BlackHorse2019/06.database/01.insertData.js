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
// - Schema 是一个构造函数
// --- 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
// --- 使用规则创建集合
const Course = mongoose.model('Course', courseSchema)

// --- 方法1
const course = new Course({
    name:'name',
    author:'author',
    isPublished: true
})
course.save()

// --- 方法2
Course.create({
    name:'xkh',
    author:'xkhs author',
    isPublished: false
})
    .then(doc => {console.log(doc);})
    .catch(err => {console.log(err);})