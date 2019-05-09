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

button.addEventListener('click', () => {
  p.innerHTML = input.value + ':';
});

let ul = document.querySelector("ul");
console.log(ul.innerHTML);

ul.innerHTML = "<li>blue cabbage</li>";
