//* Stateless vs stateful
const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};
// console.log(counter(3));
// console.log(counter(2));

const counterObj = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  },
};
counterObj.add(2);
counterObj.add(3);
counterObj.print();
