const frames = require("./frames");
const ConsolePrinter = require("./console-printer");
const consoleInstance = new ConsolePrinter();
const frameInstance = new frames();

class Scorecard {
  constructor() {
    this.running_score = [];
    this.bonus = [];
    this.frame_index = 0;
    this.total = 0;
  }

  addFrame(num1, num2) {
    this.frame_index += 1;
    if (num2 === undefined) {
      num2 = 0;
    }
    frameInstance.frames[`Frame ${this.frame_index}`] = [num1, num2];
    this.calculateStrikeSpare(num1, num2);
    consoleInstance.printFrames();
  }

  calculateScore() {
    for (let frameKey in frameInstance.frames) {
      let frame = frameInstance.frames[frameKey];
      let result = frame.reduce((a, b) => a + b, 0);
      this.total += result;
    }
    console.log(`Total Score: ${this.total}`);
  }

  calculateStrikeSpare(num1, num2) {
    if ((this.frame_index > 1) & (this.frame_index < 10)) {
      const previousFrame =
        frameInstance.frames[`Frame ${this.frame_index - 1}`];

      if (previousFrame[0] === 10) {
        previousFrame.push(num1, num2);

        if (this.frame_index > 2) {
          const previousFrame2 =
            frameInstance.frames[`Frame ${this.frame_index - 2}`];

          if (previousFrame2[0] === 10) {
            previousFrame2.push(num1);
          }
        }
      }
    }
  }

  // tenth_frame()
  //   let frame = frameInstance.frames[frame_10];

  // }
}

module.exports = Scorecard;
