// Problem no 1
function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}
var test1Mile = feetToMile(7090);
console.log(test1Mile);
var test2Mile = feetToMile(8529);
console.log(test2Mile);
var test3Mile = feetToMile(9430);
console.log(test3Mile);

// Problem no 2
function woodCalculator(totalWood) {
    var woodInFeet = totalWood;
    return woodInFeet;
}
var chare = 14 * 1;
chare = chare;
var table = 5 * 3;
table = table;
var bad = 12 * 5;
bad = bad;
var totalWood = chare + table + bad;
totalWood = totalWood;
var totalWood = woodCalculator(totalWood)
console.log(totalWood);

// problem no 3     (brick calculator)
function brickCalculator(floor) {
    if(floor < 0){
        return 'valu cannot be negative.';
    }
    else if(floor <= 10){
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor <= 20){
        floor = floor - 10;
        var brick = 1500 + floor * 12 * 1000;
        return brick;
    }
    else{
        floor = floor - 20;
        var brick = 270000 + floor * 10 * 1000;
        return brick;
    }
}
var result = brickCalculator(21);
console.log(result);