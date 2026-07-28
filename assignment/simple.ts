let Num: number = 17;
let isprime: boolean = true;

if (Num <= 1) {
    isprime = false;
} else {
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) {
            isprime = false;
            break;
        }
    }
}

if (isprime) {
    console.log(Num + " is a Prime Number");
} else {
    console.log(Num + " is Not a Prime Number");
}