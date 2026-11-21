import Blog from "../models/Blog.js";

// CREATE BLOG
export const createBlog = async(req,res)=>{
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json({
            message: "Blog created successfully",
            data: blog
        })
    } catch (error) {
         res.status(400).json({
            message: error.message
        })
    }
}

// GET ALL Blogs
export const getAllBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            count: blogs.length,
            data: blogs
        })
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

// GET BY ID
export const findById = async(req,res)=>{
    try {
        const blog = await Blog.find(req.params.id);
        // if not found then also return response
        res.status(200).json(blog)
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}
// DELETE BY ID

// UPDATE BY ID