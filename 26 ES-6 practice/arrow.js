// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result1 = doubleIt(5);
console.log(result1);

const add = (x, y) => x + y;
const result2 = add(50, 40);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result4 = sum * diff;
    return result4;
}
const result4 = doMath(9, 6);
console.log(result4);