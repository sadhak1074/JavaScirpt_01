const a =  [1, 2, 3, 4, ,5];

a.forEach(function( a, index) {
  console.log("Element at index " + index + " is: " + a);
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log("Element at index " + index + " is: " + number);
});

const number = [1, 2, 3, 4, 5];

const evenNumbers = number.filter(function(number) {
  return number % 2 === 0;
});


