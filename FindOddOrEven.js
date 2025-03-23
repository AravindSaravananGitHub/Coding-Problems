// Find Odd or Even

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isEven = (n) => {
  return n % 2 == 0;
};

function FindOddOrEven(num) {
  if (isEven(num)) {
    console.log("True");
  } else {
    console.log("False");
  }
}

rl.question("Enter the number : ", function (num) {
  FindOddOrEven(parseInt(num));
  rl.close();
});
