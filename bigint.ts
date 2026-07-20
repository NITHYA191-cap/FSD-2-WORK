const num1 = BigInt("999999999999999999999999");
const num2 = BigInt("1");

console.log(num1 + num2);


const f = 100000000000000000000n;
const g = 99999999999999999999n;

if (f > g) {
    console.log("f is greater");
} else {
    console.log("g is greater");
}