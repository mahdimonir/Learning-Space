//? Union => |
type UserRole = "admin" | "user" | "guest";
const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};
// console.log(getDashboard("user"));

//? Intersection => &
type Employee = {
  id: string;
  name: string;
  phone: string;
};
type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;

const DevJohn: EmployeeManager = {
  id: "123a",
  name: "Dev John",
  phone: "019****",
  designation: "Manager",
  teamSize: 5,
};
// console.log(DevJohn);
