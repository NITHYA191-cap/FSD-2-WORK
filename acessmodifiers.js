"use strict";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
let s = new Student("Nithya");
console.log("Name:", s.name);
class Book {
    title = "Harry Potter";
}
let b = new Book();
console.log(b.title);
