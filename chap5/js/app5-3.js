/* let myHeading = document.querySelector("#myHeading");
console.log(myHeading.textContent);
myHeading.textContent = "WTF is going on now?";
console.log(myHeading.textContent); */

const input = document.querySelector("input");
const p = document.querySelector("p.description");
const button = document.querySelector("button");

/* button.addEventListener('click', () => {
  p.textContent = input.value + ':';
}); */

/* VIDEO 5.3.3 */
let inputType = input.type;
console.log(inputType);
const inputClass = input.className;
console.log(inputClass);

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});

p.title = "List description";

// changin the type attribute to 'input'
/* input.type = 'checkbox';
inputType = input.type;
console.log(inputType); */





/* VIDEO 5.2.2 */

/* button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

let ul = document.querySelector("ul");
console.log(ul.innerHTML);

ul.innerHTML = "<li>blue cabbage</li>"; */
