require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./router/userRouter.js');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/user',router);



app.listen(port,()=>{console.log(`Running port : ${port}`)});