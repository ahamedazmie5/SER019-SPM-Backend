const express = require('express');
const router = express.Router();
const {
  createBlogs,
  getBlogsById,
  getAllBlogs,
  removeBlogById,
  updateBlogs,
} = require('../controllers/blogsController');

router.post('/createBlogs', createBlogs);
router.get('/getBlogById/:id', getBlogsById);
router.get('/getAllBlogs', getAllBlogs);
router.delete('/removeBlogById/:id', removeBlogById);
router.put('/updateBlogById/:id', updateBlogs);
module.exports = router;
