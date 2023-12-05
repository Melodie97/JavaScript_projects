var myString = "I am really hungry for some";
console.log(myString);

var myUpperString = myString.toUpperCase();
console.log(myUpperString);

var reallyLocation = myString.search("really"); //Search takes the string you are looking for
var specialWord = myString.substring(reallyLocation, 11); //Sunstring takes the startindex and end index
specialWord = specialWord.toUpperCase();
var newString = myString.replace("really", specialWord); //Replace takes in the word you want to replace, and what you want to replace it with
console.log(newString);

var foods = ["cheese", "pie", "lunch", "breakfast"];
for (var i = 0; i < foods.length; i++) {
  console.log(`${myString} ${foods[i]}`);
}

for (var eachFood of foods) {
  console.log(`${newString} ${eachFood}`);
}

/***************************************************
                 LOOPS + SELECTIONS
***************************************************/

for (var i = 0; i < foods.length; i++) {
  if (i % 2 === 0) {
    console.log(`${newString} ${foods[i].toUpperCase()}`);
  } else {
    console.log(`${newString} ${eachFood}`);
  }
}
