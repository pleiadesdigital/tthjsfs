// 2.9 Challenge: improve refactoring

var html = '';
var rgbColor;

function generateValue() {
  return Math.floor(Math.random() * 256);
}
function randomColor() {
  var Color = 'rgb(';
  Color += generateValue() + ',';
  Color += generateValue() + ',';
  Color += generateValue() + ')';
  return Color;
}
function print(message) {
  document.write(message);
}

for(i = 1; i <= 10; i++) {
  html += '<div class="dot" style="background-color:' + randomColor() + '">&nbsp;</div>';
}
print(html);

// 2.7 Challenge: refactoring

/* var html = '';
var red;
var green;
var blue;
var rgbColor;

for(i = 1; i <= 100; i++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  rgbColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
  html = '<div class="dot" style="background-color:' + rgbColor + '">&nbsp;</div>';
  document.write(html);
} */


// 2.6 Exiting Loops
/* var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

while(guessCount < 5) {
  guess = prompt("Guess a number between 1 and 10");
  guessCount += 1;

  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}
if (correctGuess) {
  document.write(`You got it right! the random number was ${randomNumber} It took you ${guessCount} times.`);
} else {
  document.write(`You failed! The random number was ${randomNumber}`);
} */


// 2.5 For Loops
/* var html = '';

for (let i = 1; i <= 10; i++) {
  document.write(`<div> ${i} </div>`);
} */

// 2.4 Do While Loops

/* var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt("Guess a number between 1 and 10");
  guessCount += 1;

  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (correctGuess == false);
document.write(`You got it right! the random number was ${randomNumber} It took you ${guessCount} times.`); */



// 2.3 Closer look at loops
/* var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write(`<p>Number guessed: ${guess}</p>`);
document.write(`<p>Number of attempts ${attempts}</p>`); */


// 2.2 What are Loops
/* function randomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

var i = 0;
while (i <= 10) {
  document.write(`<ul><li> ${randomNumber(6)} </li></ul>`);
  i++;
} */

