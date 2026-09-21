"use strict";
let arr = [1, 2, 3, 5];
let n = 5;
let expected = (n * (n + 1)) / 2;
let actual = arr.reduce((x, y) => x + y);
console.log("Missing =", expected - actual);
