// Square.js
const Rectangle = require('./5-square');

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Default to 'X' if c is not defined
    }

    super.print(c);
  }
}

module.exports = Square;

