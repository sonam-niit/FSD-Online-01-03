import express from 'express';

// create server
const app = express(); 

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Express JS!')
})
app.get('/login',(req,res)=>{
    res.status(200).send('Login Page!')
})
app.get('/register',(req,res)=>{
    res.status(200).send('Registration Form!')
})

// start server
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})

// run using node server.js
// check output http://localhost:3000/
// http://localhost:3000/login
// http://localhost:3000/register