//* Function
// arow function, normal function
//? normal function
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

//? arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

//? object => function => method
const poorUser = {
  name: "mahdi",
  balance: 0,
  addBalance(value: number) {
    return this.balance + value;
  },
};
poorUser.addBalance(1000);

const arr: number[] = [1, 2, 3];
const sqrArray = arr.map((elem: number): number => elem * elem);
