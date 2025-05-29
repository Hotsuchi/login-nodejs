const { User } = require('../model/userModel.js');
const jwt = require('jsonwebtoken');
const key = process.env.MY_KEY;

const register = async (req,res)=>{
    try{
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        res.status(200).json({
            msg:'data sucsessfuly saved',
            data:saveUser
        })
        console.log(saveUser);
    }catch(err){
        res.status(401).json({
            msg:'Form data aaya nehi',
            error:err
        })
    }
}

const login = async (req,res)=>{
        const loginUser = req.body;
        const nedUser = await User.findOne({uname:loginUser.uname,upass:loginUser.upass})
        const payLoad = {
            uid:nedUser._id,
            name:nedUser.uname,
            email:nedUser.uemail,
            gender:nedUser.ugender
        }
        
        const token = jwt.sign(payLoad,key,{expiresIn:'30d'});
        res.send(token);
}

const auth = (req,res)=>{
    res.send(req.user);
}

module.exports = { register,login,auth };