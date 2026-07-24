"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    show() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let e = new Employee("Rahul", 50000, "IT");
e.show();
