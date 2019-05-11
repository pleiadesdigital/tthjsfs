/* let myHeading = document.querySelector("#myHeading");
console.log(myHeading.textContent);
myHeading.textContent = "WTF is going on now?";
console.log(myHeading.textContent); */

const toggleButton = document.querySelector("#toggleList");
const list = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("#addItemButton");
const removeItemButton = document.querySelector("#removeItemButton");
const addItemInput = document.querySelector(".addItemInput");





/* VIDEO 5.3.6 */
/* Remove a NODE element */
removeItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.querySelector("#ulList li:last-child");
  ul.removeChild(li);
})





/* VIDEO 5.3.4 / 5 */
/* Creating and Appending New DOM Elements */

addItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
})


/* VIDEO 5.3.3 */
/* Styling Elements */
p.style.color = "azure";
p.style.backgroundColor = "slateblue";

// Hide the p and ul list adding style property (hide)
toggleButton.addEventListener('click', () => {

  if (list.style.display == 'none') {
    list.style.display = "block";
    toggleButton.textContent = "Hide List";
  } else {
    list.style.display = "none";
    toggleButton.textContent = "Show List";
  }

});




/* VIDEO 5.3.2 */
/* Changing Element Attributes */
let inputType = input.type;
console.log(inputType);
const inputClass = input.className;
console.log(inputClass);

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
  input.value = "";
});

p.title = "List description";

// changin the type attribute to 'input'
/* input.type = 'checkbox';
inputType = input.type;
console.log(inputType); */





/* VIDEO 5.3.1 */
/* textContent vs innerHTML */

/* button.addEventListener('click', () => {
  p.textContent = input.value + ':';
}); */

/* button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

let ul = document.querySelector("ul");
console.log(ul.innerHTML);

ul.innerHTML = "<li>blue cabbage</li>"; */
