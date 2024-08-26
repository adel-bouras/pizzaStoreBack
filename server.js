require('dotenv').config();
require('./src/config/db');
const app = require('./src/app');
const https = require('node:https');
const fs = require('node:fs');
const PORT = process.env.PORT || 8000;

const option = {
    key : fs.readFilesync('./server.key'),
    cert : fs.readFilesync('./server.cert')
}

https.createServer(option , app).listen(()=>{
    console.log(`server running on port ${PORT}`);
})