const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const BlogModal = require('../models/blogModel');

const createBlogs = async (req, res) => {
  console.log('blogs');
  const blogDta = req.body;
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

const removeBlogById = async (req, res) => {
  const { id } = req.params;
  const deleteBlog = {
    _id: id,
  };
  console.log('blog delete function', id);

  let data = await BlogModal.findByIdAndRemove(deleteBlog);

  res.json({ data: data, msg: 'delete success' });
};

const updateBlogs = async (req, res) => {
  const { id } = req.params;
  const { title, subDescription, description, img } = req.body;
  console.log('update blog function');

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No accept with id: ${id}`);

  const updatedTopic = {
    title: title,
    subDescription: subDescription,
    description: description,
    img: img,
    _id: id,
  };

  await BlogModal.findByIdAndUpdate(id, updatedTopic, { new: true });

  res.json(updatedTopic);
};

module.exports = {
  createBlogs,
  getBlogsById,
  getAllBlogs,
  removeBlogById,
  updateBlogs,
};
