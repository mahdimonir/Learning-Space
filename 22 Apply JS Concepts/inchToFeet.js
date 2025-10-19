// 12 inch = 1 feet
var inch1 = 156;
var feet1 = inch1/12;

console.log(feet1);

// Function for use same calculation multiple time
function inchToFeet(inch2) {
    var feet2 = inch2/12;
    return feet2;
}
var test1Feet2 = inchToFeet(156);
console.log(test1Feet2);
var test2Feet2 = inchToFeet(288);
console.log(test2Feet2);
var test3Feet2 = inchToFeet(300);
console.log(test3Feet2);