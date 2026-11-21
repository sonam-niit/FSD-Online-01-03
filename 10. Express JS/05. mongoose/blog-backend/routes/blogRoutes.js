import express from 'express';
import { createBlog, findById, getAllBlogs } from '../controllers/blogController.js';

const router = express.Router();

router.post('/',createBlog);
router.get('/',getAllBlogs);

router.get('/:id',findById);
// router.delete('/:id',findByIdAndDelete);
// router.put('/:id',getbyIDAndUpdate);

export default router;