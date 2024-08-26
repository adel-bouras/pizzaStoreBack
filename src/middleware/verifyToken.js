const appError = require('./../utils/appError');
const jwt = require('jsonwebtoken');

module.exports = (req , res , next)=>{
    const header = req.headers['Authorization'] || req.headers['authorization'];
    const token = header.split(' ')[1];
    if(!token){
        return next(appError.createError( 401 , 'token is required' ));
    }
    try{
        jwt.verify(token , process.env.JWT_KEY);
        return next();
    } catch(e){
        return next(appError.createError( 401 , 'invalid token' ));
    }
};