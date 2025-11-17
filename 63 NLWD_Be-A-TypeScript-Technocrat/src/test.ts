const course: string = "Next Level Web Development";

console.log(course);

//TODO Primitive and Reference

//! Basic Types
//? Primitive Types (number, string, boolean)
//* Number
let numberType = 12;
// a = 'hi' //! Type 'string' is not assignable to type 'number'
//* String
let stringType = "Hello from TypeScript's world!";
//* Boolean
let isAdmin = false;
isAdmin = true;

//? Array
let arr = [1, 2, "Hello", { name: "Testing" }];
// let arr2 : [number] = [1, 2, 'Hello', {name: 'Testing'}]; //! While types is defined you can't assign another types

//? Tuples
let tupleArr: [string, number] = ["Testing", 121]; //! While you have fixed value with type

//? Enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}
UserRoles.ADMIN;
enum StatusCodes {
  ABANDONE = "abandoned status code 500",
  NOT_FOUND = "not found status code 404",
}
StatusCodes.NOT_FOUND;

//? Any
//! => With type 'any', you can assign any thing and do any operations.
let anyType;
let anyType2: any = 12;
anyType2 = "Testing any type";
anyType2.toUpperCase();

//? Unknown
//! => With type 'unknown', you can assign any thing , but before doing any operation you have to check it's type.
let unknownType: unknown;
unknownType = 12;
unknownType = "Testing unknown type";
if (typeof unknownType === "string") {
  unknownType.toUpperCase();
}

//? Void
//! => While a function is not returnign anything that time assign 'return' type as 'void'.
function voidType(): void {
  console.log("Testing void type");
}

//? Null
let nullType: null = null;
// nullType = 'hi' //! String is not assignable to type 'null'.

//? Undefined
let undefinedType: undefined;

//? Never
const throwError = (msg: string) => {
  throw new Error(msg);
};
// throwError("This is an error...!");

//? Type Inference
//! => While you didn't assing any type, but depending on the value it auto the type, it's called 'Inference'.
let inferenceType = 12;

//? Type annotations
//! => While you assign type, it's called 'type annotation'.
let annotationType: string = "This is an annotation type!";
function annotateFnc(a: number, b: string): void {}

//* Interfaces and Type Aliases
//? Defining interfaces
//? Using interfaces to define object shapes
//? Extending interfaces
interface User {
  name: string;
  email: string;
  password: string;
  gender?: "male" | "female";
}

interface Admin extends User {
  admin: boolean;
}

function getUserData(obj: Admin) {
  obj.admin;
}

getUserData({ name: "", email: "", password: "", admin: true });

//? Type Aliases
type arg = string | null;
function abcd(obj: arg) {}

//* Union and Intersection Types
//? union => |
let union: string | number | null;

//? intersection => &
type Person = {
  name: string;
  email: string;
};
type AdminPerson = Person & {
  getDetails(user: string): void;
};

function intersectionFnc(data: AdminPerson) {
  data.getDetails;
}
