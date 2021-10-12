const nodemailer = require('nodemailer');
const dotenv = require('dotenv');



var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'badechristian27@gmail.com',
        pass: 'allow123#'
    },
    tls: {
        rejectUnauthorized: false
    }

});

const mailOptions = {
    from: 'badechristian27@gmail.com', // sender address
    cc:'xianzcode278@gmail.com',
    to: ['christianjeed.bade@biotechfarms.net','badechristian27@gmail.com','badechristianjeed@gmail.com'], // list of receivers
    subject: 'test checking email if its', // Subject line
    html: '<h1>this is a test mai.</h1>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
})

// const rst = sendEMail(mailOptions).then (res => {
//         if(res)
//             console.log(info)
//         else
//             console.log("ERROR");
//     })