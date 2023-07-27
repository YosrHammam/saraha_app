

import express  from "express"
import { signUp,signIn, verify } from "./user.controller.js"
const userRouter = express.Router()
userRouter.post('/signUp',signUp)
userRouter.post('/signIn',signIn)
userRouter.get('/verify/:token',verify)
export default userRouter





// /**
//  * a7la mesa alaik
//  */
// function demo(){
// console.log("demo");
// }
// demo()