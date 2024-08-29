const generateOTP = require('../utils/generateOTP');
const User = require('../models/user');
const asyncwrapper = require('./asyncwrapper');
const appError = require('../utils/appError');
const nomeMailer = require('nodemailer');
const OTP = require('./../models/otp');

const sendOTP = asyncwrapper(async (req , res , next)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(user) return next( appError.createError(404 , 'user already exist') );
    const otp = generateOTP();

    await OTP.findOneAndUpdate(
        { email },
        { otp, expiresAt: new Date(Date.now() + 10 * 60 * 1000) },
        { upsert: true }
    );


    const transporter = nomeMailer.createTransport({
        service : 'Gmail',
        auth : {
            user : process.env.EMAIL ,
            pass : process.env.PASSWORD
        }
    });

    const emailTemplate = `
    <!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        
        .email-container {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
            min-width: 90%;
            background-color: #f8e08e;
            margin: auto; 
        }
        .header {
            background-color: #f52f57;
            color: #ededf4;
            padding: 10px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .footer {
            background-color: #e7e7e7;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
        .content h1 {
          color: #a20021;
            width: 100%;
            text-align: center;
            font-size: 40px;
            margin: 0; 
        }
        @media only screen and (max-width: 480px) { 
            .email-container {
                width: 100%; 
                padding: 5px; 
            }
            .content {
                padding: 8px; 
            }
            .content h1 {
                font-size: 30px; 
            }
            .button {
                padding: 5px 8px; 
                font-size: 14px; 
            }
            .footer {
                font-size: 10px; 
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to Pizza Hub!</h1>
        </div>
        <div class="content">
            <p>Hi,</p>
            <p>Please verify your Pizza Hub account to continue.</p>
            <h3>Your code :</h3>
            <h1>${otp}</h1>
            <p>Best regards 👋,<br>Pizza Hub Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Pizza Hub. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

`;

    const mailOption = {
        from : process.env.EMAIL,
        to : email,
        subject : 'Account verification',
        html : emailTemplate
    }



    transporter.sendMail(mailOption , (err , info)=>{
        if(err){
            return next( appError.createError(401 , "Fail sending email") )
        }
        res.status(200).json({message : "code send to the email successfully"});
    })
})

module.exports = sendOTP;