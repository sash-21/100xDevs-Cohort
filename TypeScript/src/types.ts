type Individual = {
    firstname: string,
    lastname: string,
    age: number
};

let SS: Individual = {
    firstname: "Sahil",
    lastname: "Shah",
    age: 22
};

let SP: Individual = {
    firstname: "Sakshi",
    lastname: "Paygude",
    age: 20
};

console.log(SS);
console.log(SP);

type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
    console.log(`The ID is ${id}`);
}

printId(101);
printId("202");

type Employees = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employees & Manager;

const teamLead: TeamLead = {
    name: "sahil",
    startDate: new Date(),
    department: "Engineering",
};

console.log(teamLead);