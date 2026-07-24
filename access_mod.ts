class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
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