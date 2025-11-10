//? Type Assertion
let anything;
anything = 123;
(anything as number).toFixed();

const assertionType = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};
const result1 = assertionType(2) as number;
const result2 = assertionType("2 kg") as string;
console.log("", { result1 }, "\n", { result2 });
