//! Ternary operator : decision making : ?
const eligibleForMarrid = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible.");
  //   } else {
  //     console.log("You are not eligible !");
  //   }
  const isEligible = age >= 21 ? "You are eligible." : "You are not eligible !";
  //*   console.log(isEligible);
};
eligibleForMarrid(22);
//! Nullish coalescing operator : ?? => while any value 'null' or 'undefined'
const userThem = undefined;
const selectedThem = userThem ?? "Light Theme";
//* console.log(selectedThem);

//! Optional chaining : ?.
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Chattogram",
    town: "Mirsharai",
  },
};
const postalCode = user.address?.postalCode;

//* console.log(postalCode);
