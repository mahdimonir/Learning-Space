num = 5;
switch (num) {
    case 1000:
        console.log('I am 1000');
        break;
    case 100:
        console.log('I am 100');
        break;
    case 20:
    case 10:
        console.log('I am either 10 or 20');
        break;
    case 5:
        console.log('I am 5');
        break;

    default:
        console.log("I don't know who you are?");
        break;
}