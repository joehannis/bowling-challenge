const frames = require("./frames");
const score = require("./scorecard");
const ConsolePrinter = require("./console-printer");
const consolep = new ConsolePrinter();
const frameInstance = new frames();
const scorecard = new score();

class App {
  constructor() {}

  run() {
    for (let i = 1; i <= 9; i++) {
      consolep.roll_1().then((roll1) => {
        frameInstance.frames[`frame_${i}`][0] += roll1;
      });
      console.log(frameInstance.frames);
      console.log(`Total Score: ${scorecard.total}`);
    }
  }
}

module.exports = App;
