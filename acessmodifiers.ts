class Student {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let s = new Student("Nithya");
console.log("Name:", s.name);



class Book {
    public title: string = "Harry Potter";
}

let b = new Book();
console.log(b.title);


class Car {
    public brand: string = "BMW";
}

let c = new Car();
console.log(c.brand);