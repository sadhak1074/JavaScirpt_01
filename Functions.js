//Creating an function

function myFunc(){
    console.log("Hello World");
}

//Calling a function
myFunc();

//Function with parameters
function myFunc2(name){
    console.log("Hello "+name);
}

myFunc2("John");

//Function with return value
function myFunc3(name){
    return "Hello "+name;
}

console.log(myFunc3("John"));

//Function with multiple parameters
function myFunc4(name,age){
    return "Hello "+name+" your age is "+age;
}

console.log(myFunc4("John",20));