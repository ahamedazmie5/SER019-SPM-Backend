const express = require('express');
const router = express.Router();
const {
  createBlogs,
  getBlogsById,
  getAllBlogs,
} = require('../controllers/blogsController');

router.post('/createBlogs', createBlogs);
router.get('/getBlogById/:id', getBlogsById);
router.get('/getAllBlogs', getAllBlogs);

module.exports = router;
