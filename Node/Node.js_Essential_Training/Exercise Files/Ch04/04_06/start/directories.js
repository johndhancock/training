const fs = require("fs");

// fs.renameSync("./assets/logs", "accounts/logs");

// console.log("logs folder")

// fs.rmdir("./assets", function(err) {
//  if (err) {
//   console.log(err);
//  } else {
//   console.log("./assets directory removed")
//  }
// });


fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log("Files Removed");

fs.rmdir('./accounts', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('accounts directory removed')
  }
})