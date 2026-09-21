let begin: number = 10;
let finish: number = 50;

console.log("Prime numbers are:");

for (let current: number = begin; current <= finish; current++) {
    let primeFlag: boolean = true;

    if (current < 2) {
        primeFlag = false;
    } else {
        for (let divisor: number = 2; divisor <= Math.sqrt(current); divisor++) {
            if (current % divisor === 0) {
                primeFlag = false;
                break;
            }
        }
    }

    if (primeFlag) {
        console.log(current);
    }
}