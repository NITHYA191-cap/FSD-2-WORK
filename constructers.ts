class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

let s1 = new Student("Nithya", 19);
s1.display();




class Car {
    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    display(): void {
        console.log(this.brand, this.model);
    }
}

let c1 = new Car("Toyota", "Innova");
c1.display();