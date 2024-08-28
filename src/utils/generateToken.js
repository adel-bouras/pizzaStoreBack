const jwt = require('jsonwebtoken');

module.exports = ( payload )=>{
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });
    return token;
}