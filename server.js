const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Post = require("./models/post");
require("dotenv").config();
const { body, validationResult } = require("express-validator");

const app = express();

app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`listening port ${process.env.PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.get("/posts/:id", (req, res) => {
  const title = "Hero";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { post, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});

app.get("/posts", (req, res) => {
  const title = "Heroes";
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath("posts"), { posts, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath("error"), { title: "Error" });
    });
});

app.post(
  "/add-post",
  body("title").isLength({
    min: 2,
    max: 20,
  }),
  body("author").isLength({
    min: 2,
    max: 20,
  }),
  body("img").isLength({
    min: 8,
    max: 8,
  }),
  body("sil")
    .isLength({
      min: 2,
      max: 2,
    })
    .isNumeric(),
  body("lov")
    .isLength({
      min: 2,
      max: 2,
    })
    .isNumeric(),
  body("tel")
    .isLength({
      min: 2,
      max: 2,
    })
    .isNumeric(),
  body("pam")
    .isLength({
      min: 2,
      max: 2,
    })
    .isNumeric(),
  body("vos")
    .isLength({
      min: 2,
      max: 2,
    })
    .isNumeric(),
  (req, res) => {
    const { title, author, img, sil, lov, int, tel, pam, vos } = req.body;
    const post = new Post({
      title,
      author,
      img,
      sil,
      lov,
      int,
      tel,
      pam,
      vos,
    });

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    post
      .save()
      .then((result) => res.redirect("/posts"))
      .catch((error) => {
        console.log(error);
        res.render(createPath("error"), { title: "Error" });
      });
  }
);

app.get("/add-post", (req, res) => {
  const title = "Add a hero";
  res.render(createPath("add-post"), { title });
});

app.use((req, res) => {
  const title = "Error Page";
  res.status(404).render(createPath("error"), { title });
});
