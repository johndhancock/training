const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// function that takes in questions array and a done function
module.exports = (questions, done) => {
  // empty answers array
  const answers = [];

  // function to handle question answers, takes in the answer
  const questionAnswered = (answer) => {
    // add the answer to the answers array
    answers.push(answer.trim());
    // if the answres array length is less than the questions length ...
    if (answers.length < questions.length) {
      // use the readline.question function to pass in the next question
      // and this function as the callback
      rl.question(questions[answers.length], questionAnswered);
    } else {
      // else use the done function supplied
      return done(answers);
    }
  };

  // kick off the questions with the first question
  rl.question(questions[0], questionAnswered);
}