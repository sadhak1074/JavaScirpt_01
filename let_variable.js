let a = 10;

console.log(a);

//let a = 10 but this will throw an error Hence we can't redeclare a variable with let

a = 20;

console.log(a); //This will print 20, hence we can update a variable declared by let

{
    let a = 300; 
     console.log(a); //This will print 300 it doesn't affect global variable 
}

//Note: let is better than var is most of the cases.