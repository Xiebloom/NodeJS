// 模板引擎
const express = require('express');
const path = require('path')

// 创建网站服务器
const app = express();

// 告诉 express 
// - 1 使用什么模板引擎
// - 2 渲染什么后缀的模板文件
// - app.engine( 模板后缀, 模板引擎)
app.engine('art', require('express-art-template'))

// 告诉 express 模板存放的位置是什么
// - app.set('view', 路径)
// 'view' 为固定写法, 表示此次 set 为设置模板存放路径
app.set('views', path.join(__dirname,'views'))

// 告诉 express 模板的默认后缀
app.set('view engine', 'art')

app.locals.user =[{
    name:'1q3',
    age:20
}]

// 创建路由
app.get('/index', (req,res)=>{
    // 使用 render 函数
    // - 拼接模板路径
    // - 拼接模板后缀
    // - 哪一个模板 和 哪一个数据 进行了拼接
    // - 将拼接结果响应给客户端
    // -- 因此不需要接受 render 的返回值, 也不需要 res.send() 了

    // - 由于已经设置了默认后缀 art, 这次就不用写 index.art 了
    res.render('index', {
        msg:'message'
    })
})

app.post('/index/testpage',(req,res)=>{
    res.render('index',{
        msg:'testpage'
    })
})

// 监听端口
app.listen(3000);
console.log('start!');
