
// Primitive objects: Number, string, boolean, null, undefined

const PI = 3.14159;
let msg = "I love cats";
let x = msg.indexOf(cat); // returns 7 for the start of the word cat // -1 if not found
let length = msg.length; // property returns string length
let y = msg.slice(2); // substring to return a new string starting at the index
let z = msg.slice(2, 5); // subtring with optional end parameter
let q = msg.replace("love", "hate"); // replace part of a string


// String Template Literals
// Similar to string interpolation in C# or f string in Python
let mylesMsg = `Myles said ${msg}.`; // Have to use back tick charaters for the string

// undefined
// Javascript doesn't know or can't find what you're talking about

// null
// What you're asking for is found, but it has no value


// Math object
Math.PI;
Math.round(2.999); // Round to 3
Math.floor(2.999999); // Chops off the .99999 and returns 2
Math.random(); // Returns a random number between 0 and 1, but not including 1

// ParseInt
let myNum = parseInt("14");
let myLetter = parseInt("A");   // Returns NaN when can't be parsed (NaN is falsey)



let number = parseInt("34"); // Convert string to integer

// Conditional logic
// JS will short ciruit first part of logical && and only evaluate the first part

const day = 2;

switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        break;
}