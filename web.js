const express = require("express");
const app = express();
const port = 3000;
const bowlingApp = require("./app");
const myApp = new bowlingApp();

app.get("/", (req, res) => {
  let roll = window.prompt("What was your score for roll 1?");
  res.send(`${roll}`);
});

// app.post("/up", (req, res) => {
//   thermostat.up();
//   res.send(prompt`${thermostat.getTemperature()}`);
// });

// app.post("/down", (req, res) => {
//   thermostat.down();
//   res.send(`${thermostat.getTemperature()}`);
// });

// app.delete("/temperature", (req, res) => {
//   thermostat.reset();
//   res.send(`${thermostat.getTemperature()}`);
// });

console.log(`Server listening on localhost:${port}`);
app.listen(port);
