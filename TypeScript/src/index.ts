let x: number = 1; // this is how to define integer variables in TS
console.log(x);

let s: string = "This is number 1"; // this is how to define strings in TS
console.log(s);

// Greet the User
let username: string = "Sahil"; // raw code
console.log(`Hello ${username}`);

function hello(name: string) { // functional code 
    console.log(`Hello, ${name}`)
}
hello("Sahil");

// sum of 2 numbers
function add(a: number, b: number): number {
    return a + b;
}
let ans = add(21, 27);
console.log(`The sum is ${ans}`)

// check age
function verified(age: number): boolean {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let isVerified: boolean = verified(21);
console.log(`The person with age 21 is verified or not? ${isVerified}`);

// create a function that takes another function as an input and runs after 3 seconds
function delayedCall(fn: (a: string) => void) {
    setTimeout(fn, 3000);
}

function great(s: string): void {
    console.log(`Hello, ${s}`);
}
delayedCall(() => great("Sakshi"));