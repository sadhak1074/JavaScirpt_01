//Q-1. Write a program to print the marks of a student in an object using for loop.
let students = { 
    harry: 29,
    sadhak: 23,
    buck: 30
  };
  
  let studentNames = Object.keys(students);
  
  for (let i = 0; i < studentNames.length; i++) {
    let student = studentNames[i];
    let marks = students[student];
    console.log(`Marks for ${student}: ${marks}`);
  }
  

//Q-2. Do Q-1 using for in loop.

let student = { 
    harry: 29,
    sadhak: 23,
    buck: 30
  };
  
  for (let student in students) {
    console.log(`Marks for ${student}: ${students[student]}`);
  }
  
//Write a number to "Try again" until user enters correct number.

function askNumber() {
    let num = parseInt(prompt("Enter a number:"));
  
    if (num < 100) {
      alert("Try again");
      askNumber(); // Recursive call to ask for number again
    } else {
      alert("Number entered:"+num);
    }
  }
  
  askNumber(); // RUN THIS IN CONSOLE OF YOUR BROWSER.
  
//Write a program to find mean of 5 numbers.

function mean(a, b, c, d, e) {
    console.log((a + b + c + d + e) / 5);
  }
  
  mean(1, 2, 3, 4, 5);

// A little advanced solution for Q-4.
function calculateMean(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    let mean = sum / numbers.length;
    return mean;
  }
  
  let numbers = [10, 15, 20, 25, 30];
  let mean = calculateMean(numbers);
  console.log("Mean:", mean);
  

  
