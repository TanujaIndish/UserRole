var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tanujas14797@gmail.com',
    pass: 'jkmcggfldnlrexwj'
  }
});

var mailOptions = {
  from: 'tanujas14797@gmail.com',
  to: 'tanukumar662017@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: 'html',
  attachments:[{
    filename:'download.jpg',
    path: '../src/assets/download.jpg'
  }]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});