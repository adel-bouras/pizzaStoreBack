const jwt = require('jsonwebtoken');

module.exports = ( payload )=>{
    const token = jwt.sign(payload , process.env.JWT_KEY , {expires : '1d'});
    return token;
}