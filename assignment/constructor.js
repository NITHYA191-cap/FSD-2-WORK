"use strict";
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    display() {
        console.log(this.name, this.age, this.course);
    }
}
let s = new Student("Nithya", 19, "B.Tech");
s.display();
