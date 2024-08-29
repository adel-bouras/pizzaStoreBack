const appError = require('./../utils/appError');
const jwt = require('jsonwebtoken');
const asyncwrapper = require('./../middleware/asyncwrapper');

module.exports =  asyncwrapper(async (req , res , next)=>{
    const header = req.headers['Authorization'] || req.headers['authorization'];
    const token = header.split(' ')[1];
    if(!token){
        return next(appError.createError( 401 , 'token is required' ));
    }
    try{
        await jwt.verify(token , process.env.JWT_KEY );
            return next();
    } catch(e){
        return next(appError.createError( 401 , 'invalid token' ));
    }
});