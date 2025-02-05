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
