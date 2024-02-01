// Square.js
const Rectangle = require('./5-square');

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the parent class (Rectangle) using super()
  }

  // Instance method to print the square using the specified character or 'X' if not provided
  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    // Use the print() method of the parent class (Rectangle)
    this.print(c);
  }
}

module.exports = Square;
