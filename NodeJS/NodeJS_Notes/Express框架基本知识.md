# Express框架



## 1 框架简介

### 1.1 框架特性

![image-20210320121103888](MarkDownPictures/image-20210320121103888.png)

### 1.2 对比路由实现

![image-20210320121140023](MarkDownPictures/image-20210320121140023.png)

### 1.3 获取请求参数

![image-20210320121200454](MarkDownPictures/image-20210320121200454.png)

### 1.4 框架案例

```js
const express = require('express');

// 创建网站服务器
const app = express();

app.get('/', (req, res)=>{
    // send 的好处
    // 1 自动监测响应内容的类型(文本..?)
    // 2 自动设置http状态码
    // 3 自动设置响应的内容类型和编码
    res.send('hello express')
})

app.get('/list', (req, res) =>{
    res.send({name:'123', age:20})
})
// 监听端口
app.listen(3000);
console.log('start!');


```





## 2 中间件

### 2.1  基本使用简介

![image-20210320122609088](MarkDownPictures/image-20210320122609088.png)

![image-20210320122705500](MarkDownPictures/image-20210320122705500.png)

![image-20210320122817831](MarkDownPictures/image-20210320122817831.png)

```js
const express = require('express');

// 创建网站服务器
const app = express();

app.get('/request', (req, res,next)=>{
    req.name = 'zs';
    next();	// 需要下一个中间件继续处理
})

app.get('/request', (req, res)=>{
    // console.log(req);
    // console.log(res);
    res.send(req.name)
})
// 监听端口
app.listen(3000);
console.log('start!');
```

### 2.2 app.use 使用方法

> 对所有的请求方式 get / post /push .... 都可以用 app.use 匹配

![image-20210320123531711](MarkDownPictures/image-20210320123531711.png)

### 2.3 应用

* 路由保护
* 维护
* 自定义404![image-20210320123952968](MarkDownPictures/image-20210320123952968.png)

![image-20210320124244069](MarkDownPictures/image-20210320124244069.png)



## 3  Express 请求处理

### 3.1 构建模块化路由

#### 3.1.1 二级路由

![image-20210320124730481](MarkDownPictures/image-20210320124730481.png)

#### 3.1.2 模块化代码

![image-20210320125224947](MarkDownPictures/image-20210320125224947.png)

### 3.2 GET 参数的获取

![image-20210320145649314](MarkDownPictures/image-20210320145649314.png)

### 3.3 Post 参数获取

![image-20210320150311610](MarkDownPictures/image-20210320150311610.png)

### 3.4 路由参数

![image-20210320151405836](MarkDownPictures/image-20210320151405836.png)

### 3.5 静态资源处理

![image-20210320152229306](MarkDownPictures/image-20210320152229306.png)



## 4 模板引擎 express-artg-template

### 4.1 基本使用

![image-20210320153407004](MarkDownPictures/image-20210320153407004.png)

### 4.2 app.locals 对象

> 公共数据只需要查询一次

![image-20210320154725954](MarkDownPictures/image-20210320154725954.png)

