// ! constraint => strict rule

type User = {
  id: number;
  name: string;
  role: "admin" | "student" | "stuff";
};

const addUserInfo = <T extends User>(userInfo: T) => {
  return {
    course: "Next Level",
    ...userInfo,
  };
};
const user1 = addUserInfo({
  id: 123,
  name: "Rohim",
  role: "stuff",
  isPresent: true,
});
const user2 = addUserInfo({
  id: 124,
  name: "Korim",
  role: "student",
  hasBook: false,
  hasPen: true,
  isPresent: true,
});

console.log("", { user1 }, "\n", { user2 });
