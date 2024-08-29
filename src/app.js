const express = require('express');
const userRoute = require('./routes/userRoutes');
const adminRoute = require('./routes/adminRoutes');
const path = require('node:path');

const app = express();

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/api/user' , userRoute );
app.use('/api/admin' , adminRoute );

app.all('*' , (req , res)=>{
    res.status(404).json({message : 'url not found'});
});

app.use((err , req , res , next)=>{
    res.status(err.status || 500).json({message : err.message || 'internal server error'});
});

module.exports = app;