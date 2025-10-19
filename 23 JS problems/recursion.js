function factorialRecursive(num){
    if(num == 1){
        return 1;
    }
    else{
        return num * factorialRecursive(num -1);
    }
}
var result = factorialRecursive(5);
console.log('Result ', result);