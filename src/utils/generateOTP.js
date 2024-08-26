const Otp = require('./../models/otp');

module.exports = (req , res , next)=>{

    const digit = '0123456789';
    let OTP = "";
    for(i=0 ; i<4 ; i++){
        OTP += digit[Math.floor(Math.random()*11)];
    }
    
    return OTP
}