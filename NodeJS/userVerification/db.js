const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/express-auth',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const User = mongoose.model('User', new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
}))

module.exports = { User }