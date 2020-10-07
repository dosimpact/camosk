const { sample, CF, evaluation } = require("nodeml");

let train = [
  [1, 1, 2],
  [1, 2, 2],
  [1, 4, 5],
  [2, 3, 2],
  [2, 5, 1],
  [3, 1, 2],
  [3, 2, 3],
  [3, 3, 3],
];
let test = [[3, 4, 1]];

const cf = new CF();
cf.train(train);
let gt = cf.gt(test);
let result = cf.recommendGT(gt, 1);

let ndcg = evaluation.ndcg(gt, result);

console.log(gt);
console.log(result);
console.log(ndcg);
