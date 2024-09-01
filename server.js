require('dotenv').config();
require('./src/config/db');
const app = require('./src/app');
const https = require('node:https');
const fs = require('node:fs');
const PORT = process.env.PORT || 8000;


// app.listen(PORT , ()=>{
//     console.log(`🌍 Server running on port ${PORT} 🌍`);
// })


const option = {
    key : fs.readFileSync('server.key' , 'utf8'),
    cert : fs.readFileSync('./server.cert' , 'utf8')
}

https.createServer(option, app).listen(PORT, () => {
    console.log(`🌍 Server running on port ${PORT} 🌍`);
});