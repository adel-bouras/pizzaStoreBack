const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.DB).then(()=>{
    console.log('server connected to database');
    
})
.catch(()=>{
    console.log('FAIL connecting to database');
});