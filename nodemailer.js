
const nodemailer = require('nodemailer');
require('dotenv').config()
//const transport = nodemailer.createTransport(transport[defaults]);
const transporter= nodemailer.createTransport({
    service: 'gmail',
    //connectionTimeout : '1',
    auth: {
        // type : 'OAUTH2',
        user: "testing6testing6testing",
        pass: "testtest123test",
        // clientId : process.env.clientId,
        // refreshToken : "1//0gkZlJEoJFcOCCgYIARAAGBASNwF-L9IrrM0x17wlrmYBZ3zjnXeZymgHJCUHoNZDbpeAZWfe-169lUjk3A8Xg1DvN8cQn67RWPM",
        // clientSecret :process.env.clientSecret
        // from: 'testing6testing6testing@gmail.com',
        // to: 'manikrangarx@gmail.com',
        // subject: 'Test mail',
        // text: 'Node.js testing mail for GeeksforGeeks'
    },
    authMethod:'PLAIN'
})
var message = {
    from: "testing6testing6testing@gmail.com",
    to: "manikrangarx@gmail.com",
    subject: "Title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
    attachments : [
        {   // file on disk as an attachment
            filename: 'text3.txt',
            path: 'index.js' // stream this file
        }
    ]
  };

const sendMail  = ()=>{
    transporter.sendMail(message,function(error,info)
    {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
});

}
module.exports = sendMail;
