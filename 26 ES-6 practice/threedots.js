const ages1 = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 28,26, 27, 24];
// const allAges = ages1.concat(ages2).concat([30]).concat(ages3);
const allAges = [...ages1, ...ages2, 32, ...ages3];
console.log(allAges);


const businessman = 650;
const minister = 450;
const sochib = 350;
const maximum1 = Math.max(businessman, minister, sochib);
console.log(maximum1);


const totalBlackMoney = [850, 760, 480, 640, 390];
const maximum2 = Math.max(...totalBlackMoney);
console.log(maximum2);