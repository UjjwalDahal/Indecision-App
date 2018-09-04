const square = x => {
  return x * x;
};
console.log(square(10));

const getFirstName = name => {
  return name.split(' ')[0];
};

console.log(getFirstName('ujjwal dahal'));
// challenge area

const multiplier = {
  numbers: [3, 4, 20, 5, 6, 7, 8, 9, 0, 9],
  singleNumber: 22,
  multiplyNumber() {
    return this.numbers.map(number => number * this.singleNumber);
  }
};

console.log(multiplier.multiplyNumber());
