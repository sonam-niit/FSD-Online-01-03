import express from 'express';

import blogRoutes from './routes/blogRoutes.js';

const app = express();

app.set('view engine','pug');
app.use(express.static('public'));//static file loading

app.use('/',blogRoutes);

app.listen(3000, ()=>console.log("Server started"))