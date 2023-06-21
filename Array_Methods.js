//Array methods.
let n = [1, 4, 9, 2];

console.log(n.toString());//Converts array to string.

console.log(n.join("-"));//Joins all array elements using a separator.

console.log(n.pop());//Removes last element from array.

console.log(n.push(3));//Adds 3 at the end of the array.

console.log(n.shift());//Remove first element and returns it.

console.log(n.unshift());//Adds element to the beginning, Returns new array length.

console.log(delete n[0]);

let a1 = [1, 2, 3];
let a2 = [3, 3, 3];

console.log(a1.concat(a2));//returns [ 1, 2, 3, 3, 3, 3 ].

let a = [7, 9, 8];
console.log(a.sort());//Modifies original array.

const numbers = [ 1, 2, 3, 4, 5];
console.log(numbers.splice(2, 1, 3, 4));//Adds elements to original array.

const num = [1, 2, 3, 4];
console.log(num.slice(2));//returns [3, 4].
console.log(num.slice(1, 3));//returns [2, 3].

const x = [4, 2, 0];
console.log(x.reverse()); //reverses order in place.
