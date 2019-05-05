// CHALLENGE: SEARCH APP
var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


let index = "";

const search = prompt("Search for a Student. Quit to exit!");
if (search !== null) {search = search.toLowerCase(); }
if (search === 'tracy') {
  index = 0;
} else if (search === 'sarah') {
  index = 1;
} else if (search === 'jennifer') {
  index = 2;
} else if (search === 'anne') {
  index = 3;
} else if (search === 'scarlett') {
  index = 4;
} else {
  alert("No records under that name. Try again!");
  index = null;
}
if (index !== null) {
  student = students[index];
  message += "<ul>";
  message += "<li>" + student.name + "</li>";
  message += "<li>" + student.track + "</li>";
  message += "<li>" + student.achievements + "</li>";
  message += "<li>" + student.points + "</li>";
  message += "</ul><hr>";
  print(message);
}



// REPORT: TEACHER'S SOLUTION
/* var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (let i = 0; i < students.length; i++) {
 student = students[i];
  message += '<ul>';
  message += '<li>' + students[i].name + '</li>';
  message += '<li>' + students[i].track + '</li>';
  message += "<li>" + students[i].achievements + "</li>";
  message += "<li>" + students[i].points + "</li>";
  for (const key in student) {
    message +='<li>' + student[key] + '</li>';
  }
  message += '</ul><hr>';
}
print(message); */

// REPORT: MY SOLUTION (working great)
/* var listHTML = "";
for (let i = 0; i < students.length; i++) {
  listHTML += "<ul>";
  for (const prop in students[i]) {
    listHTML += "<li>" + prop + " - " + students[i][prop] + "</li>";
  }
  listHTML += "</ul><hr>";
}
document.getElementById("output").innerHTML = listHTML; */
