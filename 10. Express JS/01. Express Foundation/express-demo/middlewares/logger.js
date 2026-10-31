// middleware
const logger= ((req,res,next)=>{
    console.log(req.method);
    // const error = new Error('Custom Error')
    // next(error);
    next();
})

export default logger;