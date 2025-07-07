function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ': is even number');
        }
        else{
            console.log(num, ': is odd number');
        }
    }
}

function evenify(num) {
    if (num % 2 == 0) {
        return num;
    }
    else{
        return num*2;
    }
}

/*
    nums = [5, 12, 89, 45, 18, 8];
    evenify_all(nums);

    friend_age = [13, 17, 19, 20, 18];
    evenify_all(friend_age);
*/

var result = evenify(13);
console.log('Result', result);
var square = result * result;
console.log('Square', square);
