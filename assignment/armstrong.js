"use strict";
let inputNum = 153;
let copyNum = inputNum;
let total = 0;
while (copyNum > 0) {
    let digit = copyNum % 10;
    total = total + (digit * digit * digit);
    copyNum = Math.floor(copyNum / 10);
}
if (total === inputNum) {
    console.log(inputNum + " is an Armstrong Number");
}
else {
    console.log(inputNum + " is not an Armstrong Number");
}
