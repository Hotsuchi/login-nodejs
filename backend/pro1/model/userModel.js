const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI)
.then(()=>console.log('Mongodb connected'))
.catch((err)=>console.log('Mongodb not connect'));

const userSchema = new mongoose.Schema({
    uname:{
        type:String,
        required:true,
        unique:true
    },
    uemail:String,
    upass:String,
    ugender:String,
    cAt:{
        type:Date,
        default:Date.now,
    }
})
const User = mongoose.model('User',userSchema)


module.exports = { User };