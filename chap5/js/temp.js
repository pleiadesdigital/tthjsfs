/* VID 5.4.3 */
// Delaying Execution with setTimeout

window.setTimeout((something) => {
  console.log(something);
}, 8000, 'can I get a hello there!');


window.setTimeout(function(something) {
  console.log(something);
}, 4000, 'can I get a hello there!');






/* VID 5.4.2 */
// Function as Parameter

/* function exec(func, arg) {
  func(arg);
}
exec((something) => {
  console.log(something);
}, "irishman are killers"); */
