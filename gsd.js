"use strict";
let firstNum = 24;
let secondNum = 36;
let value1 = firstNum;
let value2 = secondNum;
// Find GCD using Euclid's algorithm
while (value2 !== 0) {
    let temp = value2;
    value2 = value1 % value2;
    value1 = temp;
}
let gcd = value1;
let lcm = (firstNum * secondNum) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
