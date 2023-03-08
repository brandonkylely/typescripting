// https://www.w3schools.com/typescript/typescript_tuples.php

// npx ts-node simple-types.ts
// use this command to run this ts file in node

// NOT DISCUSSED HERE:
// type: never
// type: undefined
// type: null
// destructuring tuples

// STRING
// #EXPLICIT
let firstName: string = "Dylan";

// #INFERRED (IMPLICIT)
// let firstName = "Dylan";

// #EXAMPLE ERROR
// error: type does not match
// firstName = 20;

// #UNABLE TO INFER
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);


// ANY (avoid using)
// use 'any' to disable type checking
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// error if not any
// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.


// UNKNOWN (use over any)
// similar to 'any', prevents unknown types from being used
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.


// ARRAYS 
// #STRING ARRAY
const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// #NUMBER ARRAY
const numbers: number[] = [];
numbers.push("1");
numbers.push(1);

// #READONLY ARRAY
const names1: readonly string[] = ["Dylan"];
names1.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// #INFERENCE ARRAYS
const numbers1 = [1, 2, 3]; // inferred to type number[]
numbers1.push(4); // no error
// comment line below out to see the successful assignment
numbers1.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers1[0]; // no error


// #TUPLES

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];

// #GOOD PRACTICE
// its good practice to make your tuple readonly

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

// #NAMED TUPLES 
const graph: [x: number, y: number] = [55.2, 41.3];


// OBJECT TYPES
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

// #INFERRED OBJECT TYPES
const car1 = {
    type: "Toyota",
  };
  car1.type = "Ford"; // no error
  car1.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// #OPTIONAL PROPERTIES
const car2: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car2.mileage = 2000;

// #INDEX SIGNATURES
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.