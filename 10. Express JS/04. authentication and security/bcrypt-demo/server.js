import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());

app.post('/register',async(req,res)=>{
    try {
        const {username,password}= req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        console.log("original pass:", password);
        console.log("Hash pass:", hashPassword);
        
        res.status(201).json({
            message: "User registered",
            username: username,
            password: hashPassword
        })
    } catch (error) {
        res.status(500).json({message: "registation failed"})
    }
})

app.listen(5000,()=>{
    console.log("server started");
})