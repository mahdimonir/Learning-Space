var numbers = [45, 65, 78, 12, 3, 54, 65];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers: ", sum);

// using function
function getArraySum(numbers) {
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 55, 39, 54, 65];
var result = getArraySum(numbers);
console.log("Total of the numbers: ", result);

var total = getArraySum([43, 6, 12, 41, 86]);
console.log("Total of the numbers: ", total);