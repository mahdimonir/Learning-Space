function addNumbers(num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    
    function logInfo(message){
        console.log(message);
    }
    logInfo('Good morning');

    return sum;
}
var result = addNumbers(3, 5, 8, 15);
console.log(result);

// Another example
function getFullName(firstName, lastName) {
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}
const name = getFullName('Dr.', 'Hanif', 'Songket', 'Poribahan');
console.log(name);