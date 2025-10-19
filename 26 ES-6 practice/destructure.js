const person = { name: 'Jack William', age: 17, job: 'Facebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01714258769', friends: ['Tom hanckes', 'Tom cruise', 'Tom yearn']};

// const gfName = person.gfName
// const phone = person.phone;

const { name, gfName, phone, address, job, friends } = person;
console.log(name, phone);
console.log(job, address);
console.log(gfName);
console.log(friends);

// Array destructureing
const friendsName = ['Sakib khan', 'Arman khan', 'Aamir khan', 'Salman khan', 'Sharukh khan'];
const [mutuleFriend, newFriend, ...restFriends] = friendsName;
console.log(restFriends);



const complexObject = {
    name: 'Asif',
    info: {
        address: 'Kola Bagan',
        leader: 'Khan Chouduri'
    }
}
console.log(complexObject);