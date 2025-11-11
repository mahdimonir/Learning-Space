//* dynamically generalize => Generic

type GenericArray<T> = Array<T>;

// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
// const friends : Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[] = [4, 7, 11]
// const rollNumbers: Array<number> = [4, 7, 11]
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligible: boolean[] = [true, false, true]
// const isEligible: Array<boolean> = [true, false, true]
const isEligible: GenericArray<boolean> = [true, false, true];

//? Generic with Tuples
type Cordinates<X, Y> = [X, Y];
const cordinates1: Cordinates<number, number> = [20, 32];
const cordinates2: Cordinates<string, string> = ["25", "38"];

//? Generic with Array of Object
const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];
