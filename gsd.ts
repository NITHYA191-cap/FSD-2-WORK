let firstNum: number = 24;
let secondNum: number = 36;

let value1: number = firstNum;
let value2: number = secondNum;

// Find GCD using Euclid's algorithm
while (value2 !== 0) {
    let temp: number = value2;
    value2 = value1 % value2;
    value1 = temp;
}

let gcd: number = value1;
let lcm: number = (firstNum * secondNum) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);