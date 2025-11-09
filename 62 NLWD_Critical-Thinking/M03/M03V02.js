//! 1st approch
let count = 0;
const counter1 = (amount) => {
  count = count + amount;
  return count;
};
//? console.log(counter1(3));
//? console.log(counter1(2));

//! 2nd approch
const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };
};
const counter2 = createCounter();
//? console.log(counter2(3));
//? console.log(counter2(5));

//! 3rd approch
class Counter3 {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }

  print() {
    console.log(this.count);
  }
}
const counter4 = new Counter3(10);
counter4.add(2);
counter4.add(3);
counter4.print();

const counter5 = new Counter3(0);
counter5.add(10);
counter5.add(40);
counter5.print();
