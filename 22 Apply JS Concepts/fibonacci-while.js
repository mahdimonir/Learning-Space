// using variable
var i = 2;
var fibo = [0, 1];
while(i <= 10) {
    fibo[i] =fibo[i-1] + fibo[i-2];
    // console.log(i, fibo);
    i++;
}
console.log(fibo);

// using function
function FFibonacci(n) {
    var i = 2;
    var VFibonacci = [0, 1];
    while (i <= n) {
        VFibonacci[i] = VFibonacci[i-1] + VFibonacci[i-2];
        i++;
    }
    return VFibonacci;
}
var result = FFibonacci(8);
console.log(result);