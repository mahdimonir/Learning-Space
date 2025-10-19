// This function generate Pin  
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display Pin
const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// // display Pin
// function displayPin() {
//     document.getElementById("display-pin").value = pin;
// }



// This function clear all the values
function clearScreen() {
    document.getElementById("typed-numbers").value = "";
}


// This function display values
function display(value) {
    document.getElementById("typed-numbers").value += value;
}

/**
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("typed-numbers").value;
    var q = eval(p);
    document.getElementById("typed-numbers").value = q;
}
 */
