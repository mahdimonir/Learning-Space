//? Interface
//! Inference work with => Object type => object, array, function

//* Object
interface User {
  name: string;
  age: number;
}
interface userWithRole extends User {
  role: "admin" | "user";
}

const user1: User = {
  name: "Mr. Harsh",
  age: 26,
};

const user2: userWithRole = {
  name: "Mr. Hitech",
  age: 29,
  role: "admin",
};

//* Array
interface Friends {
  [index: number]: string;
}
const friends: Friends = ["A", "B", "C"];

//* Function
interface Add {
  (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => num1 + num2;
