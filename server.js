const { application } = require('express');
const express = require('express');
const jwt = require ('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'Hi There, how u doin!' 
    });
});

app.post('/api', (req, res) => {
    res.json({
        message: 'Hi There, how u doin! via post' 
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        id:1,
        name:'gautam',
        email:'gautam071@gmail.com',
    }
    
    jwt.sign({
        user:user
    }, 'secretkey', (err, token) => {
        res.json({
            token:token
        });
    });
});

app.listen(5000, () => console.log("Server started"));