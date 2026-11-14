import express from 'express';

const app= express();

app.set("view engine","pug");
app.set("views","./views");

const PORT = 3000;
app.get("/",(req,res)=>{
    res.render('index',{
        title: 'Express Pug Demo',
        message: 'Welcome to express with Pug'
    })
})

app.get("/profile",(req,res)=>{
    const user = {
        name: "Sonam Soni",
        age: 36,
        profession: "Developer",
        skills: ["NodeJs","Express JS",
            "React"]
    }
    res.render('profile',{
        title: 'User Profile',
        user: user
    })
})

app.listen(PORT,()=>console.log("Server is running on PORT 3000"))