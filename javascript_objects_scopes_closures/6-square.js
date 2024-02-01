// Square.js
const Rectangle = require('./5-square');

class Square extends Rectangle {
  constructor(size) {
    super(size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Default to 'X' if c is not defined
      super.print(c)
    }
    else{
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
              console.log(c.repeat(this.width));
            }
          }
       
    }

    
  }
}

module.exports = Square;

