let inputNum: number = 153;
let copyNum: number = inputNum;
let total: number = 0;

while (copyNum > 0) {
    let digit: number = copyNum % 10;
    total = total + (digit * digit * digit);
    copyNum = Math.floor(copyNum / 10);
}

if (total === inputNum) {
    console.log(inputNum + " is an Armstrong Number");
} else {
    console.log(inputNum + " is not an Armstrong Number");
}