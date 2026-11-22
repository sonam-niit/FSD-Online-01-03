import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;
// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))
app.get('/api/data',(req,res)=>{
    res.json({
        message: "Hello From API with cors enabled",
        status: 'Success'
    })
})

app.listen(PORT,()=>{
    console.log("server started");
})