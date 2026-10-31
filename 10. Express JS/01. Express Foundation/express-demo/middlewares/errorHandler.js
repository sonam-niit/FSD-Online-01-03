// Error Handling Middleware
const errorHandler = (err, req,res, next)=>{
    console.log(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    })
}

export default errorHandler;