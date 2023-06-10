//Q-1. Find whether the age of a person lies between 10 and 20.

let age = prompt('Whats your age: ');

if(age>10 && age<20){
    alert("true");
} //Make sure you run these solutions in browser for seeing how does promt and alert fuctions.
else{
    alert("False");
}

//Q-2. Demostrate the use of Switch case in JavaScript.

//Sol. lets do this by creating a calculator using Switch-case in js.

function calculator(operation, num1, num2) {
    let result;
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operation');
        return;
    }
  
    console.log(`Result: ${result}`);
  }
  
  calculator('+', 5, 3); // Output: Result: 8
  calculator('-', 10, 4); // Output: Result: 6
  calculator('*', 2, 6); // Output: Result: 12
  calculator('/', 15, 3); // Output: Result: 5
  calculator('%', 8, 3); // Output: Invalid operation

//Q-3. Write aprogram in JavaScript to check whether the number is divisible by 2 and 3.

let num = prompt('Enter a number: ');
if(num%2==0 && num%3==0){
    alert("True");
}
else{
    alert("False");
}

//Q-4. Write aprogram in JavaScript to check whether the number is divisible by either 2 or 3.
let number = prompt('Enter a number: ');
if(num%2==0 || num%3==0){
    alert("True");
}
else{
    alert("False");
}

//Q-5 Use ternary Operator in a basic program.

let umar = prompt('Enter a number: ');
if(umar>18){
    alert( "you can " (umar<18? "you can't drive" : "you can drive"));
}
