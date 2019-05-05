/* MAKING DECISIONS WITH CONDITIONAL STATEMENTS */

// CHALLENGE
// 1. asks 5 questions
// 2. keep track of correct answers
// 3. message with number of questions answered correctly
// 4. rank the player.
    // 4.1 gold 5 correct
    // 4.2 silver 3-4 correct
    // 4.3 bronce 2 correct
    // 4.4 go fuck yourself 0-1 correct

var question1 = parseInt(prompt("square root of 16?"));
var question2 = parseInt(prompt("3 to the power of 3?"));
var question3 = prompt("most desirable female, name only").toLowerCase();
var question4 = prompt("how we call a fan of baisa-bolivar").toLowerCase();
var question5 = parseInt(prompt("(a + b)^2"));

var correctAnswers = 0;
if (question1 === 4) {
  correctAnswers += 1;
}
if (question2 === 27) {
  correctAnswers += 1;
}
if (question3 === 'scarlett') {
  correctAnswers += 1;
}
if (question4 === 'choli') {
  correctAnswers += 1;
}
if (question5 === 911) {
  correctAnswers += 1;
}

if (correctAnswers === 5) {
  alert(correctAnswers + " answers correct. You won GOLD!");
} else if (correctAnswers >= 3 && correctAnswers < 5) {
  alert(correctAnswers + " answers correct. You won SILVER!");
} else if (correctAnswers === 2) {
  alert(correctAnswers + " answers correct. You won BRONCE");
} else if (correctAnswers < 2) {
  alert(correctAnswers + " answer(s) correct. You fucking LOOSE!!");
}




// VID 4.5 IMPROVING THE RANDOM NUMBER GAME
/* var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(
  prompt("I am thinking of a number between 1 and 6. What is it?")
);

if (guess === randomNumber) {
  correctGuess = true;
} else if (guess < randomNumber) {
  var guessMore = parseInt(prompt("Try again. The random number is greater!"));
  if (guessMore === randomNumber) {
    correctGuess = true;
  }
} else if (guess > randomNumber) {
  var guessMore = parseInt(prompt("Try again. The random number is lower!"));
  if (guessMore === randomNumber) {
    correctGuess = true;
  }
}

if (correctGuess === true) {
  document.write("You got it RIGHT! The random number was " + randomNumber + ".");
} else {
  document.write("Sorry, the number was " + randomNumber + ".");
} */


// VID 4.4 SAME PROGRAM USING BOOLEANS
/* var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt("I am thinking of a number between 1 and 6. What is it?"));

if (guess === randomNumber) {
  correctGuess = true;
}

if (correctGuess === true) {
  document.write("You got it RIGHT!");
} else {
  document.write("Sorry, the number was " + randomNumber + ".");
} */


// VID 4.3 CREATE A RANDOM NUMBER
/* var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt("I am thinking of a number between 1 and 6. What is it?"));

if (guess > 6 || guess < 1 || isNaN(guess)) {
  alert("You need to enter a number between 1 and 6. Try again.");
  location.reload();
}
else if (randomNumber === guess) {
  document.write(
    "Correct! You nailed it. " + guess + " was the correct number! "
  );
} else {
  document.write(
    "You got it wrong! The number I was thinking was " + randomNumber
  );
}
 */


// VID 4.1 INTRO TO COND STATEMENTS
/* var answer = prompt("What programming language is the name of a gem?").toLowerCase();
if (answer === 'ruby') {
  document.write("<p>That's is right!</p>")
} else {
  document.write("<p>Wrong answer!</p>");
} */
