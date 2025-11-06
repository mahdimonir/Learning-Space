// Some
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor", "manager"];
const featureAccessRole = ["admin", "manager"];
const canAccess = currentUserRoles.some((role) =>
  featureAccessRole.includes(role)
);
// console.log(canAccess);

// Array.from()
const arr1 = Array.from({ length: 5 }).fill("");
// console.log(arr1);
const arr2 = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr2);
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );
console.log(range(1, 12, 2));
