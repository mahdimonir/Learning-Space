// using variable
var i = 1;
var factorial = 1;
while(i <= 10) {
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}
console.log(factorial);

// using function
function FFactorial(n) {
    var i = 1;
    var VFactorial = 1;
    while (i <= n) {
        VFactorial = VFactorial * i;
        i++;
    }
    return VFactorial;
}
var result = FFactorial(8);
console.log(result);