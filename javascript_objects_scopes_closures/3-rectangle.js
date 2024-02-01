// Rectangle.js
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is equal to 0 or not a positive integer, create an empty object
        return {};
      }
  
      // Initialize the instance attributes width and height
      this.width = w;
      this.height = h;
    }
  
    // Instance method to print the rectangle using the character X
    print() {
      if (this.width && this.height) {
        for (let i = 0; i < this.height; i++) {
          console.log('X'.repeat(this.width));
        }
      }
    }
  }
  
  module.exports = Rectangle;
  