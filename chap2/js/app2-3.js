/* CHAP 2.3 TRACKING DATA USING OBJECTS */

// 3.5 CHALLENGE: Students Data Structure

var students = [
  { name: "Tracy", track: "wed design", achievements: 10, points: 2540 },
  { name: "Sarah", track: "graphic design", achievements: 8, points: 4950 },
  { name: 'Jennifer', track: 'php', achievements: 12, points: 980 },
  { name: 'Anne', track: 'javascript', achievements: 25, points: 1320 },
  { name: 'Scarlett', track: 'front end web development', achievements: 18, points: 1200 }
];

// WORKING SOLUTION WITH innerHTML
/* var listHTML = "";
for (let i = 0; i < students.length; i++) {
  listHTML += "<ul>"
  for (const prop in students[i]) {
    listHTML += "<li>" + prop + " - " + students[i][prop] + "</li>";
  }
  listHTML += "</ul><hr>";
}
document.getElementById("output").innerHTML = listHTML; */


// WORKING SOLUTION WITH document.write
/* for (let i = 0; i < students.length; i++) {
  for (const prop in students[i]) {
    var string = prop + " - " + students[i][prop] + "<br>";
    print(string);
  }
}
function print(html) {
  document.write(html);
} */


// 3.4 Mixing and Matching an Array of Objects

/* var countGood = 0;
var countWrong = 0;
var questionGood = [];
var questionWrong = [];

var questions = [
  { question: "Is the earth flat?", answer: "y" },
  { question: "Is Cannavis a medicine?", answer: "y" },
  { question: "Are GMOs good for your health?", answer: "n" }
];

// PRINT FUNCTION
function print(message) {
  document.write(message);
}

for (let i = 0; i < questions.length; i++) {
  var answer = prompt(questions[i].question);
  if (answer === questions[i].answer) {
    questionGood.push(questions[i].question);
    countGood += 1;
  } else {
    questionWrong.push(questions[i].question);
    countWrong += 1;
  }
}
var html = "You got " + countGood + " question(s) right.";
print(html); */

// 3.3 Using 'for in' to loop through an object's properties

/* var person = {
  name: "Carlo Magno",
  country: "US",
  age: 45,
  treehouseStudent: true,
  skills: ["javascript", "html", "css", "php"]
};
for (const prop in person) {
  console.log(prop + ' - ' + person[prop]);
} */


/* var student = {
  name: 'Dave',
  grades: [80, 85, 90, 95]
} */


// 3.2 Accessing Object Properties
/* var person = {
  name: 'Carlo Magno',
  country: 'US',
  age: 45,
  treehouseStudent: true,
  skills: ['javascript', 'html', 'css', 'php']
}

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>'
message += '<p>I am ' + person.age +' years old and live in the '+ person.country +'</p>'
message += '<p>It is ' + person.treehouseStudent + ' that I am student of TreeHouse. </p>'
person.name = 'Petrucci';
message += '<p>My real name though is ' + person.name + ' for all of you that really know me. '
person.age += 1;
message += '<p>My age now is ' + person.age + '</p>'

// displaying arrays
message += '<p>I have ' + person.skills.length + ' skills in web development. They are: ' + person.skills.join(', ') + '.</p>';
print(message); */



// 3.1 Object Literals
/* var person = {
  name: 'Sarah',
  country: 'US',
  age: 45,
  treehouseStudent: true,
  skills: ['javascript', 'html', 'css', 'php']
} */
