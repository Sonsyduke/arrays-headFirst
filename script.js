const scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

const costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

const numberOfTests = scores.length;
const highestIndex = [];

function printAndGetHighScore(scores) {
  let highScore = 0;
  let output;
  for (let i = 0; i < scores.length; i++) {
    output = `Bubble solution #${i} score: ${scores[i]}`;
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

const highScore = printAndGetHighScore(scores);
const bestSolutions = getBestResults(scores, highScore);
console.log(`Bubble tests: ${numberOfTests}`);
console.log(`Highest bubble score: ${bestSolutions}`);

function getBestResults(scores, highScore) {
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}
