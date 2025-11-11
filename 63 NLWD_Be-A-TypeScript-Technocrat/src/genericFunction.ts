//! Generic Function

// const createStringArray = (value: string) => [value];
// const createNumberArray = (value: number) => [value];
// const createUserObjArray = (value: {id: string; name: string}) => {
//     return [value];
// }

const createGenericArray = <T>(value: T) => {
  return [value];
};
const arrString = createGenericArray("Apple");
const arrNum = createGenericArray(121);
const arrObj = createGenericArray({
  id: 121,
  name: "Next Level",
});

//? Tuple
// const createTupleArray = (param1: string, param2: string) => [param1, param2];
const createTupleGenericArray = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const res1 = createTupleGenericArray("Mr. John", true);
const res2 = createTupleGenericArray("User", { id: 123, name: "Mahdi" });

const addStrudentInfo = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};
const student1 = {
  id: 123,
  name: "Rohim",
  hasPen: true,
};
const student2 = {
  id: 124,
  name: "Korim",
  hasBook: false,
  isPresent: true,
};

console.log("", { student1 }, "\n", { student2 });
