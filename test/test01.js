const { sample, CF, evaluation } = require("nodeml");

const movie = sample.movie(); // 영화 데이터셋 {movie_id: no, user_id: no, rating: num, like: num}

let train = [],
  test = [];
for (let i = 0; i < movie.length; i++) {
  if (Math.random() > 0.8) test.push(movie[i]);
  else train.push(movie[i]);
}

const cf = new CF();

cf.maxRelatedItem = 40;
cf.maxRelatedUser = 40;

cf.train(train, "user_id", "movie_id", "rating");

let gt = cf.gt(test, "user_id", "movie_id", "rating");
let result = cf.recommendGT(gt, 40);
let ndcg = evaluation.ndcg(gt, result);
console.log(ndcg);
