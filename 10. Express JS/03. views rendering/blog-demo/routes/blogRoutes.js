import express from 'express';
import blogs from '../data/blogs.js';

const router = express.Router();
router.get('/',(req,res)=>{
    res.render('index',{
        title: 'My Tech Blog',
        blogs: blogs
    })
})

router.get('/blog/:id',(req,res)=>{
    const blogId = parseInt(req.params.id);
    const blog = blogs.find(b=>b.id === blogId);
    if(!blog){
        return res.status(404).render('404',{
            title: "Blog Not Found"
        })
    }

    res.render('blog',{
        title: blog.title,
        blog: blog
    })
})

export default router;