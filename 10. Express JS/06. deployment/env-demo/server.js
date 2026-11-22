import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config(); //config environment

console.log("Environment: ",process.env.NODE_ENV);

if(process.env.NODE_ENV=="development"){
    console.log("Development Mode is enabled");
}
if(process.env.NODE_ENV=="production"){
    console.log("Production Mode is enabled");
}
// Read Env variables

const PORT = process.env.PORT
const APP_NAME = process.env.APP_NAME

app.get("/",(req,res)=>{
    res.send(`Welcome to ${APP_NAME}`)
})

app.listen(PORT,()=>console.log(`${APP_NAME} is 
    running on port ${PORT}`))