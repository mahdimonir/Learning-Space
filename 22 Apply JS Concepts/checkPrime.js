var n = 77;
for (i = 2; i < n -1; i++) {
    console.log(i, n % i);
    if (n % i == 0) {
        console.log('Not a prime number');
        break;
    }
}


// Using function
function isPrime(n){
    for (i = 2; i< n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'Your number is a prime number'
}
var result = isPrime(139);
console.log(result);