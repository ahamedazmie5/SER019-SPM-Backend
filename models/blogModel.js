const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model('blogPosts', blogSchema);
