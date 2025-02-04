// This is how to define and interface in TS, which can be used as user defined type
interface User {
    name: string,
    age: number,
    country: string
}

// greet the user
function greet(user: User) {
    console.log(`Hello ${user.name}, your age is ${user.age} and your country is ${user.country}`)
}

let user = {
    name: "Sahil",
    age: 22,
    country: "India"
}
greet(user);

// check if the user is legal or not using their age
function isLegal(user: User) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let legality = isLegal(user);
console.log(`Is the user with name ${user.name} legal or not? ${legality}`);