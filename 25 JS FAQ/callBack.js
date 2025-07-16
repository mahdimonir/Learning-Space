
function explain_callback(name, age, task){
    console.log('Hello,', name);
    console.log('Your age is:', age);
    task();
}

function washHand(){
    console.log('Wash your hand with soap');
}

function takeShower(){
    console.log('Take shower');
}

function stopScrolingFB(){
    console.log('Stop scroling facebook that much');
}

explain_callback('Sogir Uddin', 19, washHand);
explain_callback('Kobir Uddin', 17, takeShower);
explain_callback('Jogir Uddin', 15, stopScrolingFB);