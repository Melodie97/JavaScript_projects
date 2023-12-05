/***************************************************
                 STANDARD FOR-LOOPS
***************************************************/
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var colors = ["red", "blue", "green", "yellow"];
for (var colorIndex = 0; colorIndex < colors.length; colorIndex++) {
  console.log(colors[colorIndex]);
}

var myString = "This is a string.";
for (var i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

/***************************************************
                 FOR-OF-LOOPS
***************************************************/
// This loop is mostly used with arrays and strings

for (var eachColor of colors) {
  console.log(eachColor);
}
for (var eachString of myString) {
  console.log(eachString);
}

/***************************************************
                 WHILE-LOOPS
***************************************************/
var index = 0;
// while (index < colors.length) {
//   console.log(colors[index]);
//   index++;
// }

// while (index <= 10) {
//   console.log(index);
//   index++;
// }

var newString = "";
// while (index <= 10) {
//   newString += "The incrementor has gone up to " + index + "\n";
//   index++;
// }
// console.log(newString);

// while (index <= 10) {
//   newString += `The incrementor has gone up to ${index} \n`;
//   index++;
// }
// console.log(newString);

while (index <= 10) {
  newString += `The incrementor has gone up to ${index}, and the square of the incrementor is ${
    index ** 2
  } \n`;
  index++;
}
console.log(newString);
