"use strict";
let givenNum = 28;
let factorSum = 0;
for (let checkDivisor = 1; checkDivisor < givenNum; checkDivisor++) {
    if (givenNum % checkDivisor === 0) {
        factorSum += checkDivisor;
    }
}
if (factorSum === givenNum) {
    console.log(givenNum + " is a Perfect Number");
}
else {
    console.log(givenNum + " is not a Perfect Number");
}
