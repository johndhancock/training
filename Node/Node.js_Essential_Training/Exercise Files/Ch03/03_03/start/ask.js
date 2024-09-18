const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// questions array
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?"
];

// function that takes in questions array and a done function
function collectAnswers(questions, done) {
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

// call the collectAnswers function with the questions array and an anonymous  done
// function that takes in the answers array
collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
})