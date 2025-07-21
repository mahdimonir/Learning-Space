
// Array
var friendAge = [19, 20, 18, 21]
console.log(friendAge);

// Finding valu by position
var friendAge = [19, 20, 18, 21]
console.log(friendAge[0]);

var friendAge = [19, 20, 18, 21]
var jalamAge = friendAge[2];
console.log(jalamAge);

// Replace valu
var friendAge = [19, 20, 18, 21]
friendAge[2] = 22;
console.log(friendAge);

// Position
var friendAge = [19, 21, 23, 25]
var position = friendAge.indexOf(25)
console.log(position);

// push array for adding new valu  
var friendAge = [15, 21, 14, 16];
friendAge.push(17);
friendAge.push(19);
console.log(friendAge);

// Pop array for delating last valu
friendAge.pop();
console.log(friendAge);

// Total number of element  (.length)
var friendAge = [15, 21, 14, 16];
console.log(friendAge);
console.log(friendAge.length);
var friendAge = [15, 21, 14, 16];
friendAge.push(17);
friendAge.push(19);
console.log(friendAge);
console.log(friendAge.length);

// String valu writing style
var teaLine = ['Kalam', 'Salam', 'Balam']
console.log(teaLine);
//Shift array for delate valu from beganing
var teaLine = ['Kalam', 'Salam', 'Balam']
teaLine.shift();
console.log(teaLine);
//Unshift array for add valu from beganing
var teaLine = ['Kalam', 'Salam', 'Balam']
teaLine.unshift('Dalam');
console.log(teaLine);

// Slice array for delate valu from spacifick position
var teaLine = ['Palam', 'Kalam', 'Salam', 'Balam', 'Jalam', 'Talam'];
var part = teaLine.slice(2, 5);
console.log(part);
console.log(teaLine);