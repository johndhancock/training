/*
- [Instructor] A powerful tool that ships with Node.js is the event emitter. The event emitter is Node,js' implementation of the pub-sub design pattern, and it allows us to create listeners for and emit custom events. The event emitter is a powerful tool that allows us to decouple logic and handle asynchronicity in JavaScript. */

const events = require("events");
// creating a new events emitter
let emitter = new events.EventEmitter();

// on a customEvent emit, console.log the user and messenger
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// customEvents emits
emitter.emit("customEvent", "Hellow World", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Eve");

// when there is standard input, pass the data to a function that ...
process.stdin.on("data", (data) => {
  // ... converts it to a string and trims it
  const input = data.toString().trim();
  // checks if the input is "exit", and if so, sends a customEvent emit and ends the process
  if (input === 'exit') {
    emitter.emit("customEvent", "Goodbye", "process");
    process.exit();
  }
  // else emits the customEvent with the data as the message and the user as "terminal"
  emitter.emit("customEvent", data.toString().trim(), "terminal");
})