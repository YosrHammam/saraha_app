import jwt from 'jsonwebtoken'
export const auth =(req,res,next)=>{
    let token = req.header('token');
// console.log(token);
jwt.verify(token,process.env.JWT_KEY, async (err, decoded) => {
   if (err)
      return res.json({ message: "token error or token not provided",err })
      req.userId=decoded.userId
        next()
     // const { receivedId } = req.body;
       //payload
       console.log(decoded);

})
}
// export const confirm =(req,res,next)=>{
//    let token = req.params
// jwt.verify(token,process.env.CONFIRMEMAIL,(err,decoded)=>{
// if(err)
// return res.json({message:"email not verified"},err)
// next()

// })

// }
