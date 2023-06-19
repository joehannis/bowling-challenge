class Frames {
  constructor() {
    this.frames = {};
  }
  frame_no(number) {
    const frameKey = `frame_${number}`;
    return this.frames[frameKey];
  }
}

module.exports = Frames;
