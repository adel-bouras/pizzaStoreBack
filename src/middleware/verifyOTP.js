const OTP = require('../models/otp');

const verifyOTP = async (req, res, next) => {
    const { email, otp } = req.body;

        const otpRecord = await OTP.findOne({ email });

        if (!otpRecord) {
            return res.status(400).json({ message: 'OTP not found' });
        }

        if (otpRecord.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (new Date() > otpRecord.expiresAt) {
            return res.status(400).json({ message: 'OTP has expired' });
        }
        await OTP.findOneAndDelete(
            { email },
            { otp, expiresAt: new Date(Date.now() + 10 * 60 * 1000) },
            { upsert: true }
        );
        
        next();
};

module.exports = verifyOTP;
