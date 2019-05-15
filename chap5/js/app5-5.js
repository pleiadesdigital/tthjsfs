/* VARIABLES */
const toggleButton = document.querySelector("#toggleList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("#addItemButton");
const addItemInput = document.querySelector(".addItemInput");
const listUl = listDiv.querySelector('ul');
const listItems = document.querySelectorAll("#ulList li");
const listItems1 = document.getElementsByTagName("li");
const removeLi = document.querySelector(".removeLi");
const list = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


/* CHAP 5.5 Traversing the DOM */

/* VID 5.5.6 Getting the First and Last Child */

firstListItem.style.backgroundColor = "slateblue";
lastListItem.style.backgroundColor = "mediumpurple";


/* VID 5.5.5 Getting All Children of a Node with children */
function attachListItemsButtons(li) {
  let up = document.createElement("button");
  up.className = "upButton";
  up.textContent = "Up";
  li.appendChild(up);
  let down = document.createElement("button");
  down.className = "downButton";
  down.textContent = "Down";
  li.appendChild(down);
  let remove = document.createElement("button");
  remove.className = "removeLi";
  remove.textContent = "Remove";
  li.appendChild(remove);
}

for (let i = 0; i < list.length; i++) {
  attachListItemsButtons(list[i]);
}

/* VID 5.5.1 */
// Using parentNode to Traverse Up the DOM

listUl.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == "removeLi") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == "upButton") {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == "downButton") {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(li, nextLi.nextElementSibling);
      }
    }
  }
});

/* Creating and Appending New DOM Elements */
addItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  attachListItemsButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
});
/* Remove a NODE element */
/* removeItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.querySelector("#ulList li:last-child");
  ul.removeChild(li);
}) */



/* VID 5.4.5 - 6 */
// Event Bubbling and Delegation / Event Object

/* list.addEventListener("mouseover", (event) => {
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
}) */




/* VID 5.4.4 */
// Listening for Events

/* console.log(listItems);
console.log(listItems1); */

/* for (let i = 0; i < listItems.length; i++) {

  listItems[i].addEventListener("mouseover", () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });

  listItems[i].addEventListener("mouseout", () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });

} */


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
/* removeItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.querySelector("#ulList li:last-child");
  ul.removeChild(li);
}) */

/* VIDEO 5.3.4 / 5 */
/* Creating and Appending New DOM Elements */

/* addItemButton.addEventListener("click", () => {
  let ul = document.querySelector("#ulList");
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
}); */
