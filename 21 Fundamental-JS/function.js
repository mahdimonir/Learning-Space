
function callingBaby() {
    console.log('Jaan o baby');
    console.log('Hey baby... koi tumi?');
}
callingBaby();

var meetingDate = 14;
var meetingPlace = 'Restaurent';
callingBaby();
var hangOut = 'TSC';
callingBaby();

// Advance usase of Function
function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(100);

// Use of 'return'
function double(num) {
    var result = num * 2;
    return result;
}
var first = double(20);
var second = double(60);
console.log(first, second);

// Calculate total
var total = first + second;
console.log(total);