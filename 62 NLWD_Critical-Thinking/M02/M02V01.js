// const obj = {
//   nextLevel: { courseId: "level2" },
//   "Programming Hero": { courseId: "level1" },
// };
// console.log(obj["Programming Hero"]);
// console.log(obj.nextLevel);

// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Next Level" };
// const obj = {};
// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };
// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level" };
const map = new Map();
map.set(course1, { courseId: "level1" });
map.set(course2, { courseId: "level2" });

// map.delete(course2);

// map.forEach((value, key) => console.log("Key: ", key, "value: ", value));

// map.forEach(
//   (value, key) => (key.name = "Full Stack Web Development with " + key.name)
// );

// for (const key of map.keys()) {
//   key.name = "Full Stack Web Development with " + key.name;
// }

// console.log(map);

const courses = [
  //   ["Programming Hero", "Level1"],
  //   ["Next Level", "Level2"],
  [course1, "Level1"],
  [course2, "Level2"],
];

const map2 = new Map(courses);
console.log(map2);
