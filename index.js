import express from 'express'
import { DBConnection } from './database/dbConnection.js';
import bootstrab from './src/index.routing.js';
import { userModel } from './database/models/user.model.js';
import { messageModel } from './database/models/message.model.js';
import userRouter from './src/modules/user/user.routes.js';
import messageRouter from './src/modules/message/message.routes.js'
import dotenv from 'dotenv'
dotenv.config()
const app =express();
const port =5003;
app.use(express.json())
app.use(userRouter)
app.use(messageRouter)
// global middleware for handling error
app.use((err,req,res,next)=>{
    // res.status(500).json({err,message:"error"})
    res.json(err)
})

DBConnection()
console.log(process.env.JWT_KEY);
userModel
messageModel
bootstrab(app,express)





















app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})