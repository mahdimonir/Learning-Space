//? Problem Statement

//* Your task is to write an efficient function that takes both lists as input and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//---------- Data setup block ----------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// user 25000 to 49999 are common (25,000 common user)
// ----------- Data setup block----------- //

// ---------ALGORITHMS---------- //

const commonFriendsSlow = (usersA, usersB) => {
  const startTiem = performance.now();

  const commonFriends = [];

  //! O(n^2)
  usersA.forEach((userA) => {
    //* O(n)
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriends.push(userB);
      }
    });
  });

  const endTiem = performance.now();

  return { count: commonFriends.length, timeTookToFinish: endTiem - startTiem };
};

console.log(commonFriendsSlow(usersA, usersB));

const commonFriendsFast = (usersA, usersB) => {
  const startTiem = performance.now();

  const commonFriends = [];

  //* O(n)
  const idListA = new Set(usersA.map((user) => user.id));

  //* O(n)
  usersB.forEach((userB) => {
    //* O(1) => lookup
    if (idListA.has(userB.id)) {
      commonFriends.push(userB);
    }
  });

  const endTiem = performance.now();

  return { count: commonFriends.length, timeTookToFinish: endTiem - startTiem };
};

// console.log(commonFriendsFast(usersA, usersB));
