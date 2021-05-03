### 1 环境准备

* MongoDB / mongoose

* express5.0
  npm i express@next

* RestClient 插件
  用于本地直接发起 http 请求



### 2 设置接口

* 利用 express 的 API 去设置各 url 的访问值

```js
app.post('/api/register', async (req, res) => {
    // code here...
})
```



### 3 定义模型

* 连接数据库 : mongoose.connect(...)
* 创建集合规则 : mongoose.model(...)
* 向集合内添加文档 : User.create({ obj })



### 4 用户注册

* 设置 username 唯一
* 对密码进行散列加密
* 生成token
  * npm i jsonwebtoken
  * 登陆时生成给用户
* 获得个人信息时需要使用 token 

