import nodemailer from 'nodemailer'
import { htmlCode } from './html.js';
import jwt from 'jsonwebtoken';
// options = {
//     email,html text 
// }
export const sendEmail =async(options)=>{
    // const transporter = nodemailer.createTransport({
    //     //   host: "smtp.forwardemail.net",
    //     //   port: 465,
    //     //   secure: true,
    //       service:"gmail",
    //       auth: {
    //         // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //         user: 'shakbaby49@gmail.com',
    //         pass: 'ntnevouwvpftgzzk'
    //       }
    //     });

        const transporter = nodemailer.createTransport({
            service:"outlook",
            auth: {
            
              user: 'yosrhammam@outlook.com',
              pass: 'yassora2000'
            }
          });
        
        let token = jwt.sign({email:options.email},process.env.CONFIRMEMAIL_KEY)
        let info = await transporter.sendMail({
            from: '"this is my sender email : 👻" <yosrhammam@outlook.com>',
            to:options.email,
            subject: "Hello ✔", 
            html:htmlCode(token) 
          });
        
          console.log("Message sent: %s", info.messageId);
      
}

