//! object destructuring
const user = {
  id: 123,
  name: {
    firstName: "Mahdi",
    lastName: "Moniruzzaman",
  },
  gender: "Male",
  fvrtColor: "black",
};
// const firstName = user.name.firstName; //* nested

const {
  name: { firstName: userName },
} = user; //? nested destructuring with assinging name alias
// console.log(userName);

//! array destructuring
const friends = ["Mashrafe", "Sakib", "Rahat", "Mobarak", "Nahid"];
// const bestFriend = friends[1];
const [, , bestFriend] = friends; //? destructuring array and skiping unused in indices with comma(',')
console.log(bestFriend);
