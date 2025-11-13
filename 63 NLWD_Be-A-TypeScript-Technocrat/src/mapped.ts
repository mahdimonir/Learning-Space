//? mapped type

const arrayOfNum: number[] = [1, 2, 5];

const arrayOfStr: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStr);

type Area<T> = {
  [key in keyof T]: T[key];
};

type AreaOfNum = {
  height: number;
  width: number;
  isOkay: boolean;
  ownerName: string;
};
// const area1: AreaOfNum = {
const area1: Area<AreaOfNum> = {
  height: 4,
  width: 3,
  isOkay: true,
  ownerName: "Mr. John",
};
