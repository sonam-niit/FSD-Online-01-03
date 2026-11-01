// demo for express.json and urlencoded
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post('/register', (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "User Registered Successfully"
    })
})

app.listen(3000, () => {
    console.log('Server running on Port 3000');
})

// npm start to run
// check in postman to pass data
