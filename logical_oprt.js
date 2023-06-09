//LOGICAL OPERATORS

let x = 10;
let y = 20;

//AND operator
console.log(x != y && y > x); //if both values are true it'll return true.
console.log(x == y && y > x); //if one is false it'll return false.
console.log(x == y && y < x); //if both are false it'll return false. 

//OR operator
console.log(x != y || y > x); //if both are true it'll return true.
console.log(x == y || y > x); //if one is true it'll return true.
console.log(x == y || y < x); //if both are false then it'll return false.

//NOT operator
console.log(!false); // It changes false into true.
console.log(!true); // It changes ture into false.
