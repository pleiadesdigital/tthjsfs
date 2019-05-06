/* VIDEO 5.2.5 */
// Using QuerySelector and QuerySelectorAll

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = "slateblue";
}

const errorNotPurple = document.querySelectorAll('.no-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'purple';
}

const evens = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = "#CCCCCC";

}



/* errorNotPurple[0].style.color = 'tomato';
errorNotPurple[1].style.color = 'lime';
errorNotPurple[2].style.color = 'orange'; */


/* const queryAttr = document.querySelector('[title=label]');
console.log(queryAttr);

const qsliEven = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < qsliEven.length; i++) {
  const qsliElement = qsliEven[i];
  qsliElement.style.color = "DeepPink";
}

const qsliOdd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < qsliOdd.length; i++) {
  const qsliElement = qsliOdd[i];
  qsliElement.style.color = "SkyBlue";
}
// qsliEven[2].style.color = "blue";

const qsliOld = document.getElementsByTagName("li");
console.log(qsliOld); */


// VID 5.2.4 Select All Elements By Class Name
/* const myHeadingTag = document.getElementsByTagName("h1");
const myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  const listElement = myList[i];
  listElement.style.color = "DarkSlateBlue";
} */

/* const orangeList = document.getElementsByClassName("orange");
for (let i = 0; i < orangeList.length; i++) {
  const orangeColor = orangeList[i];
  orangeColor.style.color = "Orange";
} */

// VID 5.2.3 Select All Elements of a Particular Type
/* const myHeadingTag = document.getElementsByTagName("h1");
const myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  const listElement = myList[i];
  listElement.style.color = "RebeccaPurple";
} */

const myHeading = document.getElementsByTagName('h1')[0];
const myParagraph = document.getElementsByTagName('p')[1];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myPurpleList = document.getElementsByTagName('li');
const noPurple = document.getElementsByClassName('no-purple');

/* for (let i = 0; i < myPurpleList.length; i++) {
  const element = myPurpleList[i];
  myButton.addEventListener('click', () => {
    element.style.color = myTextInput.value;
  });
} */

/* noPurple[0].style.color = 'orange';
noPurple[1].style.color = 'lime';
noPurple[2].style.color = '#B7950B'; */


/* myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
  myParagraph.style.color = myTextInput.value;
}); */

// VID 5.2.2 Selecting a Page Element by ID
/* const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
}); */



// VID 5.2.1 Change color of element when clicked
/* const myHeading = document.getElementById('myHeading');
myHeading.addEventListener('click', () => {
  myHeading.style.color = 'slateblue';
  console.log("You clicked me!");
}); */
