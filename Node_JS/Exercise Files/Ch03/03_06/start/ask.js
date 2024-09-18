const collectAnswers = require("./lib/collectAnswers");

// questions array
const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?"
];


// call the collectAnswers function with the questions array and an anonymous  done
// function that takes in the answers array
collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  process.exit();
})