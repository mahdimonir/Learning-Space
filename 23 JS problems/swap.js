// 1st method
var a = 5;
var b = 6
console.log("Before swap: a =", a, ", b =", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ", b =", b);

// 2nd method
var x = 7;
var y = 8;
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, ", y =", y);

// 3rd method (Programming Language spacific)
var p = 10;
var q = 12;

[p, q] = [q, p];
console.log("After swap: p =", p, ", q =", q);