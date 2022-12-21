class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = length;
  }

  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  toString() {
    let newString = this.innerString;
    if (newString.length > this.innerLength) {
      if (this.innerLength === 0) {
        newString = "...";
        return newString;
      }
      newString = newString.split("");
      newString.splice(this.innerLength, this.innerLength);
      newString = newString.join("");

      newString += "...";
    }
    return newString;
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
