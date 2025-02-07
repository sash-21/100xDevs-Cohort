type Human = {
    readonly name: string,
    readonly age: number,
    readonly country: string
};

const obj = {
    name: "John",
    age: 25,
    country: "USA"
};

// so basically we can change the values present inside an object / array
obj.name = "Jack"

// if I use the readonly type Human now
const obj2: Human = {
    name: "Sam",
    age: 24,
    country: "UK"
};

// this will throw errors
obj2.name = "Michael"