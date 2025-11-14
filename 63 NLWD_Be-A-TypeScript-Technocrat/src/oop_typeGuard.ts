//? type guard

//! typeof
type AlphaNeumeric = number | string;
const add = (num1: AlphaNeumeric, num2: AlphaNeumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};
add(2, 2); // 4
add(2, "2"); // '22'

//! in guard
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This is ${user.name} and his role is : ${user.role}`);
  } else {
    console.log(`This is ${user.name}. He is a normal user`);
  }
};

getUserInfo({ name: "Asif" });
