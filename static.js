"use strict";
class Student {
    static college = "SVECW College";
}
console.log(Student.college);
class MathDemo {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathDemo.add(10, 20));
class Company {
    static name = "Google";
    static show() {
        console.log(Company.name);
    }
}
Company.show();
