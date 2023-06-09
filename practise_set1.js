// Q-1. Create a variable of type String and try to add a number to it.
// Sol.
let a = 'I love JavaScript';
a = a + 1;
console.log(a);

//Q-2. Use typeof operater to find the data type of a in last question.
//Sol.
console.log(typeof a);

//Q-3. Create a const object and check if we can hold a number using same object.
//Sol.
const obj = {
    name: 'John',

    class: '10th',

    Roll_no: 18
}

//obj = 8; , this will throw an error obj is a const value and cannot be redeclared or updated.

//Q-4. Update some keys in obj in Q-3.
//Sol.
obj.name = 'Jane';
obj.class = '12th';
console.log(obj.name)

//Q-5. Make a dictionary of 5 words.
//Sol.

const dict = {
    selenophile : "The person who loves moon",
    selenographer : "The person who takes pictures of moon",
    selenography : "The art of taking pictures of moon",
    nelenophile: "the person who lovers clouds",
    nelenography: "Study of the surface of the clouds"
}

console.log(dict.nelenography);
