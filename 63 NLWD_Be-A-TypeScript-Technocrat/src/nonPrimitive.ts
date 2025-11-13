//? array, object

//* Array
let bazarList: string[] = ["eggs", "milk", "sugar"];
bazarList.push("solt");
// bazarList.push(12) //! type 'number' is not assignable

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 2, "sugar"];
mixedArr.push(12);
// mixedArr.push(true) //! type 'boolean' is not assignable

//? Twople => Where the pattern is fixed
let cordinates: [number, number] = [20, 30];
// let cordinates2: [number, number] = [20, 30, 40] //! Source has 3 element(s) but target allows only 2
let userNameAndRoll: [string, number] = ["mahdi", 123];
let userDetails: [number, string, string] = [123, "mahdi", "chattogram"];

//* Object => reference type
const user: {
  firstName: string;
  middleName?: string; //? optional type
  lastName: string;
  isMarid: boolean;
  institute?: "Programming Hero"; //? value => type : Literal type
  readonly level?: string; //? access modifier
} = {
  firstName: "Moniruzzaman",
  lastName: "Mahdi",
  isMarid: false,
  institute: "Programming Hero",
  level: "Next Level",
};
// user.institute = "Programming Hero Next" //! Type '"Programming Hero Next"' is not assignable to type '"Programming Hero"'.
// user.level = "Pro Level" //! Cannot assign to 'level' because it is a read-only property.

console.log(user);
