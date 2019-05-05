/* SECTION 3 Defining Variables with LET and CONST */

// 3.4 Defining a Variable with LET

const buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function() {
    alert("Button " + i + " Pressed");
  });
}



/* const person = {
  firstName: "Andrew",
  role: "Teacher"
}

function personDescription(person) {
  let description = person.firstName;
  if (person.role) {
    description = description + " is a ";
    description = description + person.role;
  }
  console.log(description);
}

personDescription(person);

let score = 0;
let age = 33;
let isHungry = false;
score += 1;

age = 34 ;
isHungry = true; */



// 3.3 Using constants and arrays with objects
/* const days = ["Monday"];
days.push("Tuesday");
console.log(days);

const person = { firstName: "Imogen" };
person.lastName = "Heap";
person.firstName = "Arthur"
console.log(person); */


// 3.2 Creating unchanging variables with const
/* var name = "Andrew";
function createFullName(fName, lName) {
  const name = fName + " " + lName;
  console.log(name);
}

console.log(name);
createFullName('Joel', 'Kraft'); */



/* const pi = 3.14159;
console.log(pi);
pi = 3.14; */
