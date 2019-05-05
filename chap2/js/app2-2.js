/* Tracking Multiple Items with Arrays */

// 2.8 Challenge
/*
Quiz Program
- Asks a series of questions and evaluate the answer. Create at least 3 questions.
- The program should track the number of questions answered correctly
- After all the questions, the program should print the number of questions answered correctly and display them. The same for the wrong questions.
- USE A TWO DIMENTIONAL ARRAY to hold the questions and the answers.
- You need to use a LOOP to cycle through each question and compare the response to the answer in the array
- Use the prompt method to ask the question
- Conditional Statement to see if the player's asnwer matches the real answer
- When the loop is done you should know how many questions were answered correctly. PRINT to the screen
*/

var questions = [
  ['Is the earth flat?', 'y'],
  ['Is Cannavis a medicine?', 'y'],
  ['Are GMOs good for your health?', 'n']
];
var countGood = 0;
var countWrong = 0;
var questionGood = [];
var questionWrong = [];

// PRINT FUNCTION
function print(message) {
  document.getElementById("output").innerHTML = message;
}

// CONVERTS ARRAY TO LI LIST WITH innerHTML FUNCTION
function arrayToList(arr) {
  var listHTML = "<ol>";
  for (let i = 0; i < arr.length; i++) {
    listHTML += "<li>" + arr[i] + "</li>";
  }
  listHTML += "</ol>";
  return listHTML;
}


for (let i = 0; i < questions.length; i++) {

  var answer = prompt(questions[i][0]);
  if (answer === questions[i][1]) {
    questionGood.push(questions[i][0]);
    countGood += 1;
  } else {
    questionWrong.push(questions[i][0]);
    countWrong += 1;
  }
}

print("<h2>Correct Answers</h2>" + arrayToList(questionGood) + "</h2><h2>Incorrect Answers</h2>" + arrayToList(questionWrong));



// my original solution
/* var questions = [
  ['Is the earth flat?', 'y'],
  ['Is Cannavis a medicine?', 'y'],
  ['Are GMOs good for your health?', 'n']
];
var countGood = 0;
var countWrong = 0;
var questionGood = '';
var questionWrong = '';

for (let i = 0; i < questions.length; i++) {

  var answer = prompt(questions[i][0]);
  if (answer === questions[i][1]) {
    questionGood += "<li>" + questions[i][0] + "</li >";
    countGood += 1;
  } else {
    questionWrong += "<li>" + questions[i][0] + "</li>";
    countWrong += 1;
  }
}


function print(message) {
  document.getElementById("output").innerHTML = message;
}

print(
  "<h2>Questions answered correctly</h2><ul>" +
    questionGood +
    "</ul><h2>Questions answered incorrectly</h2><ul>" +
    questionWrong +
    "</ul>"
); */


//print("<p>Good answers: " + countGood + ". The following questions were answered correctly:</p>");
//print("<ul>" + questionGood + "</ul>");
//document.getElementById("output").innerHTML = "<ul>" + questionGood + "</ul>";

/* print("<p>Wrong answers: " + countWrong + ". The following questions were answered incorrectly:</p>");
print("<ul>" + questionWrong + "</ul>"); */









// 2.7 Two Dimensional Arrays
/* var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born To Run', 'Bruce Springsteen'],
  ['Loui Loui', 'The Kingsmen'],
  ['Maybellene', 'Chick Berry']
];

function print(message) {
  document.write(message);
}
function printSongs(songs) {
  var listHTML = "<ol>";
  for (let i = 0; i < songs.length; i++) {
    listHTML += "<li>" + songs[i][0] + " - <strong>" + songs[i][1] + "</strong></li>";
  }
  listHTML += "</ol>";
  print(listHTML);
}
printSongs(playList); */



// 2.6 Useful Array Methods

// Program to check product stocks
/* var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potatoe', 'crackers', 'onion', 'tofu', 'cucumber'];
var search;
function print(message) {
  document.write("<p>" + message +"</p>");
}
while (true) {
  search = prompt("Search for a product. Type 'list' to show all, or 'quit' when you are done.");
  search = search.toLowerCase();
  if (search === 'quit') {
    print("You quit the application! Good bye.");
    break;
  }
  if (search === 'list') {
    print(inStock.join(" | "));
    break;
  }
  if (inStock.indexOf(search) > -1) {
    print(search + " is in stock.");
    break;
  } else if (inStock.indexOf(search) === -1 && search !== 'list') {
    print(search + " is either out of stock or inexistent.");
    break;
  }
} */

/* var daysInWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
var daysInWeekend = ['saturday', 'sunday'];

var allWeekDays = daysInWeek.concat(daysInWeekend);
daysString = allWeekDays.join(" | ");
console.log(daysString);

document.write(daysString);
console.log(allWeekDays.indexOf('seer')); */


// 2.5 for loop to iterate through an array
/* var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born To Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for (let i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);
 */



/* var students = ['Sasha', 'Lynn', 'Jennifer', 'Paul'];
console.log(students);

for (let i = 0; i < students.length; i++) {
  const element = students[i];
  console.log(element);
} */

// 2.4 Removing Items from Arrays
/* var numbers = [1, 2, 3, 4, 5, 6];
numbers.push("Marylin");
console.log(numbers);
lastNum = numbers.pop();
console.log(lastNum);
console.log(numbers); */


// 2.3 Adding Data to Arrays
/* var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
numbers.push('Marylin');
numbers.push(true);
console.log(numbers);

numbers.unshift('one', 'two', 'three')
console.log(numbers); */


/* for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  document.write(element);
} */


//2.1 Introduction to Arrays
/* var shoppingList = [
  'carrots',
  'eggs',
  'melon'
];

console.log(shoppingList[3]); */

