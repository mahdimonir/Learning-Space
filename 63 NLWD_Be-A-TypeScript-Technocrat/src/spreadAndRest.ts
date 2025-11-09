//! Spread operator
const friends = ["Mashrafe", "Sakib"];
const schoolFriends = ["Rahat", "Mobarak", "Nahid"];
const collegeFriends = ["Jawad", "Istiaq", "Arafat"];
friends.push(...schoolFriends);
friends.push(...collegeFriends);
// console.log(friends);

const user = { name: "Mahdi", phone: "01810212012" };
const otherInfo = { address: "Mirsharai, Chattogram", gender: "Male" };
const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

//! Rest operator
const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Invitation sent to ${friend}`);
  });
};

// sendInvitation("Rana", "karim", "Rahim", "Asik");
