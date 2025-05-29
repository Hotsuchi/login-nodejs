const { register,login,auth } = require('../controler/userControler.js');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware
const userVerify = (req,res,next)=>{
    const header = req.headers['authorization'];
    const newToken = header.split(' ')[1];
    try{
        const user = jwt.verify(newToken,process.env.MY_KEY)
        console.log('valid token')
        req.user=user;
        next();
    }catch(err){
        res.json({
            msg:'invalid token ok'
        });
        console.log('token invalid')
    }
}

router.post('/singup',register);
router.post('/login',login);
router.get('/',userVerify,auth);

module.exports = router;