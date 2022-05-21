const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postShema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    sil: {
      type: String,
      require: true,
    },
    lov: {
      type: String,
      require: true,
    },
    int: {
      type: String,
      require: true,
    },
    tel: {
      type: String,
      require: true,
    },
    pam: {
      type: String,
      require: true,
    },
    vos: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postShema);

module.exports = Post;
