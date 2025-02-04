// This is how to define and interface in TS, which can be used as user defined type
interface User {
    name: string,
    age: number,
    country: string
}

function greet(user: User) {
    console.log(`Hello ${user.name}, your age is ${user.age} and your country is ${user.country}`)
}

let user = {
    name: "Sahil",
    age: 22,
    country: "India"
}

greet(user);