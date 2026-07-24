class Student {
    constructor(
        public name: string,
        public age: number,
        public course: string
    ) {}

    display() {
        console.log(this.name, this.age, this.course);
    }
}

let s = new Student("Nithya", 19, "B.Tech");
s.display();