//1. var
var a = 10; // WE DECLARE A VARIABLE WITH var

console.log(a) //THIS WILL PRINT 10

var b = 20; //HERE WE DECLARED ANOTHER VARRIABLE(b) WITH VAR

var b = 30; //HERE WE REDECLARED THE VARIABLE b 

b = 40; //Here we updated the redeclared b

console.log(b)

var c = 50; 

{
    var  c = 70; //HERE WE reDECLARED VARIABLE (c) WITH VAR inside a block 

    console.log(c) 
}

//Hence var can be redeclared and updated and it affects the global variables too even if its in a block.