class Student {
    readonly name: string = "Nithya";
}

let s = new Student();
console.log(s.name);



class Employee {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}

let e = new Employee(101);
console.log(e.id);
