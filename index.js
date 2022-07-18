const http = require('http');
const port = process.env.PORT || 3000
var nodemailer = require("nodemailer");

require('dotenv').config()
class Email{
    constructor(email){
        this.to = email
        this.from = "manikrangarx@gmail.com"
    }

    newTransport(){
        return nodemailer.createTransport({
        //  host:"http://localhost",
        //  port:3000,
         auth:{
            user:"manikrangarx@gmail.com",
            pass:process.env.pass,
         }   
        })
    }
    async send(subject,text)
    {
        const mailOptions = {
            from:this.from,
            to:this.to,
            subject,
            text
        }
        await this.newTransport().sendMail(mailOptions);
    }

    async sendWelcome() {
        await this.send('welcome', 'This is text');
      }
}

// const transporter= nodemailer.createTransport({
//     service: 'gmail',
//     // host: 'smtp.gmail.com',
//     host: 'http://localhost',
//     port: 3000,
//     // connectionTimeout : '10',
//     auth: {
//         // type : 'OAUTH2',
//         user: "manikrangarx@gmail.com",
//         pass: process.env.pass,
//         // clientId : process.env.clientId,
//         // accessToken:"ya29.A0AVA9y1ujyUtHLSrZmlmSTl9qseQz_1C0vRvLDKHnjOersQWySj38Io8h-VV_GWQ_8eOPVQkU1RRmrX9PcZZkWr8EKK0C11jGrFgYQhl4gYzp7XYnctRgo8ju5OW8hrLfnoMfKP4KbS-Z1vk8emK1DPj1IYJ6YUNnWUtBVEFTQVRBU0ZRRTY1ZHI4UUVSbm9sX21qOVlOcW1aTmt1Nm5XUQ0163",
//         // refreshToken : "1//0gkZlJEoJFcOCCgYIARAAGBASNwF-L9IrrM0x17wlrmYBZ3zjnXeZymgHJCUHoNZDbpeAZWfe-169lUjk3A8Xg1DvN8cQn67RWPM",
//         // clientSecret :process.env.clientSecret,
        
//     },
  
// })
// var message = {
//     from: "testing6testing6testing@gmail.com",
//     to: "manikrangarx@gmail.com",
//     subject: "Title",
//     text: "Plaintext version of the message",
//     html: "<p>HTML version of the message</p>",
//     // attachments : [
//     //     {   
//     //         filename: 'text3.txt',
//     //         path: 'index.js' 
//     //     }
//     // ]
//   };

// const sendMail  =()=>{
//     transporter.sendMail(message,function(error,info)
//     {
//         if(error) {
//             console.log('Error Occurs');
//         } else {
//             console.log('Email sent successfully');
//             console.log(info);
//         }
// });

// }

// sendMail();
const mea=async ()=>{
    await new Email("manikrangarx@gmail.com").sendWelcome();

}
mea();


 
// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'testing6testing6testing',
//         pass: 'testtest123test'
//     }
// });
 
// let mailDetails = {
//     from: 'testing6testing6testing@gmail.com',
//     to: 'manikrangarx@gmail.com',
//     subject: 'Test mail',
//     text: 'Node.js testing mail for GeeksforGeeks'
// };
 
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });


// // http.createServer(function (req, res) {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.end('Hello World!');
    
// //   }).listen(port);
 
// var sender = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'testing6testing6testing@gmail.com',
//     pass: 'testtest123test'
//   }
// });
 
// var mail = {
//   from: "testing6testing6testing@gmail.com",
//   to: "manikrangarx@gmail.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!"
// };
 
// sender.sendMail(mail, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent successfully: "
//                  + info.response);
//   }
// });