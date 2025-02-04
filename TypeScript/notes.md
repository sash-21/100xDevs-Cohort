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

## Syntax

1. To define multiple types to a variable we use the OR (`|`) operator. This is how we do it:

```typescript
let value: number | string = 11; // used OR to assign both number & string to the value variable
value = "eleven";
console.log(value);
```

2. We can define **Interfaces** in TS in the following manner, which can be used as a _complex_, _user defined_ type:

```typescript
interface User {
  name: string;
  age: number;
  country: string;
}

let user: User = {
  name: "Sahil",
  age: 22,
  country: "India",
};
```
