// we created an interface named Person
interface Person {
    name: string,
    age: number,
    country: string,
    company: string,
    greet(phrase: string): void
}

// this interface can be implemented in a class
class Employee implements Person {
    name: string;
    age: number;
    country: string;
    company: string;

    constructor(n: string, a: number, c: string, com: string) {
        this.name = n;
        this.age = a;
        this.country = c;
        this.company = com;
    }

    greet(phrase: string): void {
        console.log(`${phrase}: \nName -> ${this.name} \nAge -> ${this.age} \nCountry -> ${this.country} \nCompany -> ${this.company}`)
    }
}

let Sahil = new Employee("Sahil", 22, "India", "Cloudanix");
let Sakshi = new Employee("Sakshi", 20, "UK", "JP Morgan");

Sahil.greet("These are my details");
Sakshi.greet("These are my details");