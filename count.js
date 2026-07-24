"use strict";
let arr = [1, 2, 2, 3, 3, 3];
let count = {};
for (let i of arr) {
    count[i] = (count[i] || 0) + 1;
}
console.log(count);
