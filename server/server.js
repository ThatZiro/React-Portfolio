import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const trasporter = nodemailer.createTransport({
  service: 'outlook',
  auth : {
    user : 'x',
    pass : 'x',
  }
})

app.post('/send-email', async(req,res) => {
  const {name, email, phone, message} = req.body;
  
  const mailOptions = {
    from: 'x',
    to: 'x',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  }
  
  try{
    const info = await trasporter.sendMail(mailOptions);
    console.log('Email send:', info.response);
    res.send('Email sent successfully!');
  } catch (err) {
    console.error('Error sending email');
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})