import { Router } from 'express';
const nodemailer = require("nodemailer");

export default () => {
    const app = Router();

    app.post('/send-mail', async function sendMail(req, res) {
        console.log("hello")
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'onclickcoin@gmail.com',
                   pass: 'thisissupersecure'
               }
        });

        console.log("transporter oklm")

        const mailOptions = {
            from: 'onclickcoin@gmail.com', // sender address
            to: 'hroussel96@gmail.com', // list of receivers
            subject: 'This is a test', // Subject line
            html: '<p>This seems to work!</p>'// plain text body
        };
        console.log("mail ok")

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log("Errror:", err)
            else
              console.log("Success:", info);
        });

    });
    res.send('mail sent')

    return app; 
};

