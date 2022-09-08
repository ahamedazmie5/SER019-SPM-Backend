const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const BlogModal = require('../models/blogModel');

const createBlogs = async (req, res) => {
  console.log('blogs');
  const blogDta = req.body;
  console.log(blogDta, 'aaaaaaaaaaaa');

  const newBlog = new BlogModal(blogDta);
  console.log('saved data', newBlog);
  try {
    await newBlog.save();

    res.status(200).json({ newBlog });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getBlogsById = async (req, res) => {
  const { id } = req.params;
  console.log(id, 'idddd');

  try {
    const blogs = await BlogModal.findById(id);
    console.log(blogs, 'ssssssssssssssssss');

    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  console.log('mmmmmmmm');

  try {
    const AllBlogs = await BlogModal.find();
    console.log(AllBlogs);

    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createBlogs, getBlogsById, getAllBlogs };
