const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "tanujas14797@gmail.com", 
      pass: "jkmcggfldnlrexwj", 
      
    },
  });
  
  let info = await transporter.sendMail({
    from: 'tanujas14797@gmail.com',
    to: "tanubanvi0491@gmail.com",
    subject: "Testing, testing, 123",
    html: `
    <h1>Hello there</h1>
    <p>Isn't NodeMailer useful?</p>
    `,
  });

  console.log(info.messageId); 
}

main()
.catch(err => console.log(err));


