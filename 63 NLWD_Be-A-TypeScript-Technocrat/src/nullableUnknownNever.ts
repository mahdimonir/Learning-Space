//! nullable types
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All User");
  }
};
getUser("mahdi");
getUser(null);

//! unknown
const disCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const disPrice = input * 0.1;
    console.log(disPrice);
  } else if (typeof input === "string") {
    const [disPrice] = input.split(" ");
    console.log(Number(disPrice) * 0.1);
  } else {
    console.log("Wrong input");
  }
};
disCalculator(100);
disCalculator("100 tk");
disCalculator(null);

//! void
const throwError = (msg: string) => {
  throw new Error(msg);
};
//! throwError("This is an error...!");
