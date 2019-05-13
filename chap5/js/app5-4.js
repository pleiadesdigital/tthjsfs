/* VARIABLES */
const toggleButton = document.querySelector("#toggleList");
const list = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("#addItemButton");
const removeItemButton = document.querySelector("#removeItemButton");
const addItemInput = document.querySelector(".addItemInput");
const listItems = document.querySelectorAll("#ulList li");
const listItems1 = document.getElementsByTagName("li");



/* VID 5.4.5 - 6 */
// Event Bubbling and Delegation / Event Object

list.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.color = "slateblue";
  }

});

list.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.color = "inherit";
  }
})

document.addEventListener("click", (event) => {
  console.log(event.target);
})




/* VID 5.4.4 */
// Listening for Events

console.log(listItems);
console.log(listItems1);

for (let i = 0; i < listItems.length; i++) {

  listItems[i].addEventListener("mouseover", () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  listItems[i].addEventListener("mouseout", () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });

}


/* VID 5.4.3 */
// Delaying Execution with setTimeout

/* window.setTimeout((something) => {
  console.log(something);
}, 8000, 'can I get a hello there!');


window.setTimeout(function (something) {
  console.log(something);
}, 4000, 'can I get a hello there!'); */


/* VID 5.4.2 */
// Function as Parameter

/* function exec(func, arg) {
  func(arg);
}
exec((something) => {
  console.log(something);
}, "irishman are killers"); */

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
