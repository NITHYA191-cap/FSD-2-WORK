"use strict";
let text = "hello";
let count = {};
for (let ch of text) {
    count[ch] = (count[ch] || 0) + 1;
}
console.log(count);
