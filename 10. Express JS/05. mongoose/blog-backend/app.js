import express from 'express';
import logger from './middlewares/logger.js';
import blogRoutes from './routes/blogRoutes.js'
import connectDB from './config/db.js';

const app= express();

app.use(express.json()); //inbuilt middleware
app.use(logger) // custom middleware

app.use("/api/blogs", blogRoutes);

const startServer = async()=>{
    await connectDB();

    app.listen(5000,()=>console.log("Server is running og PORT 5000") )
}

startServer();