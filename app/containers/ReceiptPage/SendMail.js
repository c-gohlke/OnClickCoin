async function SendMail(mail, contract) {
    console.log(mail)


    
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'onclickcoin@gmail.com',
               pass: 'thisissupersecure'
           }
    });
    const mailOptions = {
        from: 'onclickcoin@gmail.com', // sender address
        to: 'hroussel96@gmail.com', // list of receivers
        subject: 'Hello world', // Subject line
        html: '<p>Hello!</p>'// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
}






export default SendMail;