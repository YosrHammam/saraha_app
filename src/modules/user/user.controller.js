
import { userModel } from '../../../database/models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { sendEmail } from '../../emails/nodemailer.js'
// error handling
import { catchAsyncError } from '../../utils/catchAsyncError.js'


const signUp = catchAsyncError(async (req, res, next) => {
    const { name, email, password, cPassword, age, verified, isActive } = req.body;
    const user = await userModel.findOne({ email })
    if (user)
        return res.json({ message: "this email is already exist" })
    const hash = bcrypt.hashSync(password, 8)
    const users = await userModel.insertMany({ name, email, password: hash, cPassword, age, verified, isActive })
    sendEmail({ email })
    res.json({ message: "user data is added in user collection", users })

})
const signIn = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ name: user.name, userId: user._id }, process.env.JWT_KEY)
        sendEmail({ email })
        return res.json({ message: "Success , this user is exist", token })
    }
    res.json({ message: "incorrect email or password" })

})
const verify =catchAsyncError(async(req,res,next)=>{
    let {token} = req.params
    jwt.verify(token,process.env.CONFIRMEMAIL_KEY,async(err,decoded)=>{
    if(err)
    return res.json({message:"email not verified",err})
    await userModel.findOneAndUpdate({email:decoded.email},{verified:true})
        res.json({message:"email is verified"})
    })})

export {
    signUp, signIn,verify
}





