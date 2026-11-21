const logger = (req,res,next)=>{
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleString()}`
    );
    
    next();
}

export default logger;