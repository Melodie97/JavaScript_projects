/***************************************************
                 FUNCTIONS
***************************************************/

function squares() {
  var x = 10;
  console.log(x ** 2);
}
squares();

function getData() {
  var number = prompt("Enter a whole number");
  if (number < 10) {
    console.log("You entered a number smaller than 10");
    for (var i = 0; i < 10; i++) {
      if (i == number) {
        console.log(`Here is a ${i} <-- This is your number`);
      } else {
        console.log(`Here is a ${i}`);
      }
    }
  } else if (number >= 10) {
    console.log("You entered a big number");
  } else {
    console.log("ERROR: You didn't enter a number");
  }
}
//getData();

function returnSum(num1, num2) {
  return num1 + num2;
}
x = returnSum(5, 8);
console.log(x);

console.log(Math.random());

function randomInt(min, max) {
  var roundedRandomVal = Math.floor((max - min + 1) * Math.random());
  return min + roundedRandomVal;
}
console.log(randomInt(7, 20));

/***************************************************
                 FUNCTION EXPESSIONS
***************************************************/
var greeting = function () {
  console.log("Good morning Sunshine!");
};

greeting();

/***************************************************
                 ARROW FUNCTIONS
***************************************************/
var salute = () => "Top of the morning to you lad!";
console.log(salute());
var sumNumbers = (num1, num2) => num1 + num2;
console.log(sumNumbers(4, 7));
