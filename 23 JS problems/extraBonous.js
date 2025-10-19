var marks = [89, 97, 89, 68, 94];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    console.log(element);
}

// Use of Function
// 1st example
function add(number1, number2) {
    var total = number1 + number2;
    return total;
}
var result1 = add(65, 89);
console.log(result1);

console.log('Not adding this time');
console.log('Not eat right now');

var result2 = add( 144, 568);
console.log(result2);
// 2nd example
function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}
var numbers = [65, 45, 23, 11, 89, 31, 67, 98];
var output = largestNumber(numbers);
console.log('Output is:', output);