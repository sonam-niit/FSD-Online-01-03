import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config(); //config environment

console.log("Environment: ",process.env.NODE_ENV);

const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to Express API",
        environment: process.env.NODE_ENV
    })
})

app.get("/health",(req,res)=>{
    res.send("Server is Healthy!")
})

app.listen(PORT,()=>console.log(`App is 
    running on port ${PORT}`))