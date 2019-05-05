/* CHALLENGE 1 */

function rangeRandom(lowNum, highNum) {
  return output = Math.floor(Math.random() * (highNum - (lowNum - 1)) + lowNum);
}
var lowNum = parseInt(prompt("Enter a LOW number"));
var highNum = parseInt(prompt("Enter a HIGH number"));

if (isNaN(lowNum) || isNaN(highNum)) {
  alert("You must enter two numbers, not letters or anything else. Try again!");
  //throw new Error("A number motherfucker... a number!");
  location.reload();
} else {
  document.write("A random number between " + lowNum + " and " + highNum + " is: " + rangeRandom(lowNum, highNum));
}








/* VID 5.1/5.3/5.4 Introduction to Functions */

/* function getRandomNumber(upper) {
  var randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
} */

//alert(getRandomNumber(10));

// create a rectangule function
/* function getArea(width, length, unit) {
  var area = width  * length;
  return area + " " + unit;
} */
/* console.log(getArea(10, 50, 'sq tf'));
console.log(getArea(8, 120, "sq tf"));
console.log(getArea(34, 89, "sq tf")); */

// using the same variable in different scopes. they act like two different variables
/* function greeting() {
  var person = 'Lilah';
  alert(person);
}
var person = 'George';
greeting();
alert(person);
greeting(); */

// the same function, removing the 'var' from the function, changes the global variable for ever
/* function greeting() {
  person = "Lilah";
  alert(person);
}
var person = "George";
greeting();
alert(person);
greeting(); */



