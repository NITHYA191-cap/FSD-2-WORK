"use strict";
class Student {
    name = "Nithya";
}
let s = new Student();
console.log(s.name);
class Employee {
    id;
    constructor(id) {
        this.id = id;
    }
}
let e = new Employee(101);
console.log(e.id);
