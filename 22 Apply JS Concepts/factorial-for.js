// 2! = 1*2
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10
// Factorial using 'for loop'
    // using variable
    var factorial = 1;
    for (var i = 1; i <= 10; i++) {
        factorial = factorial* i;
        console.log(i, factorial);
    }

    // using function
    function FFactorial(n) {
        var VFactorial = 1;
        for (var i =1; i<= n; i++) {
            VFactorial = VFactorial * i;
        }
        return VFactorial;
    }

    var result = FFactorial(10);
    console.log(result);