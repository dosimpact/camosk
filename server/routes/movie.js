import express from "express";
import { Movie } from "../models/Movie";
import { MovieComment } from "../models/MovieComment";

const router = express.Router();

router.get("/all", async (req, res) => {
  const result = await Movie.find();
  console.log(result);
  return res.status(200).json({
    success: true,
  });
});

router.post("/createMovie", (req, res) => {
  const { title } = req.body;
  Movie.findMoiveByTitle();
  const movieIns = new Movie({ title });
  movieIns.printThis();
  movieIns.save().then((result) => {
    console.log("success create movie", result);
    res.status(200).json({
      success: true,
    });
  });
});

router.post("/addComment", (req, res) => {
  const { content, movieID } = req.body;

  const movieComment = new MovieComment({ content, movieID });
  movieComment.save().then((result) => {
    console.log("success create movie", result);
    res.status(200).json({
      success: true,
    });
  });
});

router.post("/createComment", (req, res) => {
  const { content, movieID } = req.body;
  const movieComment = new MovieComment({ content, movieID });
  movieComment.save().then((result) => {
    console.log("success create movie", result);
    res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
