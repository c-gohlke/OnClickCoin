import { Router } from 'express';
const nodemailer = require('nodemailer');

export default () => {
  const app = Router();
  app.post('/send-mail', async function sendMail(req, res) {
    console.log("email: ", req.body.email)
    const sendTo = req.body.email
    const password = process.env.PASSWORD_EMAIL
    const nameOfCoin = req.body.nameCoin
    const linkToCoin = req.body.linkCoin
    console.log(typeof(sendTo), typeof(password))
  

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'onclickcoin@gmail.com',
        pass: password,
      },
    });
    
    const mailOptions = {
      from: 'OnClickCoin@gmail.com', // sender address
      to: sendTo, // list of receivers
      subject: 'Your first crypto-currency by OCC', // Subject line
      html: '<p>Welcome to OnClickCoin! <br /> Here is your token receipt: </p>' + linkToCoin + '<br/> <br/> <br/> The whole OnClickCoin team wishes your token an happy future :)', // plain text body
    };
    console.log('mail ok');
    
    
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log('Errror:', err);
      else console.log('Success:', info);
    });
    res.send('mail sent');
  });

  return app;
};
