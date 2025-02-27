## TypeScript

1. Javascript, Python, PHP are loosely typed language unlike the other languages like C++, Java, Rust, Golang and hence type checking in Javascript doesn't happen.

2. For e.g the following code won't work in C++ if we execute it:

```c++
int main() {
    int number = 1;
    number = "text";
    return 0;
}
```

But the same code would work in JavaScript:

```javascript
function main() {
  let number = 1;
  number = "text";
  return number;
}
```

3. The above reason is where the downsides of JavaScript come in action and that needed to be resolved.

4. People realised that **JavaScript** is a powerful language but it lacks `types` or datatypes. This is the reason why **TypeScript** was introduced as a new language to add `types` on the top of JavaScript.

5. TypeScript is a _strict syntactical_ superset of JavaScript and adds optional static typing to the language.

6. TypeScript code never runs in you browser, because the browser only understands JavaScript. TypeScript has a compiler that converts the code into JavaScript and since JS is a runtime language it runs in the browser.

7. When TS is compiled down to JS, you get `type checking` (similar to C++). If there is an error the conversion to JavaScript fails.

## Syntax & Terms Explanation

1. To define multiple types to a variable we use the OR (`|`) operator. This is how we do it:

```typescript
let value: number | string = 11; // used OR to assign both number & string to the value variable
value = "eleven";
console.log(value);
```

### ----------Interfaces----------

2. We can define **Interfaces** in TS in the following manner, which can be used as a _complex_, _user defined_ type:

```typescript
interface User {
  name: string;
  age: number;
  country: string;
}

// this defines an object user ot type `User`
let user: User = {
  name: "Sahil",
  age: 22,
  country: "India",
};
```

3. An _Interface_ can be implemented in Classes too. For e.g in the following code the `Person` interface is implemented in the `Employee` class. Hence this means there can be different variants of the Person interface in different classes (Manager, CEO etc)

```typescript
interface Person {
  name: string;
  age: number;
  country: string;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  greet(phrase: string): void {
    console.log(`${phrase}: ${this.name} ${this.age} ${this.country}`);
  }
}
```

4. Hence we can use the **Interfaces** to aggregate data as well as to implement other classes from them.

5. We can also implement Abstract Classes & Abstract Methods here (Not related to TS).

```typescript
abstract class Shape {
  abstract name: string;

  abstract calculateArea(): number;

  describe(): void {
    console.log(
      `This shape is a ${
        this.name
      } with an area of ${this.calculateArea()} units squared.`
    );
  }
}

class Rectangle extends Shape {
  name = "Rectangle";

  constructor(public width: number, public height: number) {
    super();
  }

  // Implement the abstract method
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Another subclass implementing the abstract class
class Circle extends Shape {
  name = "Circle";

  constructor(public radius: number) {
    super();
  }

  // Implement the abstract method
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
```

### ----------Types----------

6. **_Types_** in TypeScript are very similar to the Interfaces as they also let you aggregate some data together. Types can be defined in the following mammer:

```typescript
type User = {
  firstname: string;
  lastname: string;
  age: number;
};
```

7. If a value can be expected to have values of multiple types then we can form the union of multiple types in the TS Type too.

```typescript
type StringOrNumber = string | number;

function printId(id: StringOrNumber): void {
  console.log(`The ID is ${id}`);
}

// both the cases work
printId(101);
printId("202");
```

8. Type can also be created consisting of multiple types. So if you want to create a type that has property of multiple types then we can form the intersection of multiple types too.

```typescript
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "sahil",
  startDate: new Date(),
  department: "Engineering",
};
```

### ----------Arrays----------

9. The arrays are declared in Typescript just by simply using `[]` in front of the type defined for the variable.

```typescript
function returnMax(numList: number[]) {
  let maxi = 0;
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] > maxi) {
      maxi = numList[i];
    }
  }
  return maxi;
}

let nums: number[] = [9, 4, 7, 2, 5, 8, 11, 1];

let maxNum = returnMax(nums);
console.log(`The max number in the array is ${maxNum}`);
```

### ----------Enums----------

10. Enums in TS can be declared as following. If not given any explicit values to them, the first enum would have value `0` and this would keep on going so on till the last one.

```typescript
enum Direction {
  UP, // 0
  DOWN, // 1
  RIGHT, // 2
  LEFT, // 3
}
```

11. In express we can define values for the status codes too in this way:

```typescript
enum ResponseStatus {
  SUCCESS = 200,
  NOTFOUND = 404,
  ERROR = 500,
}
```

## Some Other Advanced APIs

### ----------Pick----------

1. The Pick API is used to pick values from another type or interface to create a new interface or type. It can be used as follows:

```typescript
interface UserData {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

// created the UserProfile type using the fields from the UserData interface
type UserProfile = Pick<UserData, "id" | "name" | "email" | "age">;

function displayUserProfile(user: UserProfile): void {
  console.log(
    `UserID: ${user.id} \nName: ${user.name} \nEmail: ${user.email} \nAge: ${user.age}`
  );
}
```

### ----------Partial----------

1. Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

```typescript
// this is the original interface
interface User {
  name: string;
  email: string;
  image: string;
}

// partial one looks something like this
interface User {
  name?: string;
  email?: string;
  image?: string;
}
```

2. So basically `Partial` creates a copy of the original type or interface having optional values.
3. The Partial API can be implemented this way:

```typescript
interface User {
  name: string;
  id: number;
  email: string;
  image: string;
}

type UserDetails = Pick<User, "name" | "email" | "id">;
type UserDetailsOptional = Partial<UserDetails>;

function showUserDetails(details: UserDetailsOptional) {
  // some processing
}

showUserDetails([]);
```

### ----------ReadOnly----------

1. The `Readonly` API creates just a read only version of an object / array in Typescript. So in TS we can update the values present in an object or array to avoid that we use `readonly` API.

2. Readonly can be defined in 2 ways. If we just want some specific values of an object to be readonly then we can use this.

```typescript
type Human = {
  readonly name: string;
  age: number;
  readonly country: string;
};

const obj: Human = {
  name: "John",
  age: 25,
  country: "USA",
};
```

3. While if we want the whole object to be readonly then we can also use this:

```typescript
type Human = {
  name: string;
  age: number;
  country: string;
};

const obj: Readonly<Human> = {
  name: "John",
  age: 25,
  country: "USA",
};
```

### ----------Record----------

1. Record basically helps to consolidate a complex type or interface in a simplified manner. We can just specify the types of the keys and values in the Record for the complex values.

```typescript
type Users = {
  name: string;
  age: number;
};

type UsersData = Record<string, Users>;

const users: UsersData = {
  "ras@qd1": {
    name: "Sahil",
    age: 22,
  },
  "xyz@p34": {
    name: "Sakshi",
    age: 20,
  },
};
```
