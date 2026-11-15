import express from 'express';
import session  from 'express-session';

import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
//configure session

app.use(
    session({
        secret: 'my-secret-key',
        resave: false,
        saveUninitialized: false,

        cookie: {
            maxAge: 1000 * 60 *30,
            httpOnly: true,
            secure: false
        }
    })
)
// Registration Routes
app.use('/api',userRoutes);
app.get('/',(req,res)=>{
    res.send('Authetication and Authorization Demo')
})
app.listen(5000,()=>{
    console.log("server started");
})