import express from 'express';
import logger from './middlewares/logger.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express(); 

app.use(logger); //middleware

app.use(errorHandler); // Error Handler

app.get('/users',(req,res)=>{

    res.status(200).send('Get All Users!')
})
app.get('/users/:id',(req,res)=>{
    const id= req.params.id
    res.status(200).send('User with ID '+id+ " found")
})
app.post('/users',(req,res)=>{
    res.status(201).send('New User Created Successfully!')
})
app.put('/users/:id',(req,res)=>{
    const id= req.params.id
    res.status(200).send('User Updated Successfully! ID: '+id)
})
app.delete('/users/:id',(req,res)=>{
    const id= req.params.id
    res.status(200).send('User deleted Successfully!ID: '+id)
})
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})

// access URL: http://localhost:3000/users (GET , POST)
// http://localhost:3000/users/45 (GET, PUT, DELETE)