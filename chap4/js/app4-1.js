// 4.2 Using Arguments with Arrow Function


const square = x => x * x;

const cube = x => square(x) * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

var sayName = () => {
  const message = "My name is " + name;
  console.log(message);
};
const sayBye = () => console.log("Bye " + name);

sayName();
sayBye();

// function declaration
function divide1(a, b) {
  return a / b;
}
// function expression
const divide2 = function(a, b) {
  return a / b;
}
// arrow function expression
const divide3 = (a, b) => {
  return a / b;
}
// arrow function expression - concise
const divide4 = (a, b) => a / b;



// 4.1 Basic Arrow Syntax

// Example 1

/* const name = "Andrew";
var sayName = () => {
  const message = "My name is " + name;
  console.log(message);
}
const sayBye = () => {
  console.log("Bye " + name);
}
sayName();
sayBye(); */

