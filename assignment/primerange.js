
let start = 10;
let end = 30;
console.log("Prime numbers are:");
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
