/* WORKING WITH NUMBERS */

// VID 3.6 Challenge: Write program to generate ramdom number from a user prompt, for two chosen numbers in a range

/* var lowNum = parseInt(prompt("Enter first low number"));
var highNum = parseInt(prompt("Enter first high number"));


// sample range 10 - 15
testRand = Math.floor((Math.random() * (highNum - (lowNum - 1))) + lowNum);
document.write(testRand); */


// VID 3.5 Generate Random Numbers between a range
/* var rollDice = Math.floor(Math.random() * 6) + 1;

alert("You generated a " + rollDice); */

// VID 3.4 The Mad Libs Challenge RV
/* var counter = 3;

var adjective = prompt("Type an adjective" + "<br>You have " + counter + " questions remaining");
counter -= 1;
var verb = prompt("Type a verb" + "<br>You have " + counter + " questions remaining");
counter -= 1;
var noun = prompt("Type a noun" + "<br>You have " + counter + " questions remaining");
alert('All done. Ready for the message?');

var sentence = "<h4>There once was a " + adjective;
sentence += " programmer who wanted to use JavaScript to " + verb;
sentence += " a " + noun + ".</h4>";

document.write(sentence); */

// VID 3.3 Numbers and Strings
/* var htmlBadges = prompt("Number of HTML badges?");
var cssBadges = prompt("Number of CSS badges?");

var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
console.log(totalBadges); */


// VID 3.2 Doing Math
/* var secondsPerMinute = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;
document.write("<p>There are " + secondsPerDay + " seconds in a day.</p>");

var yearsAlive = 2018 - 1973;
document.write("<p>You are " + yearsAlive + " years old.</p>");
var secondsAlive = yearsAlive * weeksPerYear * daysPerWeek * hoursPerDay * minsPerHour * secondsPerMinute;
document.write("<p>You are " + secondsAlive + " seconds alive.</p>");

var secondsYear = secondsPerDay * 365 * 45;
console.log(secondsYear); */
