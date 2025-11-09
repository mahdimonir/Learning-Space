//! Type Alias
//? object =>
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  phone: string;
  address: {
    division: string;
    city: string;
  };
};
const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "John",
  },
  gender: "male",
  phone: "018********",
  address: {
    division: "Chattogram",
    city: "Chattogram",
  },
};
const user2: User = {
  id: 123,
  name: {
    firstName: "Ms.",
    lastName: "Sonia",
  },
  gender: "female",
  phone: "018********",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

//? boolean =>
type IsAdmin = true;
const isAdmin: IsAdmin = true;

//? string =>
type Name = string;
const myName: Name = "Mahdi Monir";

//? Function =>
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
